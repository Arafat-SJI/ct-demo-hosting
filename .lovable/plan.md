

# Replace NonProfitAI References with CollabAI Control Tower

## Overview
This plan replaces all remaining "NonProfitAI" references with "CollabAI" branding and updates the logo throughout the site with the new CollabAI logo you provided.

## Files to Modify

### 1. Logo Update
**Copy the new logo to the project:**
- Copy `user-uploads://download.jpg` to `src/assets/collabai-logo.png` (for React components)
- Copy `user-uploads://download.jpg` to `public/collabai-logo.png` (for favicon and meta tags)

### 2. index.html
- Update favicon from the old NonProfit URL to the new local logo: `/collabai-logo.png`

### 3. Header Component (`src/components/layout/Header.tsx`)
- Update logo import to use the new CollabAI logo
- Update alt text to "CollabAI Control Tower"

### 4. Footer Component (`src/components/layout/Footer.tsx`)
- Update logo import to use the new CollabAI logo
- Update alt text to "CollabAI Control Tower"

### 5. MobileNav Component (`src/components/layout/MobileNav.tsx`)
- Update logo import to use the new CollabAI logo
- Update alt text from "NonProfitAI" to "CollabAI Control Tower"
- Update demo link from `demo.nonprofitai.software` to `controltowerdemo.collabai.software`

### 6. About Page (`src/pages/About.tsx`)
- Update headline from "Making AI Accessible for Nonprofits" to "About CollabAI Control Tower"
- Update description to focus on professional services
- Replace "NonProfitAI was born from..." with CollabAI-focused content
- Update feature cards from nonprofit-focused to professional services-focused
- Update demo link from `demo.nonprofitai.software` to `controltowerdemo.collabai.software`

### 7. Features Page (`src/pages/Features.tsx`)
- Update headline from "21 Features Your Board Needs" to "Control Tower Features"
- Update description from nonprofit governance to professional services
- Update demo link from `demo.nonprofitai.software` to `controltowerdemo.collabai.software`
- Update feature descriptions to remove nonprofit-specific language

### 8. Privacy Page (`src/pages/Privacy.tsx`)
- Replace all "NonProfitAI" references with "CollabAI Control Tower"
- Update nonprofit-specific language to professional services context
- Update demo URL reference from `demo.nonprofitai.software` to `controltowerdemo.collabai.software`

### 9. Terms Page (`src/pages/Terms.tsx`)
- Replace all "NonProfitAI" references with "CollabAI Control Tower"
- Update service description from nonprofit board governance to professional services AI platform
- Keep the trademark reference to "CollabAI Software"

## Summary of Changes

| File | NonProfit References | Changes Needed |
|------|---------------------|----------------|
| `index.html` | 1 (favicon URL) | Update favicon |
| `MobileNav.tsx` | 2 (alt text, demo URL) | Fix both |
| `About.tsx` | 5+ | Rewrite content |
| `Features.tsx` | 3+ | Update content |
| `Privacy.tsx` | 5+ | Update references |
| `Terms.tsx` | 6+ | Update references |

## Technical Details

### Logo Import Change
```typescript
// Change from:
import logo from "@/assets/logo.png";

// Change to:
import logo from "@/assets/collabai-logo.png";
```

### URL Changes
- `demo.nonprofitai.software` becomes `controltowerdemo.collabai.software`
- Favicon URL becomes `/collabai-logo.png`

