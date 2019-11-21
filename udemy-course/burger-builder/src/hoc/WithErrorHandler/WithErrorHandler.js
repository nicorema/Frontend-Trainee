import React from "react";
import Modal from "../../components/UI/Modal/Modal";
const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    };
    constructor() {
      super();
      this.axiosReqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ eror: null });
        return req;
      });
      this.axiosResponseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({
            error: error
          });
        }
      );
    }

    componentWillUnmount(){
      console.log("Unmount");
      axios.interceptors.request.eject(this.axiosReqInterceptor);
      axios.interceptors.response.eject(this.axiosResponseInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            closeModal={this.errorConfirmedHandler}
          >
            {this.state.error
              ? "Something went wrong: " + this.state.error.message
              : null}
          </Modal>
          <WrappedComponent {...this.props}>/</WrappedComponent>
        </>
      );
    }
  };
};

export default WithErrorHandler;
