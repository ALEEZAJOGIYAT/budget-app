import React, { useState } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Box,
  Typography,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router";

import { fontSize } from "@mui/system";

export const Login = () => {
  const history = useNavigate();
  const image =
    "  https://www.altair.com/newsroom/wp-content/uploads/MainImage-2.jpg";

  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.PreventDefault();
    history.push("./budget");
  };

  return (
    <>
      <Container>
        <div>
          <Grid
            sx={{
              backgroundImage:
                "url( https://www.altair.com/newsroom/wp-content/uploads/MainImage-2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.7,
            }}
          >
            <Box
              sx={{
                my: 2,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                border: " 2px solid rgb(6, 6, 7)",
                width: 450,
                height: 650,
                marginLeft: "300px",
                marginTop: "10px",
                backgroundColor: "white",
                boxShadow: "0 0.2rem 3rem rgba(124, 100, 100, 0.2)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(2, 7, 19)",
                  marginTop: "10px",
                }}
              >
                Registration Form
              </Typography>
              <Typography variant="p">
                Conatct Email: alizajogyat09@gmail.com
              </Typography>
              <Typography variant="p">Conatct Number:021-3661789</Typography>
              <div className="form_wrapper">
                <form>
                  <div className="mb-3 ">
                    <InputLabel
                      variant="filled"
                      sx={{
                        marginLeft: -23,
                        marginTop: 5,
                        color: "black",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "20px",
                      }}
                    >
                      Email
                    </InputLabel>
                    <input
                      className="email_style"
                      type="email"
                      placeholder="Enter  email"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="mb-3 ">
                    <InputLabel
                      variant="filled"
                      sx={{
                        marginLeft: -23,
                        marginTop: 5,
                        color: "black",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "20px",
                      }}
                    >
                      Name
                    </InputLabel>
                    <input
                      className="email_style"
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                  <div className="mb-3 ">
                    <InputLabel
                      variant="filled"
                      sx={{
                        marginLeft: -20,
                        marginTop: 5,
                        color: "black",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "20px",
                      }}
                    >
                      Phone No
                    </InputLabel>
                    <input
                      className="email_style"
                      type="number"
                      placeholder="Enter number"
                      value={phoneNo}
                      onChange={handlePhoneNo}
                    />
                  </div>
                  <div className="mb-3 ">
                    <InputLabel
                      variant="filled"
                      sx={{
                        marginLeft: -21,
                        marginTop: 5,
                        color: "black",
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        fontSize: "20px",
                      }}
                    >
                      Address
                    </InputLabel>
                    <input
                      className="email_style"
                      type="text"
                      placeholder="Enter address"
                      value={address}
                      onChange={handleAddress}
                    />
                  </div>
                  <div className="mb-3 ">
                    <Button variant="contained" onClick={handleSubmit}>
                      {" "}
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </Box>
          </Grid>
        </div>

        {/* <div className='login-form'>


          </div> */}
      </Container>
    </>
  );
};
