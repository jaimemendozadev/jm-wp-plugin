import React from 'react';

function setPostState(data, context){
  var posts;
  var sortedPosts = [];  
  
  //if something went wrong with the data
  //set the error state to true
  if(!data || data.length < 1) 
    context.setState({error: true});
  
  //filter _paging key from data
  posts = data.map((post, key) => {
    if (key !== '_paging'){
      return post
    }
  });  
  
  sortedPosts = posts.filter((post)=> {
    return post !== null;
  });  

  var firstFive;
  var rest;
  
  if (sortedPosts.length > 5) {
    firstFive = sortedPosts.slice(0, 5);
    rest = sortedPosts.slice(5);   
    context.setState({firstFive, rest});
  } else {
    context.setState({firstFive: sortedPosts});
  }

}


const utils = {
  setPostState: setPostState
}

export default utils;