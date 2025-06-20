# NPM Publishing Setup Guide

This repository is configured to automatically publish to NPM using GitHub Actions. Here's how to set it up:

## Prerequisites

1. **NPM Account**: Make sure you have an NPM account and are logged in
2. **NPM Token**: Generate an automation token from your NPM account

## Setup Steps

### 1. Generate NPM Token

1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click on your profile → "Access Tokens"
3. Click "Generate New Token" → "Automation"
4. Copy the generated token

### 2. Add NPM Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click "Add secret"

### 3. Publishing Process

The workflow supports two publishing methods:

#### Method 1: Automatic (Recommended)
1. Create a new release on GitHub:
   - Go to Releases → "Create a new release"
   - Tag version: `v1.0.0` (or your desired version)
   - Release title: `Release v1.0.0`
   - Click "Publish release"
2. The GitHub Action will automatically:
   - Build the package
   - Update package.json version
   - Publish to NPM

#### Method 2: Manual Dispatch
1. Go to Actions → "Publish to NPM"
2. Click "Run workflow"
3. Optionally specify a version number
4. Click "Run workflow"

## Workflow Files Created

- `.github/workflows/ci-cd.yml` - Main CI/CD pipeline with testing and publishing
- `.github/workflows/publish.yml` - Simple publish-only workflow
- `.npmignore` - Controls which files are included in the NPM package

## Package Configuration

- Added `prepublishOnly` script to ensure build runs before publishing
- Configured `files` field to include only necessary files
- Set up proper repository and homepage URLs

## Version Management

The workflow automatically syncs the package.json version with your GitHub release tag. When you create a release tagged `v1.2.3`, the package will be published as version `1.2.3` on NPM.

## Testing Before Publishing

The CI/CD workflow includes:
- Dependency installation
- Build verification
- File size reporting
- Artifact upload for review

## First Time Publishing

1. Make sure your package builds successfully: `npm run build`
2. Test locally: `npm pack` (creates a .tgz file you can inspect)
3. Create your first GitHub release with tag `v1.0.0`
4. The workflow will handle the rest!

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **NPM publish fails**: Verify your `NPM_TOKEN` secret is correct
- **Version conflicts**: Make sure your release tag matches semantic versioning format (`v1.2.3`)
