import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth Reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("Should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        { type: actionTypes.AUTH_SUCCESS, token: "123", userId: "345" }
      )
    ).toEqual({
      token: "123",
      userId: "345",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
