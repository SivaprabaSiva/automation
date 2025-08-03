"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const axios_1 = __importDefault(require("axios"));
function main(userId) {
  return __awaiter(this, void 0, void 0, function* () {
    const user = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userEmailDetail = user.data.email;
    const userCityDetail = user.data.address.city;
    const userNameDetail = user.data.name;
    const userPhoneDetail = user.data.phone;
    console.log("Email:", userEmailDetail);
    console.log("City:", userCityDetail);
    console.log("Name:", userNameDetail);
    console.log("Phone:", userPhoneDetail);
    if (userId !== 0 && userId < 100) {
      const url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`;
      const response = yield axios_1.default.get(url);
      const posts = response.data;
      console.log('posts:', posts);
      const firstId = posts[0].id;
      console.log('firstId:', firstId);
      if (firstId !== 0 && firstId < 100) {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${firstId}`;
        console.log('url2:', url2);
        const comments = yield axios_1.default.get(url2);
        const allComments = comments.data;
        console.log('allComments:', allComments);
      } else {
        "[]";
      }
    } else {
      `User not found, Id value is ${userId}`;
    }
  });
}
main(1);