import { UserDatabase } from "../data/UserDatabase";
import { generateId } from "../services/generateId";
import { user } from "../types/user";

export class UserBusiness {
  async create(name: string, email: string, password: string) {
    if (!name || !email || !password){
        throw new Error("Need name, email and password");
    }

    const user: user = {
      id: generateId(),
      name,
      email,
      password,
    };

    const userDatabase = new UserDatabase()
    await userDatabase.create(user);
  }
}
// BIBLIOTECA MOMENT