require('dotenv').config()
const express = require("express")
require('./database/db')
const cors = require('cors');
const morgan = require("morgan")
const authRouter = require('./routes/authRoutes');
const taskRouter = require("./routes/taskRoutes");

const app = express();


const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json());
app.use(morgan("dev"))
app.use("/api/v1/auth", authRouter)
app.use('/api/v1/task', taskRouter)


app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})