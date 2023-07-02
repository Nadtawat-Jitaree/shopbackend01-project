// ใช้งาน mongoose
const mongoose = require('mongoose')
require('dotenv').config()

// เชื่อมไปยัง MongoDB

const dbUrl = process.env.MONGO_URI
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}).catch(err=>console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description1:String,
    description2:String,
    description3:String,
    namegame:String,
    state:String
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)


// ส่งออกโมเดล
module.exports = Product

// ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}