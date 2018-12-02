import React from 'react';

class CipherText extends React.Component{
    constructor(props){
        super();
        console.log(this.props);
    }
    componentWillReceiveProps(nextprops){
        console.log(this.props,nextprops);
    }
    render(){
        return(
          <div className="ciphertext_contanier">
            <input type="textarea" value={this.props.cipherText}/>
          </div>
        );
    }
}
export default CipherText;