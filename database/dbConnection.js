import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Job_App"
    }).then(() => {
        console.log("connected to database")
    }).catch((err) => {
        console.log(`error connecting to database${err}`)
    })
}
export default dbConnection;