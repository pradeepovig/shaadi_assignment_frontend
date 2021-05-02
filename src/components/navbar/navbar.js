import GlobalContext from "../../contexts/GlobalContext";
import {useCallback, useContext} from "react";
import React, {useState} from 'react';
import './navbar.scss';
import {Button} from "reactstrap";
import appLogo from "../../assets/img/logo.png";

const Navbar = props => {
    const globalStore = useContext(GlobalContext);

    const logoutUser = useCallback(() => {
        globalStore.setUser(null);
    }, []);

    return (
        <div className="navbar">
            <img className="navbar__app-logo" src={appLogo} alt="App Logo"/>
            <Button outline color="primary" onClick={logoutUser}>Logout</Button>
        </div>
    );
}

export default Navbar;
