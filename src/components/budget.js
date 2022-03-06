import React, { useState, useRef } from "react";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import {
  Alert,
  Modal,
  AlertTitle,
  CardActions,
  InputLabel,
  ListItem,
  List,
  ListItemText,
  makeStyles,
  ListItemButton,
  Container,
  Toolbar,
  Divider,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Input,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../lotties/calculator.json";
import Pdf from "react-to-pdf";
import "./style.scss";

// const useStyles = makeStyles((createTheme) => ({}));

export const BudgetCalculator = () => {
  const ref = React.createRef();

  let mapfunction = [{ a: "helo1" }, { a: "helo2" }, { a: "helo3" }];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const color = indigo[900];
  // const classes = useStyles();
  const [amount, setAmount] = useState();
  const [charge, setCharge] = useState("");
  const [budgetInfo, setBudgetInfo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [calAmount, setCalAmount] = useState(0);
  const [showClear, setShowClear] = useState(false);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0 && charge) {
      const store = {
        id: new Date().getTime().toString(),
        amount,
        charge,
        disabled: true,
      };

      setBudgetInfo((budgetInfo) => {
        return [...budgetInfo, store];
      });
      setAmount();
      setCharge("");
      setShowClear(!showClear);

      // setSubmit(true);
    } else {
      <Alert>
        <AlertTitle>Enter only positive or float value</AlertTitle>
      </Alert>;
    }
  };

  const handleEdit = (index) => {
    setEdit(true);
    const items = [...budgetInfo];
    items[index].disabled = false;
    setBudgetInfo(items);
  };

  const handleChangeCharge = (e, index) => {
    const items = [...budgetInfo];
    items[index] = {
      ...items[index],
      charge: e.target.value,
    };
    setBudgetInfo(items);
  };

  const handleChangeAmount = (e, index) => {
    const items = [...budgetInfo];
    items[index] = {
      ...items[index],
      amount: e.target.value,
    };
    setBudgetInfo(items);
  };

  const handleDelete = (index) => {
    const delete_item = [...budgetInfo];
    delete_item.splice(index, 1);
    setBudgetInfo(delete_item);
  };

  const handleUpdate = (index) => {
    const items = [...budgetInfo];
    items[index].disabled = true;
    setBudgetInfo(items);
  };

  const handleClear = () => {
    // setShowClear(true);
    setBudgetInfo([]);
  };

  return (
    <>
      <Container maxWidth={"xs"}>
        <div
          style={{
            display: "flex",
            flexDirection: "initial",
          }}
        >
          <Lottie
            style={{ marginTop: 38 }}
            options={defaultOptions}
            height={100}
            width={100}
          />
          <Typography sx={{ marginTop: 10, fontSize: 25 }} variant={"h4"}>
            BUDGET CALCULATOR
          </Typography>
          <Divider />
        </div>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="charge"
                required
                fullWidth
                id="charge"
                label="Charge"
                autoFocus
                value={charge}
                onChange={handleCharge}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="end"></InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="amount"
                label="Amount"
                name="amount"
                autoComplete="family-name"
                value={amount}
                type="number"
                onChange={handleAmount}
              />
            </Grid>
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, marginLeft: 20, marginTop: 8 }}
              endIcon={<MdSend />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Box>

        {budgetInfo?.map((items, index) => {
          return (
            <Container>
              <List>
                <ListItem>
                  <input
                    className="edit_charge"
                    type="text"
                    onChange={(e) => handleChangeCharge(e, index)}
                    disabled={items.disabled}
                    value={items.charge}
                  ></input>
                  <input
                    className="edit_amount"
                    type="number"
                    onChange={(e) => handleChangeAmount(e, index)}
                    disabled={items.disabled}
                    value={items.amount}
                  ></input>
                  <Button size="large" onClick={() => handleEdit(index)}>
                    <MdEdit />
                  </Button>
                  <Button onClick={() => handleDelete(index)}>
                    <MdDelete />
                  </Button>
                  <Button onClick={() => handleUpdate(index)}>Update</Button>
                </ListItem>
              </List>
            </Container>
          );
        })}
        {showClear ? (
          <div>
            <Button
              variant="contained"
              endIcon={<MdDelete />}
              onClick={handleClear}
            >
              Clear Budget
            </Button>
          </div>
        ) : (
          ""
        )}
        {/* <Typography variant={"h4"}>You spend {calAmount}</Typography> */}
      </Container>
    </>
  );
};
