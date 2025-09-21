# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BeroLab Shadcn is a reusable Shadcn theme for BeroLab components. The main purpose is to create a modular design system that removes unnecessary complexity from the current design system by documenting components and making them more reusable.

## Common Commands

- **Development**: `npm run dev` (uses Next.js with Turbopack)
- **Build**: `npm run build`
- **Production**: `npm run start`
- **Lint**: `npm run lint`

## Package Manager

This project uses **npm** (confirmed by presence of `package-lock.json` and npm scripts in package.json).

## Architecture

### Component Structure

Components follow a specific pattern as defined in the README:

```tsx
type ComponentProps = {
  // props do componente
}

export default function Component({ ...props }: ComponentProps) {
  return (
    <span>component</span>
  )
}
```

Key conventions:
- Use spread operator `...props` instead of individual prop destructuring to reduce DRY and file size
- Access props with `props.prop` syntax within components
- Export as default function

### Component Variants

Components with variants use `class-variance-authority` (CVA) library following Shadcn patterns:

- Define variants with `cva()` function
- Use `VariantProps` type for component props
- Support `asChild` prop with Radix Slot when applicable
- Use `cn()` utility for className merging

### Directory Structure

```
src/
├── app/                    # Next.js 15 app router
│   ├── layout.tsx         # Root layout with custom fonts
│   ├── page.tsx           # Homepage with component showcase
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components (Shadcn style)
│   │   └── button.tsx     # Button component with variants
│   └── component-showcase.tsx  # Component demo wrapper
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

### Technology Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Component Library**: Radix UI primitives
- **Variant Management**: class-variance-authority
- **Utils**: clsx + tailwind-merge (via `cn` helper)
- **Icons**: Lucide React
- **TypeScript**: v5 with strict typing

### Custom Fonts

The project uses DIN Round Pro font family located in `/public/assets/fonts/`:
- Regular, Light, Medium, Bold, and Black weights
- Font integration is incomplete in layout.tsx (needs implementation)

### Styling Approach

- Uses Tailwind CSS with custom design tokens
- Dark theme optimized (zinc color palette)
- Gradient backgrounds and backdrop blur effects
- Border styling with opacity variations
- Hover states and transitions throughout

### Component Documentation

The `ComponentShowcase` component is used to display and document UI components with:
- Component name and visual example
- List of available variants
- Styled container with glass morphism effects