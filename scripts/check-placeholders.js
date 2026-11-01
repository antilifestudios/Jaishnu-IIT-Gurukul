import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

if (!fs.existsSync(dataDir)) {
  console.log('No src/data directory found.');
  process.exit(0);
}

const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));
const placeholders = [];

for (const file of files) {
  try {
    const raw = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      data.forEach((entry, idx) => {
        const str = JSON.stringify(entry);
        if (entry.isPlaceholder || str.includes('PLACEHOLDER: replace me')) {
          placeholders.push({
            file: `src/data/${file}`,
            id: entry.id || `entry[${idx}]`,
          });
        }
      });
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
}

if (placeholders.length > 0) {
  console.log('\n======================================================');
  console.log('  WARNING: PLACEHOLDERS STILL PRESENT IN DATA FILES   ');
  console.log('======================================================');
  placeholders.forEach(({ file, id }) => {
    console.log(`  [TODO] File: ${file} | Entry ID: ${id}`);
  });
  console.log('------------------------------------------------------');
  console.log(`  Total placeholders pending replacement: ${placeholders.length}`);
  console.log('======================================================\n');
} else {
  console.log('\n[PASS] All data files verified: Zero placeholders found.\n');
}
