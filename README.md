# World Logos

[![npm](https://img.shields.io/npm/v/@khanj/world-logos)](https://www.npmjs.com/package/@khanj/world-logos)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A pure CSS library featuring **off-brand, CSS-inspired interpretations** of well-known corporate, non-profit, and organizational logos. Create recognizable logo-style elements using only CSS - no images or trademarked assets required!

⚠️ **Important**: These are CSS interpretations and approximations, not exact replicas. Perfect for prototypes, demos, and educational projects where you need recognizable logo-inspired designs without using actual trademarked content.

## 🚀 Install

```bash
npm install @khanj/world-logos
```

## 📖 Usage

### Basic Usage

Include the CSS file in your HTML:

```html
<head>
  <link rel="stylesheet" href="dist/world-logos.min.css" />
</head>

<body>
  <!-- Standard logo -->
  <div class="logo mcdonalds" role="img" aria-label="McDonald's logo"></div>
  
  <!-- Small icon version -->
  <div class="logo icon mcdonalds"></div>
  
  <!-- Large version -->
  <div class="logo large mcdonalds"></div>
  
  <!-- Historical version -->
  <div class="logo mcdonalds vintage-1960"></div>
</body>
```

### Size Options

- **Default**: Standard size (64px × 64px)
- **`icon`**: Small icon size (32px × 32px)
- **`large`**: Large size (128px × 128px)
- **`xl`**: Extra large size (256px × 256px)

### Historical Versions

Many logos include historical variants:
- **`vintage-[year]`**: Historical versions from specific decades
- **`classic`**: Classic/retro versions
- **`original`**: Original company logos

## 🏢 Available Logos

### Corporate/Fast Food
- **mcdonalds** - McDonald's golden arches
  - `vintage-1960` - Original 1960s design
  - `vintage-1970` - 1970s variation
- **coca-cola** - Coca-Cola script logo
  - `vintage-1886` - Original 1886 design
  - `classic` - Classic ribbon design
- **pepsi** - Pepsi globe logo
  - `vintage-1940` - 1940s simple design
  - `vintage-1970` - 1970s geometric stripes
  - `modern` - Modern wave design
- **nike** - Nike swoosh
  - `vintage-1971` - Original 1971 design
- **starbucks** - Starbucks siren logo
  - `vintage-1971` - Original brown 1971 design
  - `white` - White version for dark backgrounds
  - `black` - Black version

### Technology
- **apple** - Apple logo
  - `vintage-1976` - Rainbow Apple logo
  - `silver` - Silver/white version
  - `black` - Black version
- **facebook** - Facebook logo
  - `vintage-2004` - Original "The Facebook" design
  - `circle` - Circular version
  - `white` - White version for dark backgrounds
- **meta** - Meta (Facebook rebrand) infinity logo
- **twitter** - Twitter bird logo
  - `vintage-2006` - Original 2006 design
  - `circle` - Circular version
  - `white` - White version for dark backgrounds
- **x-twitter** - X (new Twitter) logo
  - `geometric` - Geometric X design
  - `white` - White version for dark backgrounds

### Non-Profit Organizations
- **red-cross** - International Red Cross
  - `original` - Original Geneva Convention design
  - `circle` - Circular version
  - `rounded` - Rounded square version

### Automotive
- **bmw** - BMW roundel
  - `vintage-1917` - Original 1917 design
  - `monochrome` - Black and white version

> **Coming Soon**: More logos are being added regularly! Check back for updates or contribute new ones.

## 🎨 Customization

### Custom Colors

Override default colors using CSS custom properties:

```css
.logo.mcdonalds {
  --primary-color: #ff6b35;
  --secondary-color: #ffc72c;
}
```

### Custom Sizes

Create custom sizes:

```css
.logo.custom-size {
  width: 96px;
  height: 96px;
}
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/khanjal/world-logos.git
cd world-logos

# Install dependencies
npm install

# Build CSS
npm run build

# Watch for changes during development
npm run watch

# Run development server
npm run dev
```

### Project Structure

```
world-logos/
├── src/
│   ├── world-logos.scss          # Main SCSS file
│   ├── _variables.scss           # CSS variables and colors
│   ├── _mixins.scss             # Reusable mixins
│   ├── _base.scss               # Base logo styles
│   ├── corporate/
│   │   ├── _mcdonalds.scss      # McDonald's logo styles
│   │   ├── _coca-cola.scss      # Coca-Cola logo styles
│   │   └── _nike.scss           # Nike logo styles
│   ├── technology/
│   │   └── _apple.scss          # Apple logo styles
│   ├── nonprofit/
│   │   └── _red-cross.scss      # Red Cross logo styles
│   └── automotive/
│       └── _bmw.scss            # BMW logo styles
├── dist/
│   ├── world-logos.css          # Compiled CSS
│   └── world-logos.min.css      # Minified CSS
├── examples/
│   └── index.html               # Demo page
└── README.md
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Adding New Logos

1. Create a new SCSS file in the appropriate category folder
2. Follow the existing naming conventions
3. Include historical versions when possible
4. Add accessibility attributes
5. Update this README with the new logo

### Guidelines

- Use pure CSS only (no images)
- Ensure logos are scalable
- Include proper ARIA labels for accessibility
- Follow semantic versioning
- Respect trademark and copyright laws

## 📄 Legal Notice & Disclaimer

**IMPORTANT: Please read this section carefully before using this library.**

### Trademark Disclaimer
This library creates CSS representations of logos for **educational, development, and demonstration purposes only**. All trademarks, service marks, trade names, trade dress, product names, and logos appearing in this library are the property of their respective owners, including but not limited to:

- McDonald's® and the Golden Arches® are registered trademarks of McDonald's Corporation
- Coca-Cola® is a registered trademark of The Coca-Cola Company
- Nike® and the Swoosh design are registered trademarks of Nike, Inc.
- Apple® and the Apple logo are registered trademarks of Apple Inc.
- BMW® and the BMW roundel are registered trademarks of Bayerische Motoren Werke AG
- Red Cross® is a registered trademark of the International Committee of the Red Cross

### Fair Use and Educational Purpose
This project operates under the principles of fair use for:
- **Educational purposes**: Teaching CSS techniques and web development
- **Commentary and criticism**: Demonstrating logo design evolution
- **Transformative use**: Converting trademarked designs into educational CSS code
- **Non-commercial research**: Studying corporate visual identity

### Usage Restrictions
- ❌ **DO NOT** use these CSS logos in commercial products without proper licensing
- ❌ **DO NOT** claim ownership of the original trademark designs
- ❌ **DO NOT** use in ways that could cause consumer confusion
- ❌ **DO NOT** use to compete with or impersonate the trademark owners
- ✅ **DO** use for learning CSS and web development
- ✅ **DO** use in educational projects and tutorials
- ✅ **DO** use for personal development and practice

### Developer Responsibility
**YOU are responsible for:**
- Obtaining proper licensing for commercial use
- Ensuring compliance with trademark laws in your jurisdiction
- Adding appropriate disclaimers to your projects
- Respecting the intellectual property rights of trademark owners

### No Endorsement
This library is **NOT endorsed, sponsored, or affiliated** with any of the companies whose logos are represented. The inclusion of a logo does not imply any relationship with or endorsement by the trademark owner.

### Limitation of Liability
The maintainers of this project are not liable for any misuse of the provided CSS representations. Users assume all responsibility for their use of this library.

### DMCA and Takedown Policy
If you are a trademark owner and believe your rights are being infringed, please contact us at [your-email] with:
- Proof of trademark ownership
- Specific content you believe infringes your rights
- Your contact information

We will promptly review and address valid concerns.

## 📝 License

[MIT](LICENSE) © 2025 khanjal

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

Made with ❤️ and pure CSS
