import initialState from "./state";
import { createSlice } from "@reduxjs/toolkit";
import { getAllAuthors } from "./thunks";

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    reset: (state, { payload }) => {
      state.statuses[payload] = null;
      state.messages[payload] = null;
      state.severities[payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAuthors.pending, (state) => {
        state.statuses.getAll = "pending";
      })
      .addCase(getAllAuthors.fulfilled, (state, { payload }) => {
        state.authors = payload;
        console.log(payload);
        state.statuses.getAll = "fulfilled";
        state.severities.getAll = "success";
      })
      .addCase(getAllAuthors.rejected, (state, { payload }) => {
        state.statuses.getAll = "rejected";
        state.messages.getAll = payload?.message ?? "Eroare necunoscuta";
        state.severities.getAll = payload?.severity ?? "error";
      });
  },
});

export const { reset } = authorsSlice.actions;
export default authorsSlice.reducer;
