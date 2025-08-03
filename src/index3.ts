// https://jsonplaceholder.typicode.com/users - If user exists, print their name, city, phone, email, company
// https://jsonplaceholder.typicode.com/posts?userId=1  - Then, print all post title for that user in capital letters.
// https://jsonplaceholder.typicode.com/comments?postId=1  - Then, pick the first post's id and print all the odd number comments for that first post id.

import axios from "axios";
import { User } from "./interfaces/user";
import _ from "lodash";
import { Post } from "./interfaces/post";

async function getUser(userId: number){
    try {
        const user = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userDetail = _.pick(user.data, ['name', 'address.city', 'phone', 'email', 'company.name'])
        return userDetail
    } catch(error) {
        console.log('User not found') 
        return null;
    }
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

async function getUserPosts(userId: number){
    try {
        const posts = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const userPostDetail = _.map(posts.data, (post) => {
            return _.pick(post, ['title', 'id'])
        })
        // console.log(userPostDetail) 
        return userPostDetail
    } catch (error){
        console.log('No post found')
        return null
    }
}

async function main(userId: number){
    const user = await getUser(userId)
    if(!user) {
        return 
    }
    const posts = await getUserPosts(userId)
}
main(1)