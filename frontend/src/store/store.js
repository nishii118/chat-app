import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer'
import conversationReducer from './conversationSlicer'
import messageReducer from './messageSlicer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    message: messageReducer
  }
})