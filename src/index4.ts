import axios from "axios";
import { Token } from "./interfaces/token";
import * as fs from "fs" ;

const TOKEN_DIR = 'token';
const USERNAME = 'sateuro@ajirasoft.com'
const TOKEN_FILE_PATH = "token/sateuro@ajirasft.com.json"
const PASSWORD = 'C@sAr3t@!L'

async function getAccessToken() {
  const url = 'https://auth.casa.ajira.tech/auth/realms/casa/protocol/openid-connect/token';
  const body = {
        'username': USERNAME,
        'password': PASSWORD,
        'grant_type': 'password',
        'client_id': 'casa_dashboard'
  }
    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded'
  }
  try {
    const response = await axios.post<Token>(url, body, {headers});
    console.log("Successfully fetched a new token from the API.");
    console.log("sp token:", response.data.access_token)
    const accessToken = response.data.access_token
    return accessToken;
  } catch (error: any) {
    console.error("Error fetching access token:", error.message);
    return null;  
  }
}

async function saveTokenToFile(token: string, filePath: string) {
  try {
    fs.mkdirSync(TOKEN_DIR, { recursive: true });
    fs.writeFileSync(filePath, token)
    console.log("Token saved successfully to " + filePath);
  } catch (error: any) {
    console.error("Error saving token to file: ", error.message);
  }
}

async function getTokenFromFile(filePath: string) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log("Token loaded successfully from " + filePath);
    console.log("fileContent", fileContent)
    return fileContent;
  } catch (error: any) {
    if (error.code !== 'ENOENT') {
      console.error("Error rtokeneading or parsing token from file: ", error.message);
    }
    return null;
  }
} 

async function main() {
  const token = await getAccessToken();  
  if (token) {
    saveTokenToFile(token, TOKEN_FILE_PATH);
    getTokenFromFile(TOKEN_FILE_PATH)
  }
  
}

main();