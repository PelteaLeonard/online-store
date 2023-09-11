import { authorsService } from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllAuthors = createAsyncThunk(
  "authors/get-all",
  async (_, { rejectWithValue }) => {
    const response = await authorsService.getAll();

    const responsePayload = response.data;

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response);
    }

    return responsePayload;
  }
);
