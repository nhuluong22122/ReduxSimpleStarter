//This is ES6 code
import React from 'react'; //from react folder
import ReactDOM from 'react-dom'; //being splited to a diff library

//if its our own file -> need to specify a specific
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB8V-0a_7_MWeoa8YMKI-_Umh-VE_dVW6Y'

//Create a new component. This component should produce some HTML
//Functional component
const App = () => { // can use () => {
  //ES6 syntax + React - const (declare var - final value)
  return (
    <div>
      <SearchBar />
    </div>
  );
  //JSX - these cannot be intepreted by the browser -> need to compile
}


//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//Need to put all those components into a specific file -> containers
//Need to make an instance of app <App />
