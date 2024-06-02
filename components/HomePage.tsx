import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import React, { useState, useEffect } from "react";
import { convertPriceToUSD, getRandomNumber } from "../utils/utils";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";

const HomePage = () => {
  const [images, setImages] = useState<string[]>([]);

  function Hit({ hit }: any) {
    const priceInUSD = convertPriceToUSD(hit?.record?.price || 0);
    const defaultImageUrl =
      hit.record.image ||
      `https://picsum.photos/250/250?random=${getRandomNumber()}`;
    return (
      <Paper elevation={10}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#0061e0" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="share" sx={{ color: "#0061e0" }}>
                <InfoIcon />
              </IconButton>
            }
            title={hit?.record?.listing_name || "address not available"}
            subheader="City, State, Zip"
          />
          <CardMedia
            component="img"
            height="250"
            width="250"
            image={hit?.record?.image || defaultImageUrl}
            alt={hit?.record?.listing_name}
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: ".5rem 1rem",
              paddingBottom: ".5rem !important",
            }}
          >
            <span>{priceInUSD}</span>
            <CardActions sx={{ padding: 0 }}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Paper>
    );
  }
  return (
    <section>
      <Hits hitComponent={Hit} />
    </section>
  );
};

export default HomePage;
