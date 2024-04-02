import { Button, Grid, Item, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addHandler = () => {
    console.log(user);
    axios
      .post("http://localhost:3008/api",user)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <div style={{ margin: "10%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            fullWidth
            label="Address"
            multiline
            rows={4}
            name="address"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            label="Username"
            name="Username"
            onChange={inputHandler}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            onChange={inputHandler}
          />
        </Grid>

        <br />
        <br />
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={addHandler}>
            Signup
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Link to={"/"}>Back to Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
