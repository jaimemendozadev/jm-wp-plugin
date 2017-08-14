import React, {Component} from 'react';
import utils from './utils.jsx';



class EditView extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Enter a New Title',
      current: this.props.toEdit,
      refresh: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.triggerRefresh = this.triggerRefresh.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteFromDB = utils.deleteFromDB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({
      title: event.target.value
    });
  }

  triggerRefresh(){
    this.props.refresh();
    this.setState({refresh: true});
  }

  handleDelete(){
    this.props.delete(this.state.current.id);
    this.deleteFromDB(this.state.current.id);

  }

  handleSubmit(event){
    event.preventDefault();

    var id = this.state.current.id;
    var title = utils.handleEscape(this.state.title);
    
    this.props.submit(id, title);
        
  }

  render(){
    if (this.state.postError === true) {
      return <h1>Whoops! There was error saving your post changes. Try again later.</h1>
    }
    return (
      <div>
        <h1>Edit Your Post titled: "{this.props.toEdit.title.rendered}"</h1>
  
        <h3>Fill in the form field to change the name of the post title</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTitle">New Title</label><br />
          <input id="newTitle" onChange={this.handleChange} value={this.state.title} />
          <button style={{marginLeft: '.5em'}}>Click To Submit Change</button>
          
        </form>
        
        <div style={{marginTop: '1em'}}>
          <button onClick={this.triggerRefresh} style={{backgroundColor: 'green', borderRadius: '10px'}}>Click To Refresh Feed</button>

          <button onClick={this.handleDelete} style={{backgroundColor: 'red', borderRadius: '10px'}}>Click To Delete Post</button>
        </div>
  
      </div>
    )

  }
}

export default EditView;