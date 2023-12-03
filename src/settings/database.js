import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        const db = await connect("mongodb://localhost:27017", {
            dbName: "Sandra",
        })
    console.log("Database is connected to:", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}