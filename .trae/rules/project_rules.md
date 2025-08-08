# Product Features
- Project features are found in docs/OVERVIEW.md
- Features that has been planned will be kept in docs/TODO.md; make sure to update and checked the list whenever got the chance.
- Append appropriate journal entries to file docs/CHANGELOG.md to keep track of major and minor changes, including date and timestamp, use layman terms if possible, concise reporting.
- Pro-actively ask to commit changes with proper commit message after each tasks done.

# Software Development Rules
- Compare docs/CHANGELOG.md with docs/TODO.md to see where we dropped-off from last session.
- Use English Markdown for all documentation and source code, except for Vietnamese content.
- Test on Production supabase, do not try to test in local environment.

# Tech stack
- Built with Lovable.dev and Trae AI IDE.
- Ensure proper SEO for individual pages.
- Mobile-first responsive design. 
- Use Tailwind CSS with shadcn/ui for UI components.
- Integrate with Supabase as backend (SaaS, free tier).
- Authentication with email & Google Auth (configure on Supabase).
- Deploy to subdomain beta.sourcing.vn via Cloudflare & Netlify.

# Basic Deploy

Clone the repo and then:
```bash
npm install
npm run dev
```

# Brand Guideline
## Logo Design Explain
- Logos are in /public/logos folder
  + logo_main.png : Primary color logo.
  + logo_white_on_dark_bg.png : for dark themes for dark background.
  + logo_w_tagline.png : full color logo with tag line.
  + logo_bw.png : Black & White logo.
- Description: The logo for sourcing.vn is a full-color wordmark that features:
- - Typography: The main text "SOURCING" is in blue (#112255) typography.
- - Symbol: The letter "O" in "SOURCING" is replaced by a target symbol with a gray (#BBBBBB) fill.
- - Accent: A star, colored orange (#FFBB00), is positioned above the letter "I" in "SOURCING".
- - Domain Extension: The ".VN" part of the logo is also in orange (#FFBB00).

## Primary Colors:
- Blue (#112255) To be used for headlines, main text accents, backgrounds.
- Orange (#FFBB00) To be used for highlights, CTAs, icons, star, .VN.
- Gray (#BBBBBB) To be used for secondary UI elements, target symbol fill, dividers.