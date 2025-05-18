import * as tf from '@tensorflow/tfjs';
import type { WasteItem } from '../types';

// Model configuration
const IMAGE_SIZE = 224;
// Primary and fallback model URLs
const MODEL_URLS = [
  'https://teachablemachine.withgoogle.com/models/5WSeqUVW1/model.json',
  'https://storage.googleapis.com/smarteco-models/waste-classifier/model.json'
] as const;
const WASTE_CATEGORIES = ['plastic', 'glass', 'paper', 'metal'] as const;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

class WasteClassifier {
  private model: tf.LayersModel | null = null;

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loadModel() {
    let lastError: Error | null = null;

    // Try each URL with retries
    for (const modelUrl of MODEL_URLS) {
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          if (!this.model) {
            console.log(`Attempting to load model from ${modelUrl} (attempt ${attempt})`);
            this.model = await tf.loadLayersModel(modelUrl);
            console.log('Model loaded successfully');
            return;
          }
        } catch (error) {
          lastError = error instanceof Error ? error : new Error('Unknown error occurred');
          console.warn(`Failed to load model from ${modelUrl} (attempt ${attempt}):`, error);
          
          if (attempt < MAX_RETRIES) {
            console.log(`Retrying in ${RETRY_DELAY}ms...`);
            await this.delay(RETRY_DELAY);
          }
        }
      }
    }

    // If we get here, all attempts failed
    console.error('All attempts to load model failed');
    throw new Error('Unable to load the waste classification model. Please check your internet connection and try again later.');
  }

  private preprocessImage(imageElement: HTMLImageElement): tf.Tensor {
    return tf.tidy(() => {
      // Convert the image to a tensor
      const tensor = tf.browser.fromPixels(imageElement)
        // Resize to the model's expected size
        .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE])
        // Normalize pixel values
        .toFloat()
        .div(tf.scalar(255))
        // Add batch dimension
        .expandDims(0);
      
      return tensor;
    });
  }

  async classifyImage(imageFile: File): Promise<WasteItem> {
    try {
      if (!this.model) {
        await this.loadModel();
      }

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = async () => {
          try {
            // Preprocess the image
            const tensor = this.preprocessImage(img);
            
            // Run inference
            const predictions = await this.model!.predict(tensor) as tf.Tensor;
            const scores = await predictions.data();
            
            // Get the index of the highest score
            const maxScore = Math.max(...Array.from(scores));
            const predictedIndex = Array.from(scores).indexOf(maxScore);
            
            // Check confidence threshold
            if (maxScore < 0.5) {
              throw new Error('Unable to identify the waste item with sufficient confidence. Please try again with a clearer image.');
            }
            
            const predictedCategory = WASTE_CATEGORIES[predictedIndex].toLowerCase();
            
            // Clean up tensors
            tf.dispose([tensor, predictions]);
            
            // Import wasteItems dynamically to avoid circular dependency
            const { wasteItems } = await import('../data/wasteItems');
            
            // Find matching waste item
            const matchingItems = wasteItems.filter(item => item.category === predictedCategory);
            if (matchingItems.length === 0) {
              throw new Error('Could not identify waste item. Please try again with a different item.');
            }
            
            // Select the most appropriate item
            const predictedItem = matchingItems[0];
            resolve(predictedItem);
          } catch (error) {
            reject(error);
          } finally {
            // Clean up the object URL
            URL.revokeObjectURL(img.src);
          }
        };

        img.onerror = () => {
          URL.revokeObjectURL(img.src);
          reject(new Error('Failed to load image. Please try uploading a different image.'));
        };

        // Create object URL for the file
        img.src = URL.createObjectURL(imageFile);
      });
    } catch (error) {
      throw error instanceof Error ? error : new Error('An unexpected error occurred. Please try again.');
    }
  }
}

// Export singleton instance
export const wasteClassifier = new WasteClassifier();