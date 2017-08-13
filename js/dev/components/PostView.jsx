import React, {Component} from 'react';

class PostView extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstFive: this.props.firstFive || [],
      rest: []
    }
  }

  render(){
    return (
      <div>
        {this.state.firstFive.map((post)=> {
          return <SinglePost key={post.id} post={post} />
        })}
      </div> 
    )
  }

}