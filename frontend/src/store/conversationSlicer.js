import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "idle",
  error: null,
  conversations: [],
  chatFriend: [],
};

export const getConversation = createAsyncThunk("getConversation", async () => {
  try {
    console.log("before getConversation");
    const response = await axios.get(`http://localhost:5000/api/users`, {
      withCredentials: true,
    });
    // state.conversations = response.data;
    console.log("after getConversation");
    const data = response.data;
    if (data.error) {
      // console.log("data error in getconversations");
      throw new Error(data.error);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const conversationSlicer = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setChatFriend: (state, action) => {
      const chatFriendId = action.payload;
      state.chatFriend = state.conversations.find((e) => e._id === chatFriendId);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getConversation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConversation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.conversations = action.payload;
        console.log("succeeded getConversation");
        console.log(action.payload);
      })
      .addCase(getConversation.rejected, (state, action) => {
        state.status = "failed";
        console.log("reject getConversation");
        state.error = action.error.message;
      });
  },
});

export const conversationActions = conversationSlicer.actions;
export default conversationSlicer.reducer;
