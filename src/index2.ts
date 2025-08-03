import axios from 'axios';
import { User } from './interfaces/user';

axios.get<any, User>('https://jsonplaceholder.typicode.com/users/1').then(
    (user: User) => {
        console.log(user)
        console.log(user.name)
    }
).catch(
    (error: any) => {
        console.log(error)
    }
)