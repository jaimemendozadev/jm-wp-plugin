import React, {Component} from 'react';
import utils from './utils.jsx';


class EditView extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Enter a New Title',
      current: this.props.toEdit,
      postError: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitPostChanges = utils.submitPostChanges.bind(this);

  }

  handleChange(event){
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    var id = this.state.current.id;
    var title = utils.handleEscape(this.state.title);

    this.submitPostChanges(id, title);
    
  }

  render(){
    if (this.state.postError === true) {
      return <h1>Whoops! There was error saving your post changes. Try again later.</h1>
    }
    return (
      <div>
        <h1>Edit Your Post #{this.props.toEdit.id} Here</h1>
  
        <h3>Fill in the form field to change the name of the post title</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTitle">New Title</label><br />
          <input id="newTitle" onChange={this.handleChange} value={this.state.title} />
          <button>Click To Submit Change</button>
        </form>
  
      </div>
    )

  }
}

export default EditView;