import React from 'react'
import stylesWrapper from './../HOC/styleWrapper';

const ButtonOne = (props) =>{
    console.log(props);
    return (
        <button style={props.styles}>Iam Button</button>
    );
}

export default stylesWrapper(ButtonOne);