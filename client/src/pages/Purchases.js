import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserService from "../services/UserService";
import PurchaseCard from "../components/PurchaseCard";
import ProductCard from "../components/ProductCard"
import { Grid } from "@mui/material";

function Purchases(props) {
  const [state, setState] = useState();
  useEffect(() => {
    let user = localStorage.getItem("userId");
    UserService.getAllPurchases(user).then((res) => {
      setState(res.data.data.purchases);
      console.log(res.data.data.purchases);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Previous Purchases</h1>
      <Grid container spacing={3} style={{margin: "25px"}}>
        {state &&
          state.map((purchase) => (
            <>
              <Grid container md={11}>
                <PurchaseCard date={purchase.date} total={purchase.total} products={purchase.products}/>
                <br />
              </Grid>
            </>
          ))}
      </Grid>
    </div>
  );
}

export default Purchases;
