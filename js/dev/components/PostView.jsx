import React, {Component} from 'react';
import SinglePost from './SinglePost.jsx';


var PostView = (props)=> {  
  return(
    <div>  
      {props.firstFive.map((post, idx)=> {
        return <SinglePost callBack={props.editPost} key={post.id} post={post} />
      })}
    </div>
  )
}

export default PostView;