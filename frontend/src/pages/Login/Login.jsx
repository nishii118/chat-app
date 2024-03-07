import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../store/userSlicer";
export function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div className="  flex flex-col items-center justify-center">
      {/* <img src="..../assets/react.svg" alt="logo.png" /> */}
      <Typography variant="h3" className="md:">
        Sign in
      </Typography>
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
      <Button
        variant="container"
        size="medium"
        color="success"
        className="w-[150px] bg-[#00A389] my-[20px]"
        onClick={ async (e) => {
          e.preventDefault();
          dispatch(logIn(inputs));
        }}
      >
        Log in
      </Button>
      <div className="flex flex-row">
        <p className="mr-[5px]">Don't have an account? </p>
        <Link
          to="/signup"
          className="text-[#00A389] underline-offset-2 underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
