import React from "react";
import classes from "./Layout.module.css";
const Layout = (props) => (
    <>
        <header className={classes.header}>Toolbar, sideDrawer,Backdrop</header>
        <main className={classes.main}>
            {props.children}
        </main>
    </>
);

export default Layout;