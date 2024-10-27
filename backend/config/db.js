import mongoose from "mongoose"

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://shahmeer2030:shahmeer2030@shahmeer.rbf43.mongodb.net/food-del').then(()=>console.log("DB connected")
    )
}