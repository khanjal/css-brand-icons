#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'dist/css-brand-icons.css',
  'dist/css-brand-icons.min.css'
];

let exitCode = 0;

console.log('🔍 Verifying build output...\n');

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${file} (${sizeKB} KB)`);
  } else {
    console.log(`❌ ${file} - Missing!`);
    exitCode = 1;
  }
});

if (exitCode === 0) {
  console.log('\n🎉 All required files are present!');
} else {
  console.log('\n💥 Some required files are missing. Run: npm run build');
}

process.exit(exitCode);
