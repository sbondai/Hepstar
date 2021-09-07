import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    width: "55%",
    height: "2.5rem",
    margin: "1rem",

    color: "#fff",
    borderRadius: "5em",
    background: "#49a6dd",
    "&:hover": {
      background: "#49a6dd",
    },
  },
});

export default function Products({ product, handleBuy, activeStep, steps }) {
  const classes = useStyles();
  const infoProduct = product.PricedProduct.ProductInformation;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBuy(product);
  };

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          title={infoProduct.Name}
          subheader={product.PriceDetails.PriceDetail.Currency}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            dangerouslySetInnerHTML={{ __html: infoProduct.Details }}
          ></Typography>
        </CardContent>

        <Button
          className={classes.btn}
          variant="contained"
          onClick={handleSubmit}
        >
          {activeStep === steps.length ? "Finish" : "Buy now"}
        </Button>
      </Card>
    </div>
  );
}
