const mongoose=require("mongoose");

const HomeDetailsSchema= new mongoose.Schema({
    name: String,
    category: String,
    difficulty: String,
    
},
{
    collection: "HomeInfo",
}
);
mongoose.model("HomeInfo", HomeDetailsSchema);