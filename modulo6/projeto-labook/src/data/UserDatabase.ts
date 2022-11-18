import { user } from "../types/user";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async create (user:user) {
        await BaseDatabase.connection("labook_users").insert(
           user
        )
    }
}