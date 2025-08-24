import fs from 'fs';

const dir = 'my-notes';
const file = 'my-notes/message.txt';
const content = 'This is a basic test.';

// 1. Create directory
try {
  fs.mkdirSync(dir);
  console.log("Created directory.");
} catch (e) {
  console.log("Directory probably already exists.");
}

// 2. Write to file
try {
  fs.writeFileSync(file, content);
  console.log("Wrote to file.");
} catch (e) {
  console.log("Error writing to file.");
}

// 3. Read from file
try {
  const data = fs.readFileSync(file, 'utf-8');
  console.log("Read from file: " + data);
} catch (e) {
  console.log("Error reading from file.");
}