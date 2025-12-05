-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  location TEXT NOT NULL,
  quantity TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submissions)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);