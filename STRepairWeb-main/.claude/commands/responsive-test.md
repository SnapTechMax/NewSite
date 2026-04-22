# Responsive Test Command

Comprehensive responsive design testing using Playwright MCP.

## Usage
```
/responsive-test [path]
```

## Arguments
- `path`: The page path to test (defaults to `/`)

## Instructions

Use Playwright MCP to perform a thorough responsive design audit:

### 1. Viewport Testing
Test at these breakpoints (matching Tailwind defaults):

| Breakpoint | Width | Height | Description |
|------------|-------|--------|-------------|
| Mobile S | 320 | 568 | Small phones |
| Mobile M | 375 | 667 | iPhone SE |
| Mobile L | 390 | 844 | iPhone 14 |
| Tablet | 768 | 1024 | iPad |
| Laptop | 1024 | 768 | Small laptop |
| Desktop | 1440 | 900 | Standard desktop |
| Wide | 1920 | 1080 | Full HD |

For each viewport:
1. Set the viewport size
2. Navigate to the page
3. Take a screenshot
4. Note any issues

### 2. Check for Common Issues
- Horizontal scrolling (should never happen)
- Text overflow or truncation
- Images breaking layout
- Touch targets too small (< 44px)
- Content cut off or hidden
- Navigation accessibility
- Footer positioning

### 3. Generate Report
Provide a detailed report:

```markdown
## Responsive Test Results: [path]

### Viewport Summary
| Viewport | Status | Issues |
|----------|--------|--------|
| Mobile S | ✅/⚠️/❌ | [issues] |
...

### Critical Issues
[List any layout-breaking problems]

### Recommendations
[Specific fixes needed]
```

### 4. Console Check
Also capture and report any console errors at each viewport size.
