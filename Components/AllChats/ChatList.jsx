import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import "../../app/style.css";
import { Avatar, Divider, Typography } from "@mui/material";

export default function ChatList() {
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Card
      sx={{ maxWidth: 345 ,cursor:'pointer'}}
      className={`my-primary ${hovered ? "my-secondary" : ""} ${
        clicked ? "my-primary" : "my-secondary"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<Typography>14:22</Typography>}
        title="#Partner"
        subheader="September 14, 2016"
      />
      <Divider />
    </Card>
  );
}
