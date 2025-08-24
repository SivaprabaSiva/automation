"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const fs_1 = __importDefault(require("fs"));
const dir = 'my-notes';
const file = 'my-notes/message.txt';
const content = 'This is a basic test.';
// 1. Create directory
try {
  fs_1.default.mkdirSync(dir);
  console.log("Created directory.");
} catch (e) {
  console.log("Directory probably already exists.");
}
// 2. Write to file
try {
  fs_1.default.writeFileSync(file, content);
  console.log("Wrote to file.");
} catch (e) {
  console.log("Error writing to file.");
}
// 3. Read from file
try {
  const data = fs_1.default.readFileSync(file, 'utf-8');
  console.log("Read from file: " + data);
} catch (e) {
  console.log("Error reading from file.");
}