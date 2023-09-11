import authorsReducer from "../features/authors/slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    authors: authorsReducer,
  },
});

export default store;
