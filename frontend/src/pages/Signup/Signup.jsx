import { Typography, TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  signUp, userActions } from "../../store/userSlicer";
export function Signup() {
  const [gender, setGender] = useState("");
  // const user = useSelector((state) => state.user);
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const dispatch = useDispatch();

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    setInputs({ ...inputs, gender: event.target.value });
  };
  return (
    <div className="  flex flex-col items-center justify-center">
      {/* <img src="..../assets/react.svg" alt="logo.png" /> */}
      <Typography variant="h3" className="md:">
        Sign up
      </Typography>
      <TextField
        id="filled-basic"
        label="Full Name"
        variant="filled"
        className="w-[400px] py-[10px]"
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <TextField
        id="filled-basic"
        label="Username"
        variant="filled"
        className="w-[400px] py-[10px]"
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        type="password"
        className="w-[400px] py-[10px]"
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <TextField
        id="filled-basic"
        label="Confirm Password"
        variant="filled"
        type="password"
        className="w-[400px] py-[10px]"
        onChange={(e) =>
          setInputs({ ...inputs, confirmPassword: e.target.value })
        }
      />
      <TextField
        className="w-[400px]"
        value={gender}
        helperText="Please select your gender"
        select
        label="Gender"
        onChange={handleChangeGender}
      >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
      </TextField>
      <Button
        variant="container"
        size="medium"
        color="success"
        className="w-[150px] bg-[#00A389] my-[20px]"
        onClick={ async (e) => {
          e.preventDefault();
          await dispatch(signUp(inputs));
        }}
      >
        Sign up
      </Button>
      <div className="flex flex-row">
        <p className="mr-[5px]">Have an account? </p>
        <Link
          to="/login"
          className="text-[#00A389] underline-offset-2 underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
