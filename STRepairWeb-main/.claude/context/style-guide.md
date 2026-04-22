# SnapTech Repair Style Guide

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#0177e3` | Primary buttons, links, key UI elements |
| Primary Dark | `#0160b8` | Hover states, active states |
| Primary Light | `#3391e8` | Backgrounds, subtle accents |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Accent | `#e97232` | CTAs, highlights, urgency indicators |
| Accent Dark | `#d4652b` | Hover states for accent elements |
| Accent Light | `#ed8a54` | Backgrounds, secondary accents |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| White | `#ffffff` | Backgrounds, cards |
| Gray 50 | `#f9fafb` | Subtle backgrounds, alternating rows |
| Gray 100 | `#f3f4f6` | Section backgrounds, borders |
| Gray 200 | `#e5e7eb` | Dividers, subtle borders |
| Gray 300 | `#d1d5db` | Disabled borders, subtle UI |
| Gray 400 | `#9ca3af` | Placeholder text, disabled text |
| Gray 500 | `#6b7280` | Secondary text, captions |
| Gray 600 | `#4b5563` | Body text secondary |
| Gray 700 | `#374151` | Body text |
| Gray 800 | `#1f2937` | Headings, emphasis |
| Gray 900 | `#111827` | Maximum contrast text |

### Semantic Colors
Use these CSS variables in code:
```css
--color-primary: #0177e3;
--color-accent: #e97232;
--background: #ffffff;
--foreground: #111827;
```

---

## Typography

### Font Families
| Type | Family | Variable | Usage |
|------|--------|----------|-------|
| Serif | Source Serif 4 | `--font-serif` | Headlines, editorial content |
| Sans | Inter | `--font-sans` | Body text, UI elements |
| Mono | JetBrains Mono | `--font-mono` | Code, technical content |

### Type Scale (Tailwind Classes)
| Element | Class | Size | Weight |
|---------|-------|------|--------|
| Display | `text-5xl md:text-7xl` | 48px / 72px | 700 |
| H1 | `text-4xl md:text-5xl` | 36px / 48px | 700 |
| H2 | `text-3xl md:text-4xl` | 30px / 36px | 700 |
| H3 | `text-2xl md:text-3xl` | 24px / 30px | 600 |
| H4 | `text-xl md:text-2xl` | 20px / 24px | 600 |
| Body Large | `text-lg` | 18px | 400 |
| Body | `text-base` | 16px | 400 |
| Body Small | `text-sm` | 14px | 400 |
| Caption | `text-xs` | 12px | 400 |
| Eyebrow | `.eyebrow` | 12px | 600, uppercase |

### Typography Utility Classes
```css
/* Editorial headline - use for main page titles */
.editorial-headline {
  font-family: var(--font-serif);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Eyebrow - use for section labels */
.eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

---

## Spacing

Use Tailwind's spacing scale consistently:

| Scale | Value | Usage |
|-------|-------|-------|
| 1 | 4px | Tight spacing, icon padding |
| 2 | 8px | Related elements, button padding |
| 3 | 12px | Card padding (mobile) |
| 4 | 16px | Standard padding, gaps |
| 6 | 24px | Section padding (mobile) |
| 8 | 32px | Component spacing |
| 12 | 48px | Section padding (desktop) |
| 16 | 64px | Large section gaps |
| 20 | 80px | Page section spacing |
| 24 | 96px | Hero padding |

### Common Patterns
- Container max-width: `max-w-7xl` (1280px)
- Container padding: `px-4 sm:px-6 lg:px-8`
- Section vertical spacing: `py-16 md:py-24`
- Component gap: `gap-4 md:gap-8`

---

## Components

### Buttons

**Primary Button**
```jsx
<button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
  Call to Action
</button>
```

**Secondary Button**
```jsx
<button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
  Secondary Action
</button>
```

**Accent Button (High Priority CTA)**
```jsx
<button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
  Urgent Action
</button>
```

### Cards
```jsx
<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
  {/* Card content */}
</div>
```

### Form Inputs
```jsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
  placeholder="Enter text..."
/>
```

---

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| `rounded-md` | 6px | Small elements, tags |
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards, modals |
| `rounded-2xl` | 16px | Large cards, hero images |
| `rounded-full` | 9999px | Pills, avatars |

---

## Shadows

| Class | Usage |
|-------|-------|
| `shadow-sm` | Subtle elevation, cards |
| `shadow` | Default elevation |
| `shadow-md` | Prominent cards, dropdowns |
| `shadow-lg` | Modals, popovers |

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | 0-639px | Mobile |
| `sm` | 640px+ | Large phones |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |
| `2xl` | 1536px+ | Large screens |

---

## Animation

Use Framer Motion for animations. Keep animations subtle and purposeful:

```jsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

### Animation Principles
- Duration: 200-500ms for micro-interactions, 300-800ms for section animations
- Easing: Use ease-out for entrances, ease-in-out for state changes
- Stagger: 50-100ms between items in lists
- Keep animations subtle - they should enhance, not distract

---

## Accessibility Requirements

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text (18px+ or 14px bold): 3:1 minimum
- UI components: 3:1 minimum

### Focus States
All interactive elements must have visible focus:
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Touch Targets
Minimum size: 44x44px for all interactive elements on touch devices

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use landmarks (header, main, footer, nav)
- Use button for actions, links for navigation
- Use aria attributes where semantic HTML is insufficient
