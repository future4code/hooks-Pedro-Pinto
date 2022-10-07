import BaseDatabase from "./BaseDatabase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
   public async getAllUsers(){
    const result = await this.connection(TABLE_USERS).select()
    return result
   }
    createUser(){}
    getUserById(){}
}