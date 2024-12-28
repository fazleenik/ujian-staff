/*
  # Create rankings table

  1. New Tables
    - `rankings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `score` (integer)
      - `percentage` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `rankings` table
    - Add policy for authenticated users to read all rankings
    - Add policy for authenticated users to insert their own rankings
*/

CREATE TABLE IF NOT EXISTS rankings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  score integer NOT NULL,
  percentage numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rankings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read rankings"
  ON rankings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert rankings"
  ON rankings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);