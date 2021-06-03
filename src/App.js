import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {members} from './members';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      members: members,
      searchfield: ''
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

render() {
    const filteredmembers = this.state.members.filter(members => {
    return members.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  return(
    <div className='tc'>
      <h1 >Friending</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <CardList members={filteredmembers} />
    </div>
  );
}
}
  


export default App;