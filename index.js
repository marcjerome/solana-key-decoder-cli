#!/usr/bin/env node

const bs58 = require('bs58');
const fs = require('fs');
const path = require('path');
const argv = process.argv.slice(2);

if (argv.length !== 1) {
  console.error('Usage: solana-key-decoder-cli <private-key>');
  process.exit(1);
}

const inputKey = argv[0];
const decodedKey = bs58.decode(inputKey);
const jsonKey = JSON.stringify(Array.from(decodedKey));

const outputPath = path.join(process.cwd(), 'key.json');
fs.writeFileSync(outputPath, jsonKey);

console.log(`Key successfully decoded and saved to ${outputPath}`);
