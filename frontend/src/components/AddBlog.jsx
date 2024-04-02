import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = (props) => {
  const navigate = useNavigate();
  const [post, setPost] = useState(props.data);

  console.log("props.data", props.data);
  console.log("props.method", props.method);

  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addData = () => {
    console.log("clicked", props.data);
    if (props.method === "post") {
      axios
        .post("http://localhost:3008/api/add", post)
        .then((res) => {
          alert(res.data.message);
          navigate("/blogs");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (props.method === "put") {
      axios
        .put("http://localhost:3008/api/up/" + post._id, post)
        .then((res) => {
          alert(res.data.message);
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div style={{ margin: "7% 20% 0 20%" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="post title"
        name="title"
        value={post.title}
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        multiline
        rows={10}
        fullWidth
        label="Type a post"
        name="post"
        value={post.post}
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        fullWidth
        variant="outlined"
        label="Image URL"
        name="image"
        value={post.image}
        onChange={inputHandler}
      />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={addData}>
        Submit
      </Button>
    </div>
  );
};

export default AddBlog;
