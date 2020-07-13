import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
// import TodoItem from './components/TodoItem';
// import TrafficLight from './components/TrafficLight';


// import { Component } from 'react';
// const RED =0;
// const YELLOW =1;
// const GREEN =2;
// class App extends Component {
  //CONSTRUCTOR FOR TEST APP
  /*constructor() {
    super();
    // this.onItemClick = this.onItemClick.bind(this);
    this.state = {
      todoItems : [
        {  title: 'Test abc', isComplete: true }, 
        {  title: 'Test 2', isComplete: true},
        {  title: 'Test 3', isComplete: false}
      ]
    }
  }*/
//   constructor() {
//     super();
//     this.todoItems = [
//             { title: 'Test abc', isComplete: true }, {title: 'Test 2', isComplete: true}, {title: 'Test 3', isComplete: false}
//           ];
//     this.state ={
//         currentColor : GREEN
//     }
//     setInterval(() => {            
//         this.setState({currentColor : this.getNextColor(this.state.currentColor)});
//     },1000);        
// }
// getNextColor(color) {
//   switch(color){
//       case RED: return YELLOW;
//       case YELLOW: return GREEN;
//       default: return RED;
//   }
// }
/* test app
  onItemClicked(item) {
    console.log('Item clicked', item);    
    return(event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      console.log('index', index);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete:!isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  render() {    
    const {currentColor} = this.state;
    return(
      <div className="App">
        {this.state.todoItems.length>0 && this.state.todoItems.map((item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>)}
        {this.state.todoItems.length === 0 && 'Nothing here...'}
        { <TrafficLight currentColor={currentColor}/> }
      </div>
    );
  }
}*/

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'Demo react CRUD',
      act:0,
      datas:[]
    }
  }
  componentDidMount(){
    this.refs.name.focus();
  }


  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    }
    );
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();

  }
  
  render() {
    const datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}
