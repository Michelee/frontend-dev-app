import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./getPosts";

const initialState = {
  loading: false,
  filterBy: "",
  groupBy: "",
  list: [],
  originalList: [],
};

export const getAllPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetchPosts();
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filter: (state, action) => {
      const newList = state.groupBy ? state.list : state.originalList;
      state.filterBy = action.payload;
      state.list = action.payload
        ? newList.filter((item) => item.industry === action.payload)
        : newList;
    },
    group: (state, action) => {
      const newList = state.filterBy ? state.list : state.originalList;
      state.groupBy = action.payload;
      state.list = action.payload ? newList.filter((item) => item.category === action.payload) : newList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.originalList = action.payload;
      });
  },
});

export const { filter, group } = postsSlice.actions;

export const getState = (state) => state;

export default postsSlice.reducer;
