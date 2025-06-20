# Contributing to World Logos

Thank you for your interest in contributing to World Logos! This document outlines the process for contributing to this pure CSS logo library.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/new-logo`

## 📋 Guidelines

### Adding New Logos

When adding a new logo, please follow these guidelines:

#### 1. File Organization
```
src/
├── [category]/
│   └── _logo-name.scss
```

Categories:
- `corporate/` - Corporate and business logos
- `technology/` - Tech company logos
- `nonprofit/` - Non-profit organization logos
- `automotive/` - Car manufacturer logos
- `financial/` - Banks and financial institutions
- `retail/` - Retail and consumer brands
- `entertainment/` - Media and entertainment
- `airlines/` - Airlines and aviation
- `government/` - Government and public sector

#### 2. Naming Conventions
- File names: `_logo-name.scss` (lowercase, hyphenated)
- CSS classes: `.logo.logo-name`
- Historical versions: `.logo.logo-name.vintage-YYYY` or `.logo.logo-name.classic`

#### 3. Logo Implementation Standards

**Required Features:**
- Base logo implementation
- All size variants (icon, default, large, xl)
- Proper accessibility attributes
- Print styles support

**Recommended Features:**
- Historical versions when applicable
- Color variations
- High contrast mode support
- Responsive behavior

**Code Structure:**
```scss
// Logo Name Styles

.logo.logo-name {
  @include logo-base();
  // Base implementation
  
  // Historical versions
  &.vintage-YYYY {
    // Historical variation
  }
  
  // Color variations
  &.white {
    // White version for dark backgrounds
  }
  
  // Size adjustments
  &.icon {
    // Icon size adjustments if needed
  }
  
  &.large {
    // Large size adjustments if needed
  }
}
```

#### 4. Design Principles

- **Pure CSS Only**: No images, SVGs, or external resources
- **Scalable**: Must work at all defined sizes
- **Accessible**: Include proper ARIA labels and contrast support
- **Accurate**: Logos should be recognizable and reasonably accurate
- **Respectful**: Follow trademark guidelines and fair use

#### 5. Legal Considerations

- Only create logos for educational and development purposes
- Include proper attribution when required
- Respect trademark and copyright laws
- Add legal disclaimers when necessary

### Code Quality

#### SCSS Standards
- Use existing mixins when possible
- Follow the established variable naming convention
- Include comments for complex implementations
- Maintain consistent indentation (2 spaces)

#### CSS Output
- Ensure generated CSS is clean and efficient
- Test all size variants
- Verify accessibility features work

#### Browser Support
- Modern browsers (last 2 versions)
- Graceful degradation for older browsers
- Test responsive behavior

## 🧪 Testing

Before submitting a pull request:

1. **Build the project**: `npm run build`
2. **Test in browsers**: Open `examples/index.html` and verify your logo works
3. **Check all sizes**: Test icon, default, large, and xl sizes
4. **Verify accessibility**: Test with screen readers and high contrast mode
5. **Test responsiveness**: Check behavior on different screen sizes

## 📝 Documentation

When adding a new logo, update:

1. **README.md**: Add the logo to the appropriate category section
2. **examples/index.html**: Add a demo of your logo
3. **Main SCSS file**: Import your new logo file

### README Format
```markdown
### Category Name
- **logo-name** - Company/Organization Name
  - `vintage-YYYY` - Description of historical version
  - `color-variant` - Description of color variant
```

## 🎨 Design Guidelines

### Color Usage
- Use CSS custom properties for brand colors
- Define colors in `_variables.scss`
- Support dark/light theme variations when applicable

### Shapes and Techniques
- Use pseudo-elements (`::before`, `::after`) for complex shapes
- Leverage CSS `clip-path` for intricate designs
- Use CSS gradients for color transitions
- Apply `transform` for rotations and positioning

### Accessibility
- Always include `role="img"` and `aria-label`
- Support high contrast mode
- Provide alternative content for print
- Respect reduced motion preferences

## 📋 Pull Request Process

1. **Create descriptive commits**: Use clear, descriptive commit messages
2. **Update documentation**: Include README and example updates
3. **Test thoroughly**: Ensure everything works as expected
4. **Follow the template**: Use the pull request template
5. **Be responsive**: Address review feedback promptly

### Pull Request Template
```markdown
## Description
Brief description of the changes made.

## New Logos Added
- Logo Name (Category)
  - Historical versions: vintage-YYYY
  - Color variants: white, black, etc.

## Testing
- [ ] Builds successfully (`npm run build`)
- [ ] All sizes work correctly
- [ ] Accessibility features tested
- [ ] Responsive behavior verified
- [ ] Cross-browser compatibility

## Documentation
- [ ] README.md updated
- [ ] Example page updated
- [ ] Code comments added

## Legal
- [ ] Trademark usage is appropriate
- [ ] Educational/fair use compliant
```

## 🚫 What Not to Include

- Controversial or offensive logos
- Logos of organizations involved in illegal activities
- Poor quality or unrecognizable implementations
- Copyrighted material without proper consideration
- Images or external dependencies

## 🎯 Logo Priority

We prioritize logos that are:
1. **Widely recognized**: Well-known brands and organizations
2. **Historically significant**: Logos with interesting evolution
3. **Technically interesting**: Logos that showcase CSS capabilities
4. **Educational value**: Logos that help learn CSS techniques

## 💬 Getting Help

- **Questions**: Open an issue with the "question" label
- **Discussions**: Use GitHub Discussions for general topics
- **Problems**: Report bugs with detailed reproduction steps

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Individual logo attribution (when significant)
- Release notes for major contributions

Thank you for helping make World Logos better! 🌍
