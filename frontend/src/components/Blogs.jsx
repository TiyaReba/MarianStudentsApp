import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import AddBlog from "./AddBlog";
const Blogs = () => {
  const [data, setdata] = useState([]);
  const [up, setUp] = useState(false);
  const [singleVal, setSingleVal] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3008/api/view")
      .then((res) => {
        console.log(res.data.data);
        setdata(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteValue = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3008/api/del/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateVal = (val) => {
    console.log(val);
    setUp(true);
    setSingleVal(val);
  };

  let FinalJSX = (
    <div style={{ margin: "7%" }}>
      <Grid container spacing={2}>
        {data.map((val, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <img
                    src={val.image}
                    className="img-fluid rounded-start"
                    height={"200px"}
                    alt="..."
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {val.post}
                  </Typography>

                  <Typography variant="body2">
                    Last updated:{val.createdAt}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                  
                    onClick={() => deleteValue(val._id)}
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => updateVal(val)}
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
  if(up) FinalJSX=<AddBlog method ="put" data ={singleVal}/>
  return (
    FinalJSX
  );
};

export default Blogs;
