import "./globals.css";
import "./style/style.css";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import { Baloo_2 } from "next/font/google";

const font = Baloo_2({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} m-10`}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={10}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
