import './app.css';


const Card = (props) => {
  const cardWrapperStyle={
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '10px',
    width: '200px',
    height: '200px',
    boxShadow: '0 2px 3px #ccc',
    borderRadius: '5px'
  }
  console.log(props);
  return (
    <div style={cardWrapperStyle}>
      Card
      <h4>Name - {props.name} </h4>
      <h4>Age - {props.age} </h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>MY CARDS..</h1>
      <Card  name='ABC' age='12'/>
      <Card  name='DEF' age='24'/>
    </div>
  );
};

export default App;
