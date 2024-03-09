import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  messages: [],
  status: "idle",
};

export const getMessages = createAsyncThunk(
  "getMessages",
  async (conversationId) => {
    try {
      // console.log(conversationId);
      const response = await axios.get(
        `http://localhost:5000/api/auth/${conversationId}`,
        { withCredentials: true }
      );
      // const response = await axios.get(`http://localhost:5000/api/users`, {
      //   withCredentials: true,
      // });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const sendMessage = createAsyncThunk(
  "sendMessage",
  async ({conversationId, message}) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/send/${conversationId}`,
        JSON.stringify({ message }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const data = await response.data;
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export const messageSlicer = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
        console.log(state.messages);
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const messageActions = messageSlicer.actions;
export default messageSlicer.reducer;
