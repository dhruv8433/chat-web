import React from "react";
import MyBox from "@/app/common/MyBox";
import MyText from "@/app/common/MyText";
import Link from "next/link";
import { Grid } from "@mui/material";

const ExploreMain = () => {
  return (
    <MyBox isPrimary={true} className="mt-4 rounded-2xl p-4">
      {/* Arrange all categories in alphabetical order */}
      <Grid container>
        <Grid item xs={12} md={3}>
          {/* Tourism places */}
          <Link href={"/explore/articles"}>
            <div className="border rounded-2xl p-4 w-max">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsi9V4IAJOdHT8TwQlO1w6WiVQjt0vCqwTfstFDnQ3dNF-7aO-cJHCu6wpUnnyiYrpg"
                className="object-cover h-[200px] w-[300px] rounded-2xl"
                alt="bg"
              />
              <div className="mt-3">
                <hr />
                <MyText className={"text-xl font-bold"}>Articles</MyText>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Articles */}
          <Link href={"/explore/health-and-fitness"}>
            <div className="border rounded-2xl p-4 w-max">
              <img
                src="https://www.fitnall.com/wp-content/uploads/2023/10/HealthInsurance.png"
                className="object-cover h-[200px] w-[300px] rounded-2xl"
                alt="bg"
              />
              <div className="mt-3">
                <hr />
                <MyText className={"text-xl font-bold"}>Health & Fitness</MyText>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Health & Fitness */}
          <Link href={"/explore/tourism-place"}>
            <div className="border rounded-2xl p-4 w-max">
              <img
                src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/jwkvsCOubn.jpg"
                className="object-cover h-[200px] w-[300px] rounded-2xl"
                alt="bg"
              />
              <div className="mt-3">
                <hr />
                <MyText className={"text-xl font-bold"}>Tourism places</MyText>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </MyBox>
  );
};

export default ExploreMain;
