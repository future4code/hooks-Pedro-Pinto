import connection from "./connection";

const labecommerce_users = async () => {
    try {
        
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );
        `)

        console.log("Tabela usuários criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar de usuários.")
        console.log(error.sqlMessage)
    }
}



labecommerce_users()
.finally(() => process.exit())