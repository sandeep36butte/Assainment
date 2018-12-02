import React from 'react';

class TextDecode extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="textc_container">
                <input type="textarea" onKeyUp={(e)=>this.props.convertToCipher(e)} />
            </div>
        )
    }
}
export default TextDecode;