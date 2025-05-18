/*
  # Fix RLS policies for profiles table

  1. Changes
    - Add INSERT policy for authenticated users
    - Update existing policies for better security

  2. Security
    - Enable RLS on profiles table
    - Add policy for authenticated users to:
      - Insert their own profile
      - Read their own profile
      - Update their own profile
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Recreate policies with proper security
CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);