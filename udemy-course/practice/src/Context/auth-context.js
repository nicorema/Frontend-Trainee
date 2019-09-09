import React from "react";

const authContext = React.createContext({
        authenticaded: false,
        login: () => {}
    });

export default authContext;
