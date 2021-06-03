import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      members: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
     then(response => response.json())
    .then(users => this.setState({members: users}));
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

render() {
    const filteredmembers = this.state.members.filter(members => {
    return members.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  if(this.state.members.length === 0){
    return <h1>Loading....</h1>
  } else{
    return(
      <div className='tc'>
        <h1 className='f1'>Friending</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList members={filteredmembers} />
        </Scroll>
      </div>
    );
  } 
}
}
  


export default App;