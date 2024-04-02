const express = require("express");
const router = express.Router();
const users = require("../Model/user");

router.use(express.json());

// to add signup data
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let data = req.body;
    let newUser = await users(data).save();
    console.log(newUser);
    res.status(200).send({ message: "data added" });
  } catch (err) {
    console.log("err", err);
  }
});

// to find login data
router.post("/lo", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await users.findOne({ username: username });
  if (!user) {
    res.json({ message: "user not found" });
  }
  try {
    if (user.password == password) {
        res.json({message:"login successful",data:user})
        console.log(user)
    }
    else{
      res.json({message:"login failed"})

    }
  } catch (error) {
    console.log(err);
  }
});
module.exports = router;
