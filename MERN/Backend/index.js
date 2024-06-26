let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser")
const employeeRoute = require("./routes/employee.routes")

mongoose
.connect("mongodb://localhost:27017/isocrates")
.then((x)=>{
    console.log(`Connection established"${x.connections[0].name}"`,);
})
.catch((err)=>{
    console.log(err);
    console.error("Error connecting to DB",err.reason);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}),
);

app.use(cors());
app.use("/employee", employeeRoute);
const port = 4000;
const server = app.listen(port,()=>{
    console.log("Connected to port "+port);
});