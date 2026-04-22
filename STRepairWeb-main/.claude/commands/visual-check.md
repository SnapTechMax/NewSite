# Visual Check Command

Perform a quick visual verification of recent UI changes using Playwright.

## Usage
```
/visual-check
```

## Instructions

1. **Identify Changed Files**
   Run `git diff --name-only HEAD~1` to find recently modified files.
   Filter for frontend files (`.tsx`, `.css`, `.jsx`).

2. **Determine Affected Pages**
   Based on the changed files, identify which pages/routes are affected.
   Map component files to their page routes.

3. **Visual Verification**
   For each affected page, use Playwright MCP to:
   - Navigate to the page at `http://localhost:3000`
   - Take a desktop screenshot (1440x900)
   - Take a mobile screenshot (390x844)
   - Check for console errors

4. **Report Findings**
   Provide a summary:
   - Pages checked
   - Visual status (looks correct / has issues)
   - Any console errors found
   - Recommendations if issues detected

## Quick Check Criteria
- [ ] Layout renders without breaking
- [ ] Text is readable
- [ ] Buttons and links are visible
- [ ] No obvious spacing issues
- [ ] No console errors
