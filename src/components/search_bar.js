import React, { Component } from 'react';

//Class-based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    //state = object blob - the only time that set State using =
  }
  render() {
    //need to return JSX in the render() method
    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
    //because we want this component to communicate with other components
  }
}


export default SearchBar;
//Export this so other files can use it

//Notes:
//Alternative to event => console.log(event.target.value)
// onInputChange(event) {
//   console.log(event.target.value)
// }
