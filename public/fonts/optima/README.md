# Optima Nova LT Font Setup

## Manual Font Installation Required

To complete the Optima Nova LT font setup, you need to manually download and add the font files to this directory.

### Steps to Complete Setup:

1. **Download the Font:**
   - Visit: https://freefonts.co/fonts/optima-nova-lt-regular
   - Download the Optima Nova LT Regular font file
   - You may also want to download other weights (Bold, Light, Medium) from the same site

2. **Add Font Files:**
   Place the downloaded font files in this directory (`public/fonts/optima/`) with these exact names:
   - `OptimaNovaLT-Regular.otf` (or `.ttf`)
   - `OptimaNovaLT-Bold.otf` (or `.ttf`) - optional
   - `OptimaNovaLT-Light.otf` (or `.ttf`) - optional
   - `OptimaNovaLT-Medium.otf` (or `.ttf`) - optional

3. **Verify Setup:**
   - The CSS file `optima-nova-lt.css` is already configured
   - The layout.tsx already includes the font stylesheet
   - The VanceIntro component is already using the font classes

### Font Usage in Components:

```jsx
// Using the utility classes
<h1 className="font-optima">I AM VANCE</h1>
<p className="font-optima-light">Light text</p>
<p className="font-optima-regular">Regular text</p>
<p className="font-optima-medium">Medium text</p>
<p className="font-optima-bold">Bold text</p>

// Or using inline styles
<h1 style={{ fontFamily: 'Optima Nova LT, Optima, Avenir, sans-serif' }}>
  I AM VANCE
</h1>
```

### Fallback Fonts:
The font is configured with these fallbacks:
- Optima Nova LT (primary)
- Optima (system font)
- Avenir (system font)
- Helvetica Neue (system font)
- sans-serif (generic fallback)

### License Note:
Please ensure you have the proper license to use Optima Nova LT for your intended purpose. The font from freefonts.co is typically for personal use only.
