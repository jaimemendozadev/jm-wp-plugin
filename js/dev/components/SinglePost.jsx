import React from 'react';

const singleStyle = {
  marginTop: '2em'
}

var SinglePost = (props) => {
  
  var handleClick = (event) => {
    event.preventDefault();
    props.callBack(props.post);
  }

  return(

    <div style={singleStyle} key={props.post.link} className="post">
	  <h2 className="post-title"><a href={props.post.link}
		  dangerouslySetInnerHTML={{__html:props.post.title.rendered}} /></h2>

    {props.post.excerpt.rendered ? <div className="excerpt" dangerouslySetInnerHTML={{__html:props.post.excerpt.rendered}} /> : null}
      
    <div className="entry-meta">
  
		<a className="button read-more" href={props.post.link} target="_blank">Read More &raquo;</a>

    <a className="button" style={{marginLeft: '.5em'}} href="#" onClick={handleClick}>Click to Edit Post Title</a>

	  </div>
	  </div>
  )

}

export default SinglePost;