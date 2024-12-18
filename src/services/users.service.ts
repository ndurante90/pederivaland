import {User} from "../model/user.ts";
import data from "../data/users.json";

export function getUsers(): User[] {
   const str = JSON.stringify(data);
   return JSON.parse(str);
}

export function getUserByUsername(username?: string, password?: string): User | undefined{
    const str = JSON.stringify(data);
    const users: User[] = JSON.parse(str);
    return users.find(user => (user.username === username && user.password === password));
}