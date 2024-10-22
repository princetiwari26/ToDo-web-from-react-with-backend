const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const DatabaseConnection = require("./config/databaseConnection");
const router = require("./routes/Todo.route");

dotenv.config();
DatabaseConnection();
const PORT = process.env.PORT

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/api/todos', router)

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})