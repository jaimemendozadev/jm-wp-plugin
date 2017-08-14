import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import wpapi from 'wpapi';
import PostView from './components/PostView.jsx';
import EditView from './components/EditView.jsx';
import utils from './components/utils.jsx';


const wpURL = window.location.origin;
const wp = new wpapi({endpoint: `${wpURL}/wp-json`});

const styles = {
  indexStyle: {
    width: '80%',
    margin: '0 auto',
    padding: '1.5em',
    border: '1px solid gray'
  },
  editStyle: {
    marginTop: '3em',
    marginBottom: '1em',
    height: '200px',
    padding: '2em',
    border: '1px solid gray',
    borderRadius: '10px'
  }
}
 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstFive: [],
      rest: [], 
      error: false,
      toEdit: null,
      refresh: false,
      postError: false
    }
    this.editPost = utils.editPost.bind(this);
    this.getPosts = utils.getPosts.bind(this);
    
    this.setPostState = utils.setPostState.bind(this);
    this.triggerRefresh = this.triggerRefresh.bind(this);
    this.triggerDelete = this.triggerDelete.bind(this);
    this.submitPostChanges = utils.submitPostChanges.bind(this);
  }

  triggerRefresh(){
    utils.getPosts(wp, this.setPostState);  
  }

  triggerDelete(id){
    if (this.state.rest.length <= 1){
      this.triggerRefresh();
    }

    var filteredPosts = this.state.firstFive.filter((post)=>{
      return post.id !== id;
    });

    var remaining = this.state.rest;
    
    filteredPosts.push(remaining[0]);

    remaining.splice(0,1)


    this.setState({
      firstFive: filteredPosts,
      rest: remaining
    });
    
  }



  componentDidMount(){
    utils.getPosts(wp, this.setPostState);
  }

  render() {
    if (this.state.firstFive.length === 0 || this.state.postError){
      return utils.haveThePosts(this.state.firstFive, this.state.error, this.state.postError);
    }

    return(
      <div style={styles.indexStyle}>
        <h1>Edit First Five Posts</h1>
        <p>Click on the 'Edit Post Title' button to edit the post title below.</p>
        <div style={styles.editStyle}>
          {this.state.toEdit ? <EditView refresh={this.triggerRefresh} delete={this.triggerDelete} submit={this.submitPostChanges} toEdit={this.state.toEdit} /> : ''}
        </div>
        
        <PostView editPost={this.editPost} firstFive={this.state.firstFive} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


