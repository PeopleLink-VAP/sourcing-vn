### 2024-05-20
- Removed login button from header.
- Added subtle Admin login link to footer.
- Moved 'News' link to the end of the top navigation and styled it orange.
- Moved 'Admin' link before 'Logout' button in top navigation.
- Ensured mobile navigation reflects similar structure.
- **2024-05-20 10:30 AM**: Fixed parsing error in `SiteHeader.tsx` by restructuring conditional rendering of admin and logout buttons.
- **2024-05-20 11:00 AM**: Added modern single-line symbol icons to top-level menu items in `SiteHeader.tsx` and footer headers in `SiteFooter.tsx`.

### 2024-07-30
- **2024-07-30 10:00 AM**: Implemented multi-language support for the site footer, including dynamic content for copyright year. Added new translation keys for various footer elements in `src/contexts/LanguageContext.tsx` and updated `src/components/layout/SiteFooter.tsx` to use these keys, ensuring no hardcoded strings and proper link functionality.
- **2024-07-29**: Extended multi-language support to the site header.
  - Added new translation keys for navigation group titles ("Services", "Resources", "About"), news link, admin/logout buttons, and news categories in `src/contexts/LanguageContext.tsx`.
  - Updated `src/components/layout/SiteHeader.tsx` to use these new translation keys for rendering and resolved parsing errors related to JSX and duplicate imports.all menu items and links are properly translated.

### 08-Aug-2025
- Implemented Supabase Auth (email/password + Google OAuth UI), auth context, and protected routes.
- Added /auth page with login/signup, header login/logout, and admin guard for /admin.
- Admin Portal: membership tiers list and create newsletter campaign form.
- Note: To grant admin access, set your profile role to 'admin' in public.profiles.
- Fix: Wrap app with AuthProvider to resolve "useAuth must be used within AuthProvider" runtime error.

