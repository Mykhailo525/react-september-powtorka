import css from './Header.module.css'

import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"todos"}>todos</NavLink>
            <NavLink to={"albums"}>albums</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
        </div>
    );
};

export {Header};