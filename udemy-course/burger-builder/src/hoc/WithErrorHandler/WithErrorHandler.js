import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import useHttpErrorHandler from "../../hooks/http-error-handler";
const WithErrorHandler = (WrappedComponent, axios) => {
  return function Comp(props) {
    const [error, clear] = useHttpErrorHandler(axios);
    return (
      <>
        <Modal show={error} closeModal={clear}>
          {error ? "Something went wrong: " + error.message : null}
        </Modal>
        <WrappedComponent {...props}>/</WrappedComponent>
      </>
    );
  };
};

export default WithErrorHandler;
