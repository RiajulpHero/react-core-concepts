import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks =['Alamgir', 'Jasim', 'Kanchan', 'Razzak', 'Manna'];
  const products = [
    {name: "Photoshop", price: "$78"},
    {name: "Illustrator", price: "$85"},
    {name: "PDF Reader", price: "$24"},
    {name: "Premium EI", price: "$234"}
  ];
  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
      <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li> )
        }
      </ul>
      {
       products.map(pd => <Product product = {pd}></Product> )
      }
      </header>   
    </div>
  );
}

function Product(props){
  const productStyle ={
    height: '200px',
    width: '200px',
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    margin: '10px',
    padding: '10px',
    float: 'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
     <h3>{name}</h3>
     <h5>{price}</h5>
     <button>Buy now</button>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

export default App;
