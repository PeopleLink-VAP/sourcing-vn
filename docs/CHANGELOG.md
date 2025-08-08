### 2024-05-20
- Removed login button from header.
- Added subtle Admin login link to footer.
- Moved 'News' link to the end of the top navigation and styled it orange.
- Moved 'Admin' link before 'Logout' button in top navigation.
- Ensured mobile navigation reflects similar structure.
- **2024-05-20 10:30 AM**: Fixed parsing error in `SiteHeader.tsx` by restructuring conditional rendering of admin and logout buttons.
- **2024-05-20 11:00 AM**: Added modern single-line symbol icons to top-level menu items in `SiteHeader.tsx` and footer headers in `SiteFooter.tsx`.

### 08-Aug-2025
- Implemented Supabase Auth (email/password + Google OAuth UI), auth context, and protected routes.
- Added /auth page with login/signup, header login/logout, and admin guard for /admin.
- Admin Portal: membership tiers list and create newsletter campaign form.
- Note: To grant admin access, set your profile role to 'admin' in public.profiles.
- Fix: Wrap app with AuthProvider to resolve "useAuth must be used within AuthProvider" runtime error.

