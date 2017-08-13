import React from 'react';
import wpapi from 'wpapi';



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


function handleEscape(text){
  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  return String(text).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
};


function submitPostChanges(id, title){

  var wp = new wpapi({
    endpoint: `${window.location.origin}/wp-json`,
    nonce: secretCredentials.nonce
  });

  //make api call
  wp.posts().id(id).update({
    title,
    status: 'publish'
  }).then((response) => {
    console.log(`post updates saved in DB, response is ${JSON.stringify(response)}`);
  }).catch((error) => {
    console.log("man bruh you f'd up", error);
    this.setState({postError: true})
  })
}







const utils = {
  setPostState: setPostState,
  getPosts: getPosts,
  haveThePosts: haveThePosts,
  editPost: editPost,
  handleEscape: handleEscape,
  submitPostChanges: submitPostChanges
}

export default utils;