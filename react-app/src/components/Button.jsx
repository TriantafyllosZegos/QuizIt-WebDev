import React, { Component }  from "react"

const STYLES = [
"btn--primary--solid",
"btn--name1--solid",
"btn--name2--solid",
"btn--name3--solid",
"btn--primary--outline",
"btn--name1--outline",
"btn--name2--outline",
"btn--name3--outline",
];

const SIZES = ["btn--medium","btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSyze

}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
     : STYLES[0];

    
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>

    );
};