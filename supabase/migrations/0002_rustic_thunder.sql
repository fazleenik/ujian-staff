/*
  # Rankings System Setup

  1. New Tables
    - `rankings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text) 
      - `score` (integer)
      - `percentage` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `rankings` table
    - Add policies for public read access
    - Add policies for public write access (since we don't have auth)
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

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON rankings
  FOR SELECT
  TO public
  USING (true);

-- Allow public insert access
CREATE POLICY "Allow public insert access"
  ON rankings
  FOR INSERT
  TO public
  WITH CHECK (true);