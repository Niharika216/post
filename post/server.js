let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  password: String,
  email: String,
  profilePic: String,
});

let User = new mongoose.model("user", userSchema);

app.post("/signUp", async (req, res) => {
  console.log(req.body);
  try{
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      password: req.body.password,
      email: req.body.email,
      profilePic: req.body.profilePic,
    };
    await User.insertMany([newUser]);
    res.json({status:"success",msg:"UserCreated successfully"});
  }catch(err){ 
    res.json({status:"failure",msg:"User not Created successfullt"});

  }
});

app.listen(1919, () => {
  console.log("Listening to port 1919");
});

let connectToDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://malluniharika943:niha1919@post.goew9.mongodb.net/?retryWrites=true&w=majority&appName=post"
    );
    console.log("connected to DB");
  } catch {
    console.log("cannot connect to DB");
  }
};
