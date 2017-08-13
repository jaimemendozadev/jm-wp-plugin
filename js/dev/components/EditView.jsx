import React, {Component} from 'react';

class EditView extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Enter a New Title',
      current: this.props.toEdit
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleChange(event){
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    //make api call
  }

  render(){
    return (
      <div>
        <h1>Edit Your Post #{this.props.toEdit.id} Here</h1>
  
        <h3>Fill in the form field to change the name of the post title</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTitle">New Title</label><br />
          <input id="newTitle" onChange={this.handleChange} value={this.state.title} />
        
        </form>
  
      </div>
    )

  }
}

export default EditView;