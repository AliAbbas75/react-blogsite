const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req,res)=>{
  try  {
        const response = await axios.get("https://6870982b7ca4d06b34b7461b.mockapi.io/article");
        res.json(response.data);

    }
    catch (err){
        res.send("Error")
        console.log("Error getting dat from API");
    }
});

app.get("/recent", async (req,res)=>{
    response = await axios.get("https://6870982b7ca4d06b34b7461b.mockapi.io/newarticle")
    res.json(response.data);
});

app.listen(port,()=>{
    console.log(`Server is Running at ${port}`)
});