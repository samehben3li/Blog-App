const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

dotenv.config()
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongoDB")
}).catch((err) => {
    console.log(err)
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been upload ...")
})
app.get("/test",(req,res)=>{
    res.json("test success")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen("8800", () => {
    console.log("backend server is running in  port 8800")
})