# Publishing Guide for World Logos

This guide will help you publish your World Logos package to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Make sure you have npm installed locally
3. **Git repository**: Push your code to GitHub first

## Steps to Publish

### 1. Login to npm
```bash
npm login
```
Enter your npm username, password, and email when prompted.

### 2. Verify Package Name
Check if the package name `@khanjal/world-logos` is available:
```bash
npm view @khanjal/world-logos
```
If it returns "npm ERR! 404", the name is available!

### 3. Build the Project
```bash
npm run build
```
This ensures your CSS files are up to date.

### 4. Test Locally (Optional)
Test your package locally before publishing:
```bash
npm pack
```
This creates a `.tgz` file you can install locally to test.

### 5. Publish to npm
```bash
npm publish --access public
```
Note: The `--access public` flag is required for scoped packages (@khanjal/world-logos).

### 6. Verify Publication
Check that your package is live:
```bash
npm view @khanjal/world-logos
```

## Version Management

### Updating Versions
When you make changes, update the version in `package.json`:

- **Patch** (bug fixes): `1.0.1`
- **Minor** (new features): `1.1.0`  
- **Major** (breaking changes): `2.0.0`

Or use npm commands:
```bash
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0
```

### Publishing Updates
```bash
npm run build
npm publish
```

## Package Structure for npm

Your package includes:
- `dist/world-logos.css` - Full CSS file
- `dist/world-logos.min.css` - Minified CSS file (main entry point)
- `src/` - Source SCSS files
- `README.md` - Documentation
- `LICENSE` - MIT license

## Usage After Publishing

Users can install your package with:
```bash
npm install @khanjal/world-logos
```

Then use it in their projects:
```html
<link rel="stylesheet" href="node_modules/@khanjal/world-logos/dist/world-logos.min.css">
```

Or with a bundler:
```javascript
import '@khanjal/world-logos/dist/world-logos.min.css';
```

## CDN Usage

After publishing, your package will be available via CDN:
```html
<link rel="stylesheet" href="https://unpkg.com/@khanjal/world-logos@latest/dist/world-logos.min.css">
```

## Best Practices

1. **Always build before publishing**: `npm run build`
2. **Test your package**: Create a test project to verify everything works
3. **Update documentation**: Keep README.md current with new features
4. **Follow semantic versioning**: Use proper version numbers
5. **Include changelog**: Document changes between versions

## Troubleshooting

### Common Issues

**"Package name already exists"**
- Choose a different name or add your username scope: `@yourusername/package-name`

**"You do not have permission to publish"**
- Make sure you're logged in: `npm whoami`
- Use `--access public` for scoped packages

**"Files not included"**
- Check the `files` array in `package.json`
- Make sure `dist/` folder exists and has content

### Getting Help

- [npm documentation](https://docs.npmjs.com/)
- [Semantic versioning guide](https://semver.org/)
- [npm publishing guide](https://docs.npmjs.com/getting-started/publishing-npm-packages)

Good luck with your package! 🚀
