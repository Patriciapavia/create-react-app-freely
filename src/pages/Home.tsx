import React, { useState } from "react";
import { Grid, Snackbar, SnackbarOrigin, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { addTrip } from "../feature/Trip";
import { Select, SelectOption } from "../components/Select";
import { countries } from "../utils/countryArray";
import { RootState } from "../store";
import { validate } from "../components/Validator";
export interface State extends SnackbarOrigin {
  open: boolean;
}

interface Key {
  connected: boolean;
  type: string;
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  papper: {
    padding: "20px",
    width: "60vh",
    height: "50vh",
    backgroundColor: "#ECF0F4",
  },

  formWrap: {
    backgroundColor: "white",
    padding: "20px 0px 20px 50px",
    marginLeft: "450px",
    maxWidth: "400px",
  },
}));

function Home() {
  const dispatch = useDispatch();
  const tripList = useSelector((state: RootState) => state.trips.value);
  const [countrySelected, setCountrySelected] = useState<SelectOption[]>([]);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [key, setKey] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const destination = countrySelected.map(function (obj) {
    return obj.name;
  });

  const { vertical, horizontal, open } = snackbar;

  const addTripHandler = (event: any) => {
    event.preventDefault();

    const valid = validate(name, setError, startDate, endDate, destination);
    console.log(typeof error);
    if (!valid) {
      setSnackbar({ open: true, vertical: "top", horizontal: "center" });
    } else {
      setError("");
      setMessage("");
      dispatch(
        addTrip({
          id: tripList.length + 1,
          name,
          startDate,
          endDate,
          destination,
          status: "NOT_STARTED",
        })
      );
      const resetForm = async () => {
        setSnackbar({ open: true, vertical: "top", horizontal: "center" });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setName("");
        setEndDate("");
        setStartDate("");
        setKey((k) => !k);
      };
      setMessage("Trip successfully added");

      resetForm();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, vertical: "top", horizontal: "center" });
  };

  const { formWrap } = useStyles();

  return (
    <>
      <div className={formWrap}>
        <div style={{ textAlign: "center" }}>
          {" "}
          <h2>welcome to Freely</h2>
        </div>
        {/* {error && (
          <div style={{ color: "red", textAlign: "center" }}>{error}</div>
        )} */}
        <form onSubmit={addTripHandler}>
          <Snackbar
            autoHideDuration={5000}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={error ? error : message ? message : ""}
            onClose={handleSnackbarClose}
            key={vertical + horizontal}
          />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label>Title:</label>
            </Grid>
            <Grid item xs={9}>
              <input
                style={{ width: "210px" }}
                type="text"
                value={name}
                placeholder="Name..."
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label> Start Date:</label>
            </Grid>
            <Grid item xs={9}>
              <input
                style={{ width: "210px" }}
                // key={key}
                type="date"
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
              />
            </Grid>
          </Grid>

          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label> End Date:</label>
            </Grid>
            <Grid item xs={9}>
              <input
                style={{ width: "210px" }}
                // key={key}
                type="date"
                onChange={(event) => {
                  setEndDate(event.target.value);
                }}
              />
            </Grid>
          </Grid>

          <br></br>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <label> Destination</label>
            </Grid>
            <Grid item xs={9}>
              <Select
                multiple
                options={countries}
                value={countrySelected}
                onChange={(o) => setCountrySelected(o)}
              />
            </Grid>
          </Grid>

          <br />
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <button
                style={{ borderRadius: " 15px 15px", padding: "3px 8px" }}
                type="submit"
              >
                {" "}
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Home;
