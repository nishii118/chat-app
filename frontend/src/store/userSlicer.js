import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { toast } from "react-toastify";

const initialState = {
  isAuthUser: false,
  user: [],
  status: "idle",
  error: null,
};
export const logIn = createAsyncThunk("signIn", async (inputs) => {
  console.log(inputs);
  if (!inputs.username || !inputs.password) {
    console.log("please fill in all fields");
    // toast.error("please fill in all fields");
    throw new Error("please fill in all fields");
  }

  if (inputs.password.length < 6) {
    console.log("Password must be at least 6 characters");
    throw new Error("Password must be at least 6 characters");
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      }),
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );

    const data = await response.data;
    if (data.error) {
      throw new Error(data.error);
    }
    localStorage.setItem("chat-user", JSON.stringify(data));
    console.log(data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
    // return error.message;
  }
});

export const signUp = createAsyncThunk("signUp", async (inputs) => {
  // check filling all fields
  console.log(inputs);
  if (
    !inputs.fullName ||
    !inputs.username ||
    !inputs.password ||
    !inputs.confirmPassword ||
    !inputs.gender
  ) {
    console.log("please fill in all fields");
    // toast.error("please fill in all fields");
    throw new Error("please fill in all fields");
  }

  //checking password is same as confirmpassword
  if (inputs.password !== inputs.confirmPassword) {
    console.log("Passwords do not match");
    throw new Error("Passwords do not match");
  }

  //checking length of password is more than 6 chars
  if (inputs.password.length < 6) {
    console.log("Password must be at least 6 characters");
    throw new Error("Password must be at least 6 characters");
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      JSON.stringify({
        fullName: inputs.fullName,
        username: inputs.username,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
        gender: inputs.gender,
      }),
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );

    const data = await response.data;
    if (data.error) {
      throw new Error(data.error);
    }
    // console.log(response);
    console.log("thanh cong");
    // console.log(state.isAuthUser);
    localStorage.setItem("chat-user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log("loi roi");
    console.log(error);
    console.log(error.message);
    return error.message;
  }
});

export const logOut = createAsyncThunk("logOut", async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/logout", {
      headers: { "Content-Type": "application/json" },
    });
    localStorage.removeItem("chat-user");
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const userSlicer = createSlice({
  name: "user",
  initialState,

  reducers: {
    // signUp: async (state, action) => {
    //   const inputs = action.payload;
    //   console.log(state.isAuthUser);
    //   // state.isAuthUser = true;
    //   // console.log(state.isAuthUser);
    //   // check filling all fields
    //   console.log(inputs);
    //   if (
    //     !inputs.fullName ||
    //     !inputs.username ||
    //     !inputs.password ||
    //     !inputs.confirmPassword ||
    //     !inputs.gender
    //   ) {
    //     console.log("please fill in all fields");
    //     // toast.error("please fill in all fields");
    //     return false;
    //   }
    //   //checking password is same as confirmpassword
    //   if (inputs.password !== inputs.confirmPassword) {
    //     console.log("Passwords do not match");
    //     return false;
    //   }
    //   //checking length of password is more than 6 chars
    //   if (inputs.password.length < 6) {
    //     console.log("Password must be at least 6 characters");
    //     return false;
    //   }
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/api/auth/signup",
    //       JSON.stringify({
    //         fullName: inputs.fullName,
    //         username: inputs.username,
    //         password: inputs.password,
    //         confirmPassword: inputs.confirmPassword,
    //         gender: inputs.gender,
    //       }),
    //       { headers: { "Content-Type": "application/json" } }
    //     );
    //     state.isAuthUser = true;
    //     // console.log(response);
    //     console.log("thanh cong");
    //     // console.log(state.isAuthUser);
    //     localStorage.setItem("chat-user", JSON.stringify(response.data));
    //   } catch (error) {
    //     console.log("loi roi");
    //     console.log(error);
    //     console.log(error.message);
    //     return false;
    //   }
    //   state.isAuthUser = true;
    //   console.log(state.isAuthUser);
    //   console.log("tiep tuc");
    // },
  },

  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        // state.isAuthUser = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthUser = true;
        state.user = action.payload;
        // JSON.stringify(data)
        console.log(state.user);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // state.isAuthUser = false;
      })
      .addCase(logIn.pending, () => {
        console.log("login pending");
        // state.isAuthUser = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log("login fulfilled");
        state.isAuthUser = true;
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(logIn.rejected, () => {
        console.log("login reject");
        // state.isAuthUser = false;
        
        
      })
      .addCase(logOut.pending, () => {
        // state.isAuthUser = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthUser = false;
      })
      .addCase(logOut.rejected, () => {
        // state.isAuthUser = true;
      });
  },
});

export const userActions = userSlicer.actions;

export default userSlicer.reducer;
