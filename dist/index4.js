"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
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
const fs = __importStar(require("fs"));
const TOKEN_DIR = 'token';
const USERNAME = 'sateuro@ajirasoft.com';
const TOKEN_FILE_PATH = "token/sateuro@ajirasft.com.json";
const PASSWORD = 'C@sAr3t@!L';
function getAccessToken() {
  return __awaiter(this, void 0, void 0, function* () {
    const url = 'https://auth.casa.ajira.tech/auth/realms/casa/protocol/openid-connect/token';
    const body = {
      'username': USERNAME,
      'password': PASSWORD,
      'grant_type': 'password',
      'client_id': 'casa_dashboard'
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    try {
      const response = yield axios_1.default.post(url, body, {
        headers
      });
      console.log("Successfully fetched a new token from the API.");
      console.log("sp token:", response.data.access_token);
      const accessToken = response.data.access_token;
      return accessToken;
    } catch (error) {
      console.error("Error fetching access token:", error.message);
      return null;
    }
  });
}
function saveTokenToFile(token, filePath) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      fs.mkdirSync(TOKEN_DIR, {
        recursive: true
      });
      fs.writeFileSync(filePath, token);
      console.log("Token saved successfully to " + filePath);
    } catch (error) {
      console.error("Error saving token to file: ", error.message);
    }
  });
}
function getTokenFromFile(filePath) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log("Token loaded successfully from " + filePath);
      console.log("fileContent", fileContent);
      return fileContent;
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error("Error rtokeneading or parsing token from file: ", error.message);
      }
      return null;
    }
  });
}
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    const token = yield getAccessToken();
    if (token) {
      saveTokenToFile(token, TOKEN_FILE_PATH);
      getTokenFromFile(TOKEN_FILE_PATH);
    }
  });
}
main();