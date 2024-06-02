import { Box, Container, Grid, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ color: "white", lineHeight: 1.5 }}>
              Take advantage of our exclusive financing special 2.99% APR for 30
              years!
            </span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
