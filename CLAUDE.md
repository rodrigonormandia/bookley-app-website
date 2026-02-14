# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bookley is a landing page for a SaaS platform targeting mental health professionals (psychologists, therapists) in Brazil. The site is in Brazilian Portuguese (pt-BR). It promotes a clinical practice management tool with patient management, scheduling, digital records, and automated notifications.

## Commands

- `npm run dev` - Start dev server (default port 3000, use `-p 3005` for port 3005)
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Tech Stack

- **Next.js 16** with App Router and Turbopack
- **React 19** with Server Components (layout is server, all components under `app/components/` are `"use client"`)
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (no `tailwind.config` file — uses CSS-based `@theme` configuration in `globals.css`)
- **Framer Motion** for scroll-triggered animations and transitions
- **Lucide React** for icons
- **TypeScript** with strict mode

## Architecture

Single-page landing with all sections composed in `app/page.tsx`:

`Navbar → HeroSection → FeaturesSection → HowItWorksSection → BenefitsSection → PricingSection → FAQSection → CTASection → Footer`

All section components live in `app/components/` as client components. There are no API routes, no data fetching, and no dynamic pages — this is a purely static marketing site.

## Design System

Custom design tokens are defined via Tailwind v4's `@theme inline` block in `app/globals.css` (not a JS config). Colors are referenced throughout as CSS variables:

- `--color-primary` / `--color-primary-dark` / `--color-primary-light` (blue palette)
- `--color-success`, `--color-warning`, `--color-danger`
- `--color-bg`, `--color-card`, `--color-border`
- `--color-text-primary`, `--color-text-secondary`

Components use these via `var(--color-*)` in Tailwind arbitrary values (e.g., `text-[var(--color-primary)]`). The font is Inter loaded via `next/font/google`.

## Conventions

- Path alias: `@/*` maps to project root
- All interactive components use `"use client"` directive
- Animation pattern: `whileInView` with `viewport={{ once: true }}` for scroll-triggered reveals
- Section IDs for anchor navigation: `#funcionalidades`, `#como-funciona`, `#precos`, `#faq`
- Layout uses `max-w-7xl mx-auto` container pattern consistently

## Deployment

GitHub repo is linked to Vercel — pushing to `main` triggers automatic deployment.
