import React from 'react';
import { render } from 'react-dom';
import DropDown from './DropDown';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div style= {styles}>
      <DropDown />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
