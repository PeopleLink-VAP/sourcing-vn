### 2024-08-08
- **Font System Update**: Replaced Sentic Medium with Roboto Medium for major text headings
  - Updated CSS font-face definition from 'Sentic Text Medium' to 'Roboto Medium'
  - Modified Tailwind config to use Roboto Medium font file instead of Sentic
  - Maintained Sentic Display font for h1-h6 headings to preserve brand typography
  - All navigation, buttons, and UI elements now use Roboto Medium for better readability
- **Major Translation Update**: Comprehensive Vietnamese translations added for all pages and components
  - Added 80+ new translation keys covering all major UI elements
  - Updated SiteHeader navigation to use translations for all menus and descriptions
  - Updated SiteFooter with proper translated footer links
  - Updated Auth page with full Vietnamese translation support
  - Updated Contact, NotFound, Blog, and News pages with translations
  - Updated Index page (homepage) to use translated content
  - Enhanced mobile navigation with translated headers
  - Added translations for news category bar and all navigation elements
  - Improved consistency between English and Vietnamese content
  - All pages and components are now fully EN/VI bilingual

### 2024-05-20
- Implemented automatic scrolling to the top of the page when navigating to a new route.
- Fixed import error for `ScrollToTop` component in `App.tsx`.

