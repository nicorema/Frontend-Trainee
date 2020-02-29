import { useReducer, useCallback } from "react";

const htttpReducer = (currentHttpState, action) => {
  const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  };
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      };
    case "RESPONSE":
      return {
        ...currentHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error
      };
    case "CLEAR":
      return initialState;

    default:
      throw new Error("Should not be here!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(htttpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  });

  const clear = useCallback(() => dispatchHttp({ type: "CLEAR" }), []);
  const sendRequest = useCallback((url, method, body, extra, identifier) => {
    dispatchHttp({ type: "SEND", identifier: identifier });

    fetch(url, {
      method: method,
      body: body,
      headers: { "Content-type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        dispatchHttp({
          type: "RESPONSE",
          responseData: responseData,
          extra: extra
        });
      })
      .catch(error => {
        dispatchHttp({ type: "ERROR", error: "Something went wrong" });
      });
  }, []);
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    extra: null,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear:clear
  };
};

export default useHttp;
