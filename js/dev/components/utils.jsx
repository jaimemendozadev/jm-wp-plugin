import React from 'react';

function setPostState(data){
  var posts;
  var sortedPosts = [];  
  
  //if something went wrong with the data
  //set the error state to true
  if(!data || data.length < 1) 
    this.setState({error: true});
  
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
    this.setState({firstFive, rest});
  } else {
    this.setState({firstFive: sortedPosts});
  }

}


function getPosts(wpInstance, callback){
  wpInstance.posts().then((data) => {
    console.log("got the data bro!", data);
    callback(data);

  }).catch((error)=> {
    console.log("man bruh you f'd up", error);
    this.setState({error: true});
  });
}


function haveThePosts(firstFive, error){
  if (!firstFive.length > 0 && error === false) {
    return(
      <h1>Waiting for data...</h1>
    )
  }

  if (error === true){
    return(
      <h1>Whoops! There was an error retrieving the posts. Please check back later.</h1>
    )
  }
}

function editPost(post) {
  this.setState({toEdit: post});
}



const utils = {
  setPostState: setPostState,
  getPosts: getPosts,
  haveThePosts: haveThePosts,
  editPost: editPost
}

export default utils;