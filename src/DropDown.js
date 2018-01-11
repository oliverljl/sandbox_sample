import React from "react";
import MyService from "./MyService";

const InputFiled = (props) => {
 const getValue = (value) => {
    props.getInputValue(value);
 }
 return <input onChange = {(e)=>{
    getValue(e.target.value)
 }}/>
}

const Display = (props) => {
  return (
      <div>
          {props.items}
      </div>
  )
}

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item:''};
  }
  sendRequest(value){
      let myServie = new MyService();
      let res = myServie.sendRequest(value);
      res.then((data)=>{
          this.setState({...this.state.item,item:data.total_count})
      });
  }
  render() {
    return( <div>
    <InputFiled getInputValue = {(value)=>{
          this.sendRequest(value)
    }}/>;
    <Display items={this.state.item}/>
    </div>
    )
  }
}
export default DropDown;