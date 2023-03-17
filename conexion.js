import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


mongoose.connect(process.env.MONGODB_URI)
.then((data) => console.log("Conectado ao MondoDB Atlas"))
.catch((error) => console.log(error))

export default mongoose