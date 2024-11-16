import mongoose from "mongoose"

export const connectDB =async ()=>{
    await mongoose.connect("mongodb+srv://Tomato:v0btTNzfsNtHMYID@cluster0.pl5ir.mongodb.net/testing-code").then(()=>{
        console.log("DB connected")
    })
}