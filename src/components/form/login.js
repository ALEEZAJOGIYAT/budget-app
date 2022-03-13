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
  FormGroup,
} from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router";
import { Validation } from "./validation";

import { fontSize } from "@mui/system";

export const Login = () => {
  const image =
    "  https://www.altair.com/newsroom/wp-content/uploads/MainImage-2.jpg";

  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

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
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.PreventDefault();
    // if(email && phoneNo && name && address){}

    setErrors(Validation(errors));
  };

  return (
    <>
      <Container>
        <div>
          <Grid
          // sx={{
          //   backgroundImage:
          //     "url( https://www.altair.com/newsroom/wp-content/uploads/MainImage-2.jpg)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   opacity: 0.7,
          // }}
          >
            <Box
              sx={{
                my: 2,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                //   border: " 2px solid rgb(6, 6, 7)",
                width: 550,
                height: 800,
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
                  marginLeft: "-10px"
                }}
              >
                AretacSBD 8(a) Stars III Registration Form
                              </Typography>
              <Typography variant="p">
                Conatct Email: alizajogyat09@gmail.com
              </Typography>
              <Typography variant="p">Conatct Number:021-3661789</Typography>
              <div className="form_wrapper">
                <Typography variant="h6" sx={{ marginLeft: -5, marginTop: 5 }}>
                  Aretec approval of pricing,Staffing and participation
                </Typography>

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
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
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
                    {errors.name && (
                      <p style={{ color: "red" }}>{errors.name}</p>
                    )}
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
                    {errors.phoneNo && (
                      <p style={{ color: "red" }}>{errors.phoneNo}</p>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <InputLabel
                        variant="filled"
                        sx={{
                          // marginLeft: -21,
                          // marginTop: 5,
                          color: "black",
                          fontFamily:
                            "Georgia, 'Times New Roman', Times, serif",
                          fontSize: "20px",
                        }}
                      >
                        Date
                        <input
                          // className="email_style"
                          type="text"
                          placeholder="Enter address"
                          value={address}
                          onChange={handleAddress}
                        />
                        {errors.address && (
                          <p style={{ color: "red" }}>{errors.address}</p>
                        )}
                      </InputLabel>
                      <InputLabel
                        variant="filled"
                        sx={{
                          // marginLeft: -21,
                          // marginTop: 5,
                          color: "black",
                          fontFamily:
                            "Georgia, 'Times New Roman', Times, serif",
                          fontSize: "20px",
                        }}
                      >
                        Lead and Support
                      </InputLabel>
                      <input
                        // className="email_style"
                        type="text"
                        placeholder="Enter address"
                        // value={address}
                        // onChange={handleAddress}
                      />
                    </div>
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
                      Date
                    </InputLabel>
                    <input
                      className="email_style"
                      type="date"
                      placeholder="date"
                      value={date}
                      onChange={handleDate}
                    />
                    {/* {errors.address && (
                      <p style={{ color: "red" }}>{errors.address}</p>
                    )} */}
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
