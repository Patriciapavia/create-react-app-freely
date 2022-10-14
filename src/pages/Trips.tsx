import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
import { Grid, Card, CardContent, Chip } from "@material-ui/core";
import DialogComponent from "../components/Dialog";
import { RootState } from "../store";

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "#FFFFFF",
    marginBottom: "4px",
  },
  cardHiglight: {
    backgroundColor: "red",
    width: "35vw",
    height: "80px",
    marginLeft: "40px",
    fontSize: "14px",
  },
  card: {
    backgroundColor: "#C6FBF8",
    width: "35vw",
    height: "80px",
    marginLeft: "40px",
    fontSize: "14px",
  },
}));

function Trips() {
  const { item, card, cardHiglight } = useStyles();

  const tripList = useSelector((state: RootState) => state.trips.value);

  return (
    <div data-testid="trips" style={{ width: "80vw" }}>
      <Grid container spacing={2}>
        {tripList.map((trip) => (
          <Grid item xs={6} key={trip.id} className={item}>
            <Card
              className={trip.status === "NOT_STARTED" ? cardHiglight : card}
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
                    End Date:
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
