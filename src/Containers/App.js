import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
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
    const {members, searchfield} = this.state;
    const filteredmembers = members.filter(member => {
    return member.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return !members.length ?
         <h1>Loading....</h1> :
        (
          <div className='tc'>
            <h1 className='f1'>Friending</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardList members={filteredmembers} />
              </ErrorBoundary>  
            </Scroll>
          </div>
       );  
  } 
}

  


export default App;