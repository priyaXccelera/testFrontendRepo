# test-vue-shopfront — Routes & Navigation

## How to run

```
cd /workspace/frontend_runs/1123ef95-078f-48e5-a33e-7740e0117dfa/project
npm install --legacy-peer-deps && npm run dev -- --port 47301 --strictPort
```

Then open http://localhost:47301

## Routes

| Route | Component file | Description |
|-------|----------------|-------------|
| / | src/views/HomeView.vue | Single-page layout with all sections: hero, products grid, about, contact form |
| /:pathMatch(.*)\* | src/views/NotFoundView.vue | 404 page for unmatched routes |

## Navigation map

All navigation uses anchor links within the single HomeView page:

- **Navbar Logo** → Scrolls to top (#home)
- **Navbar "Home" link** → Scrolls to #home
- **Navbar "Products" link** → Scrolls to #products
- **Navbar "About" link** → Scrolls to #about
- **Navbar "Contact" link** → Scrolls to #contact
- **Hero "Shop Now" button** → Scrolls to #products
- **Product cards** → Non-functional (UI-only demo)
- **Contact form submit** → Shows success message (UI-only demo)
- **404 page "Go Home" button** → Routes to /

## Shared components

- **Navbar.vue** - Fixed navigation bar with logo, anchor links, and mobile hamburger menu
- **ProductCard.vue** - Reusable product card component displaying image, name, price, and Add to Cart button
- **Footer.vue** - Footer with copyright text and ShopFront branding

## Design tokens

Tailwind CSS custom colors defined in `tailwind.config.js`:

- `primary-brand: #1F2937` - Deep gray for logo, text, borders
- `primary-accent: #3B82F6` - Bright blue for buttons, links, CTA elements
- `secondary-accent: #10B981` - Green for success states
- `neutral-light: #F3F4F6` - Light gray for backgrounds
- `neutral-dark: #1F2937` - Dark gray for main text
- `neutral-text: #6B7280` - Medium gray for secondary text
- `border-color: #E5E7EB` - Subtle borders between elements

## Features

- **Single-page layout** with smooth scroll navigation
- **Responsive design** optimized for mobile, tablet, and desktop
- **Hero banner** with call-to-action ("Shop Now")
- **Product grid** displaying 6 sample products with images, names, prices, and Add to Cart buttons (non-functional)
- **About section** with store mission and description
- **Contact form** with name, email, and message fields (UI-only, no backend submission)
- **Fixed navigation bar** with logo and anchor links to all sections
- **Mobile-friendly hamburger menu** for small screens
- **Footer** with copyright information

## Notes

- All Add to Cart interactions are UI-only and do not persist or process data
- Contact form submission shows a success message but does not send data anywhere
- Product images use placeholder images from via.placeholder.com
- Navigation uses HTML anchor links (#home, #products, etc.) with smooth scroll behavior
- No authentication or backend integration required
