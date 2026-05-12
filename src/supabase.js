// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://hngftplrbzfchkhycivq.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZ2Z0cGxyYnpmY2hraHljaXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MTgyOTgsImV4cCI6MjA5MzI5NDI5OH0.Zg8fIvPop2KKO7lt6QRxH44XqZsMNwTN7NtE2VQ59Xk";

// export const supabase = createClient(supabaseUrl, supabaseKey);



import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.REACT_APP_SUPABASE_URL,
  import.meta.env.REACT_APP_SUPABASE_ANON_KEY
);



const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);