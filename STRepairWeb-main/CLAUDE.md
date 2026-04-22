# SnapTech Repair - Claude Code Configuration

## Project Overview
This is a Next.js 16 application for SnapTech Repair, a device repair service. Built with React 19, Tailwind CSS 4, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Animation**: Framer Motion
- **Language**: TypeScript

## Development Commands
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

---

# Visual Development Workflow

## Design Principles
Reference these documents for all UI work:
- `.claude/context/design-principles.md` - Core design principles and aesthetic guidelines
- `.claude/context/style-guide.md` - Colors, typography, spacing, and component patterns

## Playwright Visual Development

### Automatic Visual Verification
When making ANY frontend changes, you MUST:

1. **Navigate to affected pages** using Playwright MCP after changes are complete
2. **Take screenshots** at these viewport sizes:
   - Desktop: 1440x900
   - Tablet: 768x1024
   - Mobile: 390x844
3. **Compare against acceptance criteria** from the prompt (UI mockups, descriptions, or reference designs)
4. **Check browser console** for errors and warnings
5. **Iterate until the design matches** the specification

### Visual Verification Checklist
After every frontend change:
- [ ] Screenshot taken at desktop viewport
- [ ] Screenshot taken at mobile viewport
- [ ] No console errors present
- [ ] Design matches specification/mockup
- [ ] Responsive behavior verified
- [ ] Interactive states work correctly (hover, focus, active)

### Comprehensive Design Review
Trigger a full design review using `@agent design-reviewer` when:
- Creating a pull request with UI changes
- Completing significant UI/UX refactors
- Building new pages or major components
- Before shipping to production

### Console Error Handling
If console errors are detected:
1. Immediately investigate the error source
2. Fix the issue before continuing
3. Re-verify with a fresh screenshot

## Design Standards

### Visual Hierarchy
- Clear content hierarchy with proper heading levels
- Sufficient whitespace and breathing room
- Consistent spacing using Tailwind's spacing scale

### Accessibility
- All interactive elements must be keyboard accessible
- Proper focus indicators on all focusable elements
- Color contrast ratios meet WCAG AA standards (4.5:1 for text)
- Images have descriptive alt text
- Form inputs have associated labels

### Performance
- Optimize images (use next/image)
- Lazy load below-fold content
- Minimize layout shift (CLS)

### Mobile-First Approach
- Design for mobile first, then enhance for larger screens
- Touch targets minimum 44x44px
- No horizontal scrolling on mobile

## Forbidden Actions
- DO NOT introduce new UI frameworks or component libraries without explicit approval
- DO NOT change the established color palette without approval
- DO NOT remove accessibility features
- DO NOT add dependencies for things Tailwind CSS can handle natively

## Git Conventions
- Prefix frontend commits with `ui:` or `feat(ui):`
- Include viewport tested in commit messages for visual changes
- Reference design specs or mockups in PR descriptions

---

# Agent Orchestration

## Available Subagents
- `@agent design-reviewer` - Comprehensive design and accessibility review
- Use subagents to keep the main context clean and focused

## Iterative Development Loop
For best results, follow this agentic loop:
1. **Understand** - Read the spec/mockup/requirements
2. **Implement** - Write the code changes
3. **Verify** - Use Playwright to screenshot and inspect
4. **Compare** - Check output against spec
5. **Iterate** - Fix discrepancies and repeat steps 3-5
6. **Review** - Run design reviewer agent before finalizing

This loop allows autonomous iteration until the design matches the specification.
