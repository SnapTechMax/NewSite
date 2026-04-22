# Screenshot Command

Take screenshots of a page at multiple viewport sizes using Playwright MCP.

## Usage
```
/screenshot [path]
```

## Arguments
- `path`: The page path to screenshot (e.g., `/`, `/about`, `/services`)

## Instructions

Use Playwright MCP to capture screenshots of the specified page at three viewport sizes:

1. **Desktop (1440x900)**
   - Navigate to `http://localhost:3000{path}`
   - Set viewport to 1440x900
   - Take screenshot

2. **Tablet (768x1024)**
   - Set viewport to 768x1024
   - Take screenshot

3. **Mobile (390x844)**
   - Set viewport to 390x844
   - Take screenshot

After capturing all screenshots, provide a brief visual assessment:
- Does the layout adapt properly between breakpoints?
- Are there any obvious visual issues?
- Is the content readable and accessible?
- Are touch targets appropriately sized on mobile?

Also check the browser console for any errors or warnings and report them.
