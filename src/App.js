import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Dhaka" speciality="Trafic Jam"></District>
      <District name="Rajshahi" speciality="Clean City"></District>
      <District name="Chitagang" speciality="Sea Beach"></District>
    </div>
  );
}

function LoadPosts(){
  const [comments, setComments] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  }, []);

  return (
    <div>
      <h1>Comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  return (
    <div style={{backgroundColor: 'lightgray', padding: '20px', margin: '20px', border: '4px solid salmon'}}>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'gray',
  margin: '20px',
  padding: '20px',
  color: 'white',
}

function District(props){
  const [power, setPower] = useState(1)

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    <div style={districtStyle}>
      <h2>District: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
      <p>Power: {power}</p>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}

export default App;
