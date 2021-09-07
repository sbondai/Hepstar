import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Products from "./Products";

export default function StepTwo({ activeStep, steps, handleBuy, someObj }) {
  const product1 = someObj.ResponseParameters.Packages.Package;

  return (
    <Container>
      <Grid container spacing={3}>
        {product1.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.ID}>
            <Products
              product={product}
              handleBuy={handleBuy}
              activeStep={activeStep}
              steps={steps}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
