import axios from 'axios';
import { User } from './interfaces/user';
import { Post } from './interfaces/post';
import { Comments } from './interfaces/comment';


async function main(userId: number) {
        const user = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userEmailDetail = user.data.email 
        const userCityDetail = user.data.address.city
        const userNameDetail = user.data.name
        const userPhoneDetail = user.data.phone
        console.log("Email:", userEmailDetail)
        console.log("City:", userCityDetail)
        console.log("Name:", userNameDetail)
        console.log("Phone:", userPhoneDetail)

    if (userId !== 0 && userId < 100) {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
        const response = await axios.get<Post[]>(url)
        const posts = response.data
        console.log('posts:', posts)
        const firstId : number = posts[0].id
        console.log('firstId:', firstId)

          if (firstId !==0 && firstId < 100){
           const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${firstId}`
           console.log('url2:', url2)
           const comments = await axios.get<Comments[]>(url2)
           const allComments = comments.data
           console.log('allComments:', allComments)
         }
         else {
           "[]"
         }
    }
    else {
        `User not found, Id value is ${userId}`
    }}

main(1)