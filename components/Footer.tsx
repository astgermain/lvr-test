import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "#1976d2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        bottom: "0",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              Made with Next.js, Supabase, Algolia, and Vercel
            </span>
          </Grid>
          <Grid item xs={12}>
            <span style={{ color: "white", textDecoration: "underline" }}>
              {`It is currently ${new Date(new Date().getTime()).toString()}`}
            </span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
