import { useEffect } from "react";
import { fetchTripsData } from "./utils/mockApi";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import User from "./feature/Trip";
import "./App.css";
const App = () => {
  // useEffect(() => {
  //   fetchTripsData().then((data) => console.log(data));
  // }, []);

  return (
    <div className={"wrapper"}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/trips" element={<Trips />}></Route>
            </Routes>{" "}
          </Grid>
        </Grid>
      </Router>
    </div>
  );
};

export default App;
