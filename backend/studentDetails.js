const mongoose=require("mongoose");

const StudentDetailsSchema= new mongoose.Schema({
    fname: String,
    lname: String,
    email: {type: String, unique: true},
    password: String,
},
{
    collection: "StudentInfo",
}
);
mongoose.model("StudentInfo", StudentDetailsSchema);