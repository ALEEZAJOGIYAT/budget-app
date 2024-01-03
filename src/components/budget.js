import React, { useState } from "react";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import {
  Alert,
  AlertTitle,
  ListItem,
  List,
  Container,
  Divider,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Modal } from "./modal/index";
import Lottie from "react-lottie";
import animationData from "../lotties/calculator.json";
import "./style.css";

export const BudgetCalculator = () => {
  const ref = React.createRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [amount, setAmount] = useState();
  const [charge, setCharge] = useState("");
  const [budgetInfo, setBudgetInfo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [total, setTotal] = useState();

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
            <Container key={items.id}>
              <List style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:'-100px'}}>
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

        <div style={{ marginTop: 10 }}>
          <div>
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Review Budget
            </button>
            <Modal item={budgetInfo}/>
          </div>
        </div>
        <br/>
        <br/>

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
      </Container>
    </>
  );
};
