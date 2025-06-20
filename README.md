# World Logos

[![npm](https://img.shields.io/npm/v/@khanj/world-logos)](https://www.npmjs.com/package/@khanj/world-logos)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A pure CSS library for displaying corporate, non-profit, and organizational logos in various scales and historical versions. Create beautiful, scalable logos using only CSS - no images required!

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
- **nike** - Nike swoosh
  - `vintage-1971` - Original 1971 design

### Technology
- **apple** - Apple logo
  - `vintage-1976` - Rainbow Apple logo
  - `silver` - Silver/white version
  - `black` - Black version

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

## 📄 Legal Notice

This library creates CSS representations of logos for educational and development purposes. All trademarks and logos belong to their respective owners. Please ensure you have proper licensing and permissions before using these logos in commercial projects.

## 📝 License

[MIT](LICENSE) © 2025 khanjal

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

## 🔗 Related Projects

- [Pride Flags CSS](https://github.com/risadams/pride-flags) - Pure CSS pride flags
- [Country Flags CSS](https://github.com/lipis/flag-icon-css) - Country flags in CSS

---

Made with ❤️ and pure CSS
