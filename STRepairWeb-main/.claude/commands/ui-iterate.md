# UI Iterate Command

Iteratively refine a UI component until it matches a specification or reference design.

## Usage
```
/ui-iterate [component-path] [reference-description-or-image]
```

## Arguments
- `component-path`: Path to the component file to refine
- `reference-description-or-image`: Description of desired outcome or path to reference image

## Instructions

This command implements the **agentic iteration loop** for UI refinement:

### The Iteration Loop

```
┌─────────────────────────────────────────────────────┐
│  1. READ SPEC                                       │
│     - Understand the target design                  │
│     - Note specific requirements                    │
└───────────────────────┬─────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────┐
│  2. IMPLEMENT                                       │
│     - Make code changes                             │
│     - Follow style guide                            │
└───────────────────────┬─────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────┐
│  3. SCREENSHOT                                      │
│     - Use Playwright to capture current state       │
│     - Check desktop and mobile viewports            │
└───────────────────────┬─────────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────┐
│  4. COMPARE                                         │
│     - Compare screenshot to spec                    │
│     - Identify discrepancies                        │
└───────────────────────┬─────────────────────────────┘
                        ▼
         ┌──────────────┴──────────────┐
         │  Matches spec?              │
         └──────────────┬──────────────┘
                ▼               ▼
              NO               YES
                │               │
                ▼               ▼
         Return to         ┌─────────┐
         Step 2            │  DONE   │
                           └─────────┘
```

### Execution Steps

1. **Read the Specification**
   - Read the component file
   - Understand the reference (image or description)
   - Note specific elements: colors, spacing, typography, layout

2. **Check Style Guide**
   - Read `.claude/context/style-guide.md`
   - Ensure changes align with design system

3. **First Implementation Pass**
   - Make initial changes to match the spec
   - Save the file

4. **Screenshot & Compare**
   - Use Playwright to navigate to the page containing the component
   - Take screenshots at desktop (1440x900) and mobile (390x844)
   - Compare visually to the specification

5. **Iterate**
   If the design doesn't match:
   - Identify specific differences
   - Make targeted fixes
   - Screenshot again
   - Repeat until satisfied or max 5 iterations

6. **Final Report**
   Provide:
   - Summary of changes made
   - Final screenshot
   - Any remaining discrepancies
   - Suggestions if further refinement needed

### Iteration Limits
- Maximum 5 iterations to prevent infinite loops
- If still not matching after 5 iterations, report status and ask for guidance

### Success Criteria
- Visual match to specification (90%+ similarity)
- No console errors
- Responsive at both viewports
- Follows accessibility guidelines
