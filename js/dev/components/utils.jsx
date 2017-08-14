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
  
  if(!posts || posts.length < 1) 
    this.setState({error: true});
  
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


function getPosts(wpInstance, callBack){
  wpInstance.posts().then((data) => {
    console.log("got the data from getPosts!", data);
    callBack(data);

  }).catch((error)=> {
    console.log("error fetching posts from DB", error);
    this.setState({error: true});
  });
}

function deleteFromDB(id){
  var wp = new wpapi({
    endpoint: `${window.location.origin}/wp-json`,
    nonce: secretCredentials.nonce
  });

  //make api call
  wp.posts().id(id).delete().then((response) => {
    console.log(`post deleted from DB, response is ${JSON.stringify(response)}`);

  }).catch((error) => {
    console.log("error deleting post from DB", error);
    this.setState({postError: true})
  });

}


function haveThePosts(firstFive, error, postError){
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

  if(postError === true){
    return (
      <h1>Whoops! There was an error making the change to your post. Please try again.</h1>  
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


function triggerRefresh(){
  console.log("inside triggerRefresh!")
  this.setState({
    refresh: true
  });
}


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
    console.log("error updating post in DB", error);
    this.setState({postError: true})
  });
}





const utils = {
  setPostState: setPostState,
  getPosts: getPosts,
  deleteFromDB: deleteFromDB,
  haveThePosts: haveThePosts,
  editPost: editPost,
  handleEscape: handleEscape,
  triggerRefresh: triggerRefresh,
  submitPostChanges: submitPostChanges
}

export default utils;