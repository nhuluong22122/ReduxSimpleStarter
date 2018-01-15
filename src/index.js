//This is ES6 code
import _ from 'lodash'
import React from 'react'; //from react folder
import ReactDOM from 'react-dom'; //being splited to a diff library
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDRuD97JMqlrEyQBWGOgIfb4Xjn8TehpIM';

//Functional component
class App extends React.Component {
  constructor(props){
    super(props)

    //Component-level state
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('Taylor Swift')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos)=> {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar
          onSearchTermChange = {videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//Need to put all those components into a specific file -> containers
//Need to make an instance of app <App />
