import * as React from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Card,
  CardContent,
  Grid,
  Link,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link as LinkTo } from "react-router-dom";

type Trip = {
  trip: {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    destinations: string[];
    status: "NOT_STARTED" | "FINISHED" | "STARTED";
  };
};

export default function DialogComponent({ trip }: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "#000000" }}
        onClick={handleClickOpen}
      >
        View Trips detail
      </Link>
      <Dialog
        style={{ maxHeight: "400px" }}
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <LinkTo to="/">
            <ArrowBack />
          </LinkTo>
          <DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                Title: {trip.name}
              </Grid>
              <Grid item xs={3}>
                Start Date:{trip.startDate}
              </Grid>
              <Grid item xs={3}>
                End date:
                {trip.endDate}
              </Grid>
              <Grid item xs={3}>
                Status:{trip.status}
              </Grid>
            </Grid>
            <Card>
              <CardContent>{trip.destinations}</CardContent>
            </Card>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
