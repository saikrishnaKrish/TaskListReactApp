import logo from './logo.svg';
import './App.css';
import './style.css'
import { Component } from 'react';
import DisplayList from './DisplayList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

      items: [],
      currentItem: {
        key: '',
        text: ''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  formData = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);

    if (newItem.text !== '') {
      const newItems = [newItem, ...this.state.items];
      console.log(newItems);
      this.setState({
        items: newItems,
        currentItem: {
          key: '',
          text: ''
        },
      })
    }

  }


  deleteTodo = (key) => {
    const deletePlan = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: deletePlan
    })
  }

  makeUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text
      }
    })

    this.setState({
      items: items,
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.formData}>
            <br/>
            <h1 id="todoheading">TODO List</h1>
            <input type="text" value={this.state.currentItem.text} placeholder="Enter some text" onChange={this.handleInput}></input>
            <button type="Submit"> Add + <i className="fa-solid fa-champagne-glasses"></i> </button>
          </form>
        </header>
        <DisplayList items={this.state.items} deleteTodo={this.deleteTodo} makeUpdate={this.makeUpdate}/>
      </div>
    );
  }
}

export default App;
