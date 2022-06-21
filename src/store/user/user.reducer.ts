import { PayloadAction } from "@reduxjs/toolkit";
import { Data, User } from "./user.type";

const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const reducers = {
  setData,
};

export default reducers;
