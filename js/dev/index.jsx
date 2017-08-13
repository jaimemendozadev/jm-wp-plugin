import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import wpapi from 'wpapi';
import PostView from './components/PostView.jsx';
import utils from './components/utils.jsx';

const wpURL = window.location.origin;
const wp = new wpapi({endpoint: `${wpURL}/wp-json`});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstFive: [],
      rest: [], 
      error: false
    }
  }
  componentDidMount(){
    var context = this;
    
    wp.posts().then((data) => {
      console.log("got the data bro!", data);
      utils.setPostState(data, context);

    }).catch((error)=> {
      console.log("man bruh you f'd up", error);
      context.setState({error: true});
    });
  }

  render() {
    if (!this.state.firstFive.length > 0 && this.state.error === false) {
      return(
        <h1>Waiting for data...</h1>
      )
    }

    if (this.state.error === true){
      return(
        <h1>Whoops! There was an error retrieving the posts. Please check back later.</h1>
      )
    }
    
    return(
      <div>
        <PostView firstFive={this.state.firstFive} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


