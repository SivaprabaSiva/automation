"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('https://jsonplaceholder.typicode.com/users/1').then(user => {
  console.log(user);
  console.log(user.name);
}).catch(error => {
  console.log(error);
});