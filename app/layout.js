import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { Grid } from "@mui/material";
import "./style/style.css";
import Navbar from "./components/Navbar";

const font = Baloo_2({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} m-10`}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
          <Grid item xs={12} md={4} sm={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
