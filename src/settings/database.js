import { config } from "./config.js";
import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        const db = await connect(config.mongo_uri, {
            dbName: "tasks",
        })
    console.log("Database is connected to:", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}