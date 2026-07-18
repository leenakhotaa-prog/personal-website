/*
# Create contact_messages table

1. Purpose
   Stores messages submitted by visitors through the "Contact" form on
   Leena Khot's personal website. The site has no sign-in screen, so the
   frontend talks to Supabase with the anon key; visitors can submit a
   message without creating an account.

2. New Tables
   - `contact_messages`
     - `id`           (uuid, primary key, auto-generated)
     - `name`         (text, not null)         — visitor's name
     - `email`        (text, not null)         — visitor's email
     - `subject`      (text, not null)         — message subject
     - `message`      (text, not null)         — message body
     - `created_at`   (timestamptz, default now())
     - `is_read`      (boolean, default false) — mark as read by owner

3. Security
   - Enable Row Level Security on `contact_messages`.
   - The data is intentionally open to anonymous visitors so they can
     submit a contact form without signing in. The site has no login
     screen, so every policy lists `anon, authenticated`.
   - INSERT is open (anyone can send a message).
   - SELECT / UPDATE / DELETE are intentionally closed here. The owner
     (Leena) views/manages submissions via the Supabase dashboard with
     the service-role key, which bypasses RLS — so these policies are
     locked down to avoid leaking messages to the public anon client.

4. Important notes
   - No user_id / auth linkage: the site is single-tenant with no auth.
   - Re-running this migration is safe: uses IF NOT EXISTS and drops
     policies before recreating them.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Visitors can submit a contact message without signing in.
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public read/update/delete: owner manages messages in the
-- Supabase dashboard (service-role key bypasses RLS).
DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages"
ON contact_messages FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages"
ON contact_messages FOR UPDATE
TO anon, authenticated
USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages"
ON contact_messages FOR DELETE
TO anon, authenticated
USING (false);

-- Helpful index for chronological listing in the dashboard.
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
ON contact_messages (created_at DESC);