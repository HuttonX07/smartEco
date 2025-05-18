import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Loader, Scan } from 'lucide-react';
import { recognizeWaste } from '../data/wasteItems';
import { useAppContext } from '../context/AppContext';

const ScanPage = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setCurrentItem } = useAppContext();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleScan = async () => {
    if (!selectedFile) return;
    setIsScanning(true);
    setError(null);

    try {
      const result = await recognizeWaste(selectedFile);
      setCurrentItem(result);
      navigate(`/info/${result.id}`);
    } catch (error) {
      console.error('Error recognizing waste:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-slate-800 text-center">
            Scan Your Waste
          </h1>
          <p className="text-slate-600 mb-10 text-center">
            Upload a photo to identify the waste item.
          </p>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Preview Area */}
            <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden relative">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center text-slate-400">
                  <Scan size={64} strokeWidth={1} />
                  <p className="mt-3 text-sm">No image selected</p>
                </div>
              )}
            </div>

            {/* Control Area */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <label className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                    disabled={isScanning}
                  />
                  <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                    <Upload size={20} />
                    Upload Photo
                  </div>
                </label>
              </div>

              <button
                onClick={handleScan}
                disabled={!selectedFile || isScanning}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Scan size={20} />
                    Identify Item
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;