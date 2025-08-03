"use strict";

// https://jsonplaceholder.typicode.com/users - If user exists, print their name, city, phone, email, company
// https://jsonplaceholder.typicode.com/posts?userId=1  - Then, print all post title for that user in capital letters.
// https://jsonplaceholder.typicode.com/comments?postId=1  - Then, pick the first post's id and print all the odd number comments for that first post id.
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
const lodash_1 = __importDefault(require("lodash"));
function getUser(userId) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const user = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userDetail = lodash_1.default.pick(user.data, ['name', 'address.city', 'phone', 'email', 'company.name']);
      return userDetail;
    } catch (error) {
      console.log('User not found');
      return null;
    }
  });
}
//Alternative way to write 
// async function getUser(userId: number){
//     return await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((user)=> {
//             return _.pick(user.data, ['name', 'address.city', 'phone', 'email', 'company.name'])
//         })
//         .catch((error)=>{
//             console.log('User not found') 
//             return null;
//         })
// }
function getUserPosts(userId) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const posts = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const userPostDetail = lodash_1.default.map(posts.data, post => {
        return lodash_1.default.pick(post, ['title', 'id']);
      });
      // console.log(userPostDetail) 
      return userPostDetail;
    } catch (error) {
      console.log('No post found');
      return null;
    }
  });
}
function main(userId) {
  return __awaiter(this, void 0, void 0, function* () {
    const user = yield getUser(userId);
    if (!user) {
      return;
    }
    const posts = yield getUserPosts(userId);
  });
}
main(1);