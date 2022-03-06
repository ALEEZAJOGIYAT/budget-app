import React, { useState } from "react";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import { CardActions, InputLabel, makeStyles } from "@mui/material";
import {
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


export const BudgetData=({budgetInfo,handleEdit,handleDelete})=>{
    return(
      <div>
          {budgetInfo.map((items, index) => {
            return (
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                }}
                key={items.id}
              >
                <Grid container spacing={2}>
                  <Card
                    sx={{
                      minWidth: 800,
                      marginLeft: -20,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        // minWidth: 800,
                        // marginLeft: -20,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{items.charge}</Typography>
                      <Typography
                        sx={{
                          marginLeft: 35,
                        }}
                      >
                        {items.amount}
                      </Typography>
                      <CardActions>
                        <Button
                          size="large"
                          sx={{
                            marginLeft: 25,
                          }}
                          onClick={ handleEdit}
                        >
                          <MdEdit></MdEdit>
                        </Button>
                        <Button size="large" onClick={ handleDelete}>
                          <MdDelete></MdDelete>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            );
          })}
      </div>
  
    )
}




<div>
<Pdf targetRef={ref} filename="code-example.pdf">
  {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
</Pdf>
<div ref={ref}>
  {budgetInfo?.map((items, index) => {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
        key={items.id}
      >
        <Grid container spacing={2}>
          <Card
            sx={{
              minWidth: 800,
              marginLeft: -20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                // minWidth: 800,
                // marginLeft: -20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography>{items.charge}</Typography>
              <Typography
                sx={{
                  marginLeft: 35,
                }}
              >
                {items.amount}
              </Typography>
              <CardActions>
                <Button
                  size="large"
                  sx={{
                    marginLeft: 25,
                  }}
                  onClick={() => handleEdit(index)}
                >
                  <MdEdit></MdEdit>
                </Button>
                <Button
                  size="large"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete></MdDelete>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    );
  })}
</div>
</div>
