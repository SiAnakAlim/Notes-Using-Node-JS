import { Sequelize } from "sequelize";

const db = new Sequelize("notes-181", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false, 
});

export default db;
