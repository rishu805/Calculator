import React from'react';
import CalculatorTitle from './calculatorTitle.js'
import OutputScreen from './outputScreen.js';
import Button from './button.js'

class Calculator extends React.Component{
constructor(){
super();
this.state={question:'',answer: ''}
this.handleClick=this.handleClick.bind(this);
}
// our method to handle all click events from our buttons
handleClick(event){
//alert("inside handleClick Event")
// get the value from the target element (button)
const value = event.target.value;
//alert("value: "+ value);
switch (value) {
	case '=': {
//    alert("inside case = ");
	// if it's an equal sign, use the eval module
	// to evaluate the question ,convert the answer
	// (in number) to String
	if (this.state.question!=='')
	{
//	alert("value not equal to blank");
		var ans='';
			try
			{
				ans = eval(this.state.question);
//				alert("for question: "+this.state.question+ " ans: "+ans);
			}
			catch(err)
			{
				this.setState({answer: "Math Error"});
			}
			if (ans===undefined)
				this.setState({answer: "Math Error"});

			// update answer in our state.
			else
				this.setState({ answer: ans , question: ''});
			break;
		}
	}
	case 'Clear': {
//    alert("inside case Clear");
	// if it's the Clears sign, just clean our
	// question and answer in the state
	this.setState({ question: '', answer: '' });
//	alert("question: "+this.state.question);
	break;
	}

	case 'Delete': {
//	alert("inside delete");
	var str = this.state.question;
		str = str.substr(0,str.length-1);
		this.setState({question: str});
//		alert("question: "+this.state.question);
		break;
	}

default: {
//alert("inside default");
//alert("value: "+value);
	// for every other command, update the answer in the state
	this.setState({ question: this.state.question += value});
	//alert("question: " +this.state.question)
	break;
	}
}
}


render(){
return (
    <div className="frame">
    <CalculatorTitle value="Calculator"/>
    <div className="mainCalc">
    <OutputScreen question={this.state.question} answer={this.state.answer}/>
    <div className="button-row">
      <Button label={'Clear'} handleClick = {this.handleClick} />
      <Button label={'Delete'} handleClick = {this.handleClick}/>
      <Button label={'.'} handleClick = {this.handleClick}/>
      <Button label={'/'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {this.handleClick}/>
      <Button label={'8'} handleClick = {this.handleClick}/>
      <Button label={'9'} handleClick = {this.handleClick}/>
      <Button label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {this.handleClick}/>
      <Button label={'5'} handleClick = {this.handleClick}/>
      <Button label={'6'} handleClick = {this.handleClick}/>
      <Button label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {this.handleClick}/>
      <Button label={'2'} handleClick = {this.handleClick}/>
      <Button label={'3'} handleClick = {this.handleClick}/>
      <Button label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {this.handleClick}/>
      <Button label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
    </div>
    );


}
}
export default Calculator;
