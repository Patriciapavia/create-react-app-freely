import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
import { Grid, Paper, Card, CardContent, Chip } from "@material-ui/core";
import DialogComponent from "../components/Dialog";
import { RootState } from "../store";

function Trips() {
  const tripList = useSelector((state: RootState) => state.trips.value);

  console.log(tripList);

  return (
    <div style={{ width: "80vw" }}>
      <Grid container spacing={2}>
        {tripList.map((trip) => (
          <Grid
            item
            xs={6}
            key={trip.id}
            style={{ backgroundColor: "#FFFFFF", marginBottom: "4px" }}
          >
            <Card
              style={{
                backgroundColor: "#C6FBF8",
                width: "35vw",
                height: "80px",
                marginLeft: "40px",
                fontSize: "14px",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    Title: {trip.name}
                  </Grid>
                  <Grid item xs={3}>
                    Start Date:{trip.startDate}
                  </Grid>
                  <Grid item xs={3}>
                    End date
                    {trip.endDate}
                  </Grid>
                  <Grid item xs={3} style={{ marginTop: "-8px" }}>
                    <Chip label={trip.status} />
                  </Grid>
                </Grid>
              </CardContent>
              <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={3}>
                  <DialogComponent trip={trip} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Trips;
