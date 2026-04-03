# Jared Talbot Landing Page - PRD

## Original Problem Statement
Rebuild jaredtalbot.com as a polished React-based landing page, replacing the current simple static HTML structure with a professional app-style single-page website. The site acts as Jared Talbot's main digital hub / dashboard control centre.

## User Personas
- **Primary**: Visitors seeking tech support (Jared Fixes customers)
- **Secondary**: Bitcoin learners (GrowYourBTC audience)
- **Tertiary**: People interested in digital systems and projects

## Core Requirements (Static)
- Dark, premium, glassy, modern aesthetic
- Orange accent color direction preserved
- Control centre / route selector feel
- Privacy: No exposed email addresses
- Honeypot spam prevention on contact form
- Responsive design for all devices
- No social media icons

## What's Been Implemented (April 2026)

### Architecture
- React 19 with Create React App
- Tailwind CSS 3.4.1 for styling
- Framer Motion for animations
- Lucide React for icons

### Components Built
1. **Navigation** - Sticky header with glass effect, mobile hamburger menu
2. **Hero** - Bold headline, CTAs, trust pills, side panel with principles
3. **RouteCards** - Bento grid layout with primary/secondary/tertiary cards
4. **HowIWork** - Three principle cards (communication, solutions, thinking)
5. **ContactSection** - Protected form with honeypot, no exposed emails
6. **Footer** - Minimal with copyright and tagline

### Key Features
- Jared Fixes as PRIMARY route (https://jaredfixes.com)
- GrowYourBTC as SECONDARY route (https://growyourbtc.com)
- Simple Systems as tertiary "Coming Soon"
- Contact form ready for Netlify Forms integration
- Hidden honeypot field for bot prevention
- Full mobile responsiveness
- Smooth scroll navigation
- Hover animations and micro-interactions

### External Links
- Jared Fixes: https://jaredfixes.com
- GrowYourBTC: https://growyourbtc.com

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] Core page structure
- [x] Dark premium aesthetic
- [x] Route cards with hierarchy
- [x] Contact form without exposed email
- [x] Mobile responsiveness

### P1 (High Priority)
- [ ] Custom favicon matching brand
- [ ] Add OG image for social sharing
- [x] Enable Netlify Forms (completed April 2026)

### P2 (Medium Priority)
- [ ] Add page load animation
- [ ] Consider testimonials section
- [ ] Performance optimization (lazy loading)

### P3 (Low Priority)
- [ ] Add subtle particle/noise background texture
- [ ] Consider dark/light theme toggle
- [ ] Add analytics integration

## Next Tasks
1. Deploy to Netlify
2. Configure custom domain (jaredtalbot.com)
3. Enable Netlify Forms by adding form attributes
4. Create custom favicon
5. Add Open Graph image

## Tech Stack
- Frontend: React 19, Tailwind CSS 3.4.1, Framer Motion
- Build: Create React App
- Deployment: Netlify (configured)
- No backend required (static site)
