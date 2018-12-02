import React, { Component } from 'react';
import './App.css';
import CipherText from './components/cipher';
import TextDecode  from './components/text'

class App extends Component {
  constructor(){
    super();
    this.state={
      shiftingPosition : 0,
      convertedCipherText : '',
      convertedTextDecode : ''
    }
  }

  passShiftingPosition = ()=>{
    
  }
  convertToCipher = (e) =>{
    console.log(this.state);
    console.log(e,this.positionshift.value);
    let enteredString = e.target.value.substring(e.target.value.length-1);
    let num = this.positionshift.value;
    console.log(enteredString);
    var convertedValue = "" ,
    asciiValue;
    if (enteredString.match(/[a-zA-Z]/i)){
      if (enteredString.toLowerCase() === enteredString){
         asciiValue = 97+((enteredString.charCodeAt() +parseInt(num)-97)%26);
        convertedValue = String.fromCharCode(asciiValue);
      }else{
        asciiValue = 65+((enteredString.charCodeAt() + parseInt(num)-65)%26);
        convertedValue = String.fromCharCode(asciiValue);
      }
      this.setState({
        convertedCipherText : this.state.convertedCipherText+convertedValue
      })
    }else{
      this.setState({
        convertedCipherText : this.state.convertedCipherText+enteredString
      })
    }
    console.log(this.state);
  }

  // shiftTheStrings = (e)=>{
  //   var enteredString = e.target.value.substring(e.target.value.length-1);
  //   var num = this.positionshift.value;
  //   console.log(enteredString);
  //   var convertedValue = "" ,
  //   asciiValue;
  //   if (enteredString.match(/[a-zA-Z]/i)){
  //     if (enteredString.toLowerCase() === enteredString){
  //        asciiValue = 97+((enteredString.charCodeAt() +parseInt(num)-97)%26);
  //       convertedValue = String.fromCharCode(asciiValue);
  //     }else{
  //       asciiValue = 65+((enteredString.charCodeAt() + parseInt(num)-65)%26);
  //       convertedValue = String.fromCharCode(asciiValue);
  //     }
  //   }
  //   var final = this.state.convertedString + convertedValue;
  //   document.getElementById('convrtToStr').value += final;
  // }

  // reverseShift = (e)=>{
  //   var enteredString = e.target.value.substring(e.target.value.length-1);
  //   var num = this.positionshift.value;
  //   var convertedValue = "" ,
  //   asciiValue;
  //   if (enteredString.match(/[a-zA-Z]/i)){
  //     console.log(enteredString.charCodeAt());
  //     if (enteredString.toLowerCase() === enteredString){
  //        asciiValue = enteredString.charCodeAt() - parseInt(num);
  //       convertedValue = String.fromCharCode(asciiValue);
  //     }else{
  //       asciiValue = enteredString.charCodeAt() - parseInt(num);
  //       convertedValue = String.fromCharCode(asciiValue);
  //     }
  //   }
  //   var final = this.state.reverseConvert + convertedValue;
  //   document.getElementById('reverseToStr').value += final;
  // }

  render() {
    return (
      <div className="App">
        <div className="shifting_position">
          <input type="number" name="positionshift" ref={(input)=>{
            this.positionshift = input
          }}/>
        </div>
        <div className="text_container">
          <CipherText shiftingNumber = {this.positionshift} cipherText={this.state.convertedCipherText}/>
          <TextDecode shiftingNumber = {this.positionshift} convertToCipher = {this.convertToCipher}/>
        </div>
      </div> 
    );
  }
}

export default App;
