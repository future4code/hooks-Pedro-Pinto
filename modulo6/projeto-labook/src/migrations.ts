import BaseDatabase from "./data/BaseDatabase"

export class Migrations extends BaseDatabase {
   createTable = async ( ) => { 
      await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255) NOT NULL,
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );
      `)
      .then(() => {
         console.log(`Tables created successfully`)
      })
      .catch((error:any)=>{
         this.printError(error)
      })     
   }
   printError = (error:any) => {
      console.log(error.sqlMessage || error.message)
   } 
}
const migrations = new Migrations()
migrations.createTable();