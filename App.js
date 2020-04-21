import React from 'react';
import './App.css';
import DisplayItems from './DisplayItems'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.displayItem = this.displayItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

 handleInput(e){
   this.setState({
     currentItem:{
       text:e.target.value,
       key:Date.now()
     }
   })
 }
 displayItem(e){
   e.preventDefault();
   const newItem = this.state.currentItem;

   //Handle Duplicate Items
   const itemsA = [...this.state.items];
   console.log(itemsA);
   var duplicates = 0;

   for(let value in itemsA){
     console.log(itemsA[value].text);
     if(itemsA[value].text === newItem.text){
       alert("Don't input duplicate values")
       duplicates = 1;
     }
   }
   if(newItem.text !== "" && duplicates === 0){
     const newItems = [...this.state.items, newItem];
     this.setState({
       items:newItems,
       currentItem:{
         text:'',
         key:''
       }
     })
   }
 }
 deleteItem(key){
   const filteredItems = this.state.items.filter(item =>
   item.key !== key);
   this.setState({
     items:filteredItems
   })
 }
  render() {

    return (
      //Create Form
      <div>
        <div className="bar"></div>
        <h1 className="title"> TODO LIST </h1>;
      <div className="App">
      <header>
        <form id="input-form" onSubmit={this.displayItem}>
          <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <DisplayItems items = {this.state.items}
        deleteItem = {this.deleteItem}></DisplayItems>
      </div>
      </div>
    );
  }
}

export default App;
