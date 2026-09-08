// let os=require('os')
// console.log(os.arch())
// console.log(os.uptime()/3600)
// console.log(os.freemem()/1024/1024/1024)
// console.log(os.totalmem()/1024/1024/1024)
// let http=require('http')
// let server=http.createServer((req,res)=>{
//     // res.end("welcome to server...")
//     if(req.url=='/'){
//         res.end("Home page")
//     }else if(req.url=="/about"){
//         res.end("This is about page")
//     }else if(req.url=="/project"){
//         res.end("Projects")
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })
// let http=require('http')
// const express=require('express')
// let app=express()

// app.get('/',(req,res)=>{
//     res.send('hiiiiii')
// })
// app.use((req,res,next)=>{
//     console.log("Nahi jaane duga")
//     next()
// })
// app.post('/about',(req,res)=>{
//     res.end("About")
// })
// app.listen(3000,()=>{
//     console.log("server is running .........")
// })

//lec 2 start here 
// const express=require('express')
// let app=express()
// app.get('/new/:id',(req,res)=>{
//     let {id}=req.params
//     res.send(id)
// })
// app.get('/search',(req,res)=>{
//     console.log(req.query,'hihihi')
//     res.send('hihihi')
// })
// app.listen(3000,()=>{
//     console.log('server is running through the port 3000')
// })
// const express = require("express");
// const app = express();

// const products = [
//   { id: 1, name: "iPhone 15", category: "mobile", price: 69999, stock: 10 },
//   { id: 2, name: "Galaxy S24", category: "mobile", price: 64999, stock: 8 },
//   { id: 3, name: "MacBook Air", category: "laptop", price: 99999, stock: 5 },
//   { id: 4, name: "Dell XPS 14", category: "laptop", price: 89999, stock: 7 },
//   { id: 5, name: "AirPods Pro", category: "headphones", price: 24999, stock: 15 },
//   { id: 6, name: "Sony XM5", category: "headphones", price: 29999, stock: 12 }
// ];

// app.get("/products", (req, res) => {
//   const { category } = req.query;

//   if (category) {
//     const filtered = products.filter(
//       (item) => item.category.toLowerCase() === category.toLowerCase()
//     );

//     if (filtered.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: `No products found in category '${category}'`
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       count: filtered.length,
//       data: filtered
//     });
//   }

//   res.status(200).json({
//     success: true,
//     count: products.length,
//     data: products
//   });
// });


// app.get("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id, 10);
//   const product = products.find((item) => item.id === productId);

//   if (!product) {
//     return res.status(404).json({
//       success: false,
//       message: `Product with ID ${req.params.id} not found`
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: product
//   });
// });

// app.listen(4000, () => {
//   console.log("Server running on http://localhost:4000");
// });
// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const products = [
//   { id: 1, name: "iPhone 15", category: "mobile", price: 69999, stock: 10 },
//   { id: 2, name: "Galaxy S24", category: "mobile", price: 64999, stock: 8 },
//   { id: 3, name: "MacBook Air", category: "laptop", price: 99999, stock: 5 },
//   { id: 4, name: "Dell XPS 14", category: "laptop", price: 89999, stock: 7 },
//   { id: 5, name: "AirPods Pro", category: "headphones", price: 24999, stock: 15 },
//   { id: 6, name: "Sony XM5", category: "headphones", price: 29999, stock: 12 }
// ];

// app.get("/", (req, res) => {
//   res.json(products);
// });

// app.listen(4000, () => {
//   console.log("Server running on http://localhost:4000");
// });
// import express from "express";
// import mongoose from "mongoose";
// import bcryptjs from "bcryptjs";
// import User from "./db/db.js";


// app.use(express.json());

// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.9.2"
//   )
//   .then(() => {
//     console.log("db......");
//   });

// app.post("/signUp", async (req, res) => {
//   let { name, email, passWord } = req.body;
//   let findData = await User.findOne({ email });
//   console.log(findData, "hiii");

//   if (findData) {
//     return res.send("user jinda haii....");
//   } else {
//     let updateddP = await bcryptjs.hash(passWord, 10);
//     console.log(updateddP, "dekhoooooo");

//     let UserInfo = new User({
//       name,
//       email,
//       passWord: updateddP,
//     });
//     await UserInfo.save();
//     res.send("done.......");
//   }
// });

// app.post("/login", async (req, res) => {
//   let { email, passWord } = req.body;
//   let findData = await User.findOne({ email });
//   console.log(findData, "hhi");

//   if (!findData) {
//     return res.send("user not found");
//   }

//   let validP = await bcryptjs.compare(passWord, findData.passWord);
//   if (!validP) {
//     return res.send("password yad nahi hai kya ..?");
//   }
//   res.send("all done..");
// });

// app.listen(3000, () => {
//   console.log("server running...");
// });
// const mongoose = require("mongoose");
// const bcryptjs = require("bcryptjs");
// const User = require("./db/db.js");

// const app = express();


// app.use(express.json());


// mongoose
//   .connect("mongodb://127.0.0.1:27017/auth_db")
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Database connection failed:", err));
// app.post("/signUp", async (req, res) => {
//   try {
//     const { name, email, passWord } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("user already exist ")
//     }

//     const hashedPassword = await bcryptjs.hash(passWord, 10);

//     const newUser = new User({
//       name,
//       email,
//       passWord: hashedPassword,
//     });

//     await newUser.save();
//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     return res.status(500).json({ message: "Server error during sign up", error: err.message });
//   }
// });
// app.post("/login", async (req, res) => {
//   try {
//     const { email, passWord } = req.body;

//     if (!email || !passWord) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isPasswordValid = await bcryptjs.compare(passWord, existingUser.passWord);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     return res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     return res.status(500).json({ message: "Server error during login", error: err.message });
//   }
// });


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });
import express from "express";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./db/db.js";

let app = express();
app.use(express.json());

const JWT_SECRET = "hehehehhe";

mongoose.connect("mongodb://127.0.0.1:27017/db").then(() => {
  console.log("db....");
});

app.post("/signUp", async (req, res) => {
  let { name, email, password } = req.body;
  let findData = await User.findOne({ email });
  console.log(findData, "hjehehe");

  if (findData) {
    return res.send("user jinda haii....");
  } else {
    let updateddP = await bcryptjs.hash(password, 10);

    console.log("Email:", email);
    console.log("Encrypted Password:", updateddP);

    let UserInfo = new User({
      name,
      email,
      password: updateddP,
    });
    await UserInfo.save();
    res.send("done.....");
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let findData = await User.findOne({ email });

  if (!findData) {
    return res.send("apse na ho payega....");
  }
  console.log("Email:", findData.email);
  console.log("Password:", findData.password);

  let validP = await bcryptjs.compare(password, findData.password);
  if (!validP) {
    return res.send("apse na ho payega....");
  }

  let token = jwt.sign(
    { email: findData.email, role: findData.role },
    JWT_SECRET
  );
  console.log(token, "tokennnnnnnnnn");
  res.json({ msg: "done", token });
});

let auth = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token, "toeknn");

  if (!token) {
    return res.send("kaun hai app...");
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }

  try {
    let decode = jwt.verify(token, JWT_SECRET);
    console.log(decode, "isse");
    req.user = decode; 
    next();
  } catch (err) {
    return res.send("token galat hai ya expire ho gya...");
  }
};

app.get("/api", auth, (req, res) => {
  res.send("heheh");
});

app.listen(3000, () => {
  console.log("server....");
});