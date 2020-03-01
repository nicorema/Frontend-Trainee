import { useState, useEffect } from "react";

export default httpClient => {
  const [errorState, setErrorState] = useState(null);

  const axiosReqInterceptor = httpClient.interceptors.request.use(req => {
    setErrorState(null);
    return req;
  });
  const axiosResponseInterceptor = httpClient.interceptors.response.use(
    res => res,
    error => {
      setErrorState(error);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(axiosReqInterceptor);
      httpClient.interceptors.response.eject(axiosResponseInterceptor);
    };
  }, [axiosReqInterceptor, axiosResponseInterceptor]);

  const errorConfirmedHandler = () => {
    setErrorState(null);
  };

  return [errorState,errorConfirmedHandler]
};
