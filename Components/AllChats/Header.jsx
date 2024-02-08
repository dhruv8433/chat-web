import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Button, Tab, Tabs } from "@mui/material";
import "../../app/style.css";

export default function Header() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Card className="my-primary" sx={{ mb: 3 }}>
        <CardHeader
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">Inbox</Typography>
              <Button
                variant="contained"
                className="my-secondary"
                sx={{ marginLeft: "5%", color: "white" }}
              >
                3 New
              </Button>
            </div>
          }
          action={
            <IconButton
              aria-label="settings"
              className="my-secondary"
              sx={{ borderRadius: 2 }}
            >
              <WidgetsOutlinedIcon />
            </IconButton>
          }
        />
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          className="my-secondary"
        >
          <Tab label="Primary" sx={{ color: "white" }} />
          <Tab label="Groups" sx={{ color: "white" }} />
          <Tab label="Archive" sx={{ color: "white" }} />
        </Tabs>
      </Card>
    </>
  );
}
