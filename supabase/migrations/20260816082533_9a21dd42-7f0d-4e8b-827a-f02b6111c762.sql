CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  destination TEXT,
  goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultation_requests TO anon, authenticated;
GRANT ALL ON public.consultation_requests TO service_role;

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consultation request"
ON public.consultation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);