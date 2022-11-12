export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
    private id: string,
    private email: string,
    private password: string,
    private name: string,
  ) {
    this.id = id
  }
  getId():string{
    return this.id
  }

  getEmail():string{
    return this.email
  }

  getPassword():string{
    return this.password
  }

  getName():string{
    return this.name
  }
}

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserInsert extends UserInputDTO {
  id: string
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface EditUserInputDTO {
  name: string;
  nickname: string;
  id: string;
  token: string;
}

export interface EditUserInput {
  name: string;
  nickname: string;
  id: string;
}

export interface AuthenticationData {
  id: string;
}
