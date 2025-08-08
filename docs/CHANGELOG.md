### 08-Aug-2025
- Implemented Supabase Auth (email/password + Google OAuth UI), auth context, and protected routes.
- Added /auth page with login/signup, header login/logout, and admin guard for /admin.
- Admin Portal: membership tiers list and create newsletter campaign form.
- Note: To grant admin access, set your profile role to 'admin' in public.profiles.
- Fix: Wrap app with AuthProvider to resolve "useAuth must be used within AuthProvider" runtime error.

