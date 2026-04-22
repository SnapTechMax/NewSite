# Design Principles for SnapTech Repair

## Core Design Philosophy

### 1. Professional Trust
As an IT services company, the design must convey **competence, reliability, and trustworthiness**. Every element should reinforce that SnapTech is a professional operation that businesses can depend on.

- Use clean, uncluttered layouts
- Favor substance over flashiness
- Ensure every interaction feels polished and intentional

### 2. Clarity Over Cleverness
Users visiting the site need help with tech problems. The design should make finding solutions **effortless**.

- Clear visual hierarchy guides the eye
- Actions are obvious and unambiguous
- Information is scannable and well-organized

### 3. Editorial Elegance
The design uses a sophisticated **editorial aesthetic** with serif headlines (Source Serif) paired with clean sans-serif body text (Inter). This creates a distinctive, premium feel that differentiates from generic tech sites.

- Serif headlines for warmth and authority
- Sans-serif body for readability
- Generous whitespace for breathing room
- Intentional typography scale

### 4. Purposeful Color
Color is used sparingly and meaningfully:

- **Blue (#0177e3)**: Trust, professionalism, technology
- **Orange (#e97232)**: Action, urgency, attention
- **Neutrals**: Foundation, hierarchy, readability

Never use color purely for decoration. Every color choice should serve a purpose.

### 5. Mobile-First Reality
Most visitors will arrive on mobile devices. Design for mobile first, then enhance for larger screens.

- Touch-friendly targets (44px minimum)
- Readable text without zooming
- Fast-loading, performance-conscious design
- No horizontal scrolling

---

## Visual Design Principles

### Hierarchy
- One primary action per viewport
- Size and weight create importance
- Color draws attention to key elements
- Whitespace separates conceptual groups

### Alignment
- Use an invisible grid
- Consistent margins and gutters
- Text aligns to a baseline rhythm
- Elements relate to each other spatially

### Contrast
- Text meets WCAG AA contrast ratios
- Interactive elements stand out from static content
- States (hover, active, disabled) are visually distinct
- Dark text on light backgrounds (except inverse sections)

### Repetition
- Consistent component patterns
- Predictable interactive behaviors
- Unified spacing system
- Cohesive color application

### Proximity
- Related items are grouped together
- Unrelated items have clear separation
- Section boundaries are obvious
- Content chunks are digestible

---

## Interaction Principles

### Feedback
Every user action should have an appropriate response:
- Button hover states
- Loading indicators for async operations
- Success/error states for forms
- Focus indicators for keyboard navigation

### Progressive Disclosure
Don't overwhelm users with information:
- Show essential information first
- Reveal details on demand
- Use accordions/tabs for secondary content
- Break complex tasks into steps

### Forgiveness
Design for human error:
- Confirmation for destructive actions
- Easy undo where possible
- Clear error messages with solutions
- Preserve user input when errors occur

### Speed
Perceived performance matters:
- Instant feedback for user actions
- Skeleton loaders during content fetch
- Optimize Largest Contentful Paint
- Minimize Cumulative Layout Shift

---

## Content Principles

### Voice
- Professional but approachable
- Confident but not arrogant
- Helpful and solution-focused
- Local and personal

### Scannability
- Front-load important information
- Use descriptive headings
- Keep paragraphs short
- Use lists for multiple items

### Action-Oriented
- Clear calls-to-action
- Benefit-focused button text
- Urgency where appropriate
- Easy next steps

---

## Anti-Patterns to Avoid

### Visual
- Generic stock photography with fake smiles
- Excessive drop shadows or gradients
- Icon overload without purpose
- Inconsistent border radii or spacing

### UX
- Hiding contact information
- Required fields without indicators
- Error messages without solutions
- Infinite scroll without progress indication

### Technical
- Layout shift from loading content
- Invisible focus states
- Non-responsive images
- Inaccessible color combinations

### Content
- Jargon-heavy technical language
- Vague value propositions
- Missing social proof
- Hidden pricing or process information
