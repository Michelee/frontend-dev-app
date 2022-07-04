import axios from "axios";
import postsReducer, { filter, getAllPosts, group } from "./postsSlice";

jest.mock("axios");

const initialState = {
  list: [],
  filterBy: "",
  groupBy: "",
  loading: false,
  originalList: [],
};

describe("Post reducer tests", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should set initial state", () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it("Should handle filter posts", () => {
    const state = postsReducer(initialState, filter("industry1"));
    expect(state.filterBy).toEqual("industry1");
  });

  it("Should handle group posts", () => {
    const state = postsReducer(initialState, group("bank"));
    expect(state.groupBy).toEqual("bank");
  });

  it("should handle add delayed question", async () => {
    const dispatch = jest.fn();
    const getState = () => ({ ...initialState });
    const thunk = getAllPosts();
    await thunk(dispatch, getState, null);
    expect(axios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("Should modify state to loading if getAllPosts is pending", () => {
    const action = { type: getAllPosts.pending };
    const state = postsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("Should modify state with the new values if getAllPosts is fullfiled", () => {
    const action = {
      type: getAllPosts.fulfilled,
      payload: [
        { title: "A Summer island in the Netherlands", image: "image12.svg" },
      ],
    };
    const state = postsReducer(initialState, action);
    expect(state).toEqual({
      originalList: [...initialState.list, ...action.payload],
      list: [...initialState.list, ...action.payload],
      loading: false,
      filterBy: "",
      groupBy: "",
    });
  });
});
