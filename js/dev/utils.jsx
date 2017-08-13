import React from 'react';

function setPostState(data, context){
    var posts;
    var sortedPosts = [];

    //if something went wrong with the data
    //set the error state to true
    if(!data || data.length < 1) 
      context.setState({error: true})
    

    //filter _paging key from   
    posts = data.map((post, key) => {
        if (key !== '_paging'){
          return post
        }
      });
    
    //resort the posts order  
    for (var i = posts.length - 1; i >= 0; --i){
      sortedPosts.push(posts[i]);
    }

    sortedPosts = sortedPosts.filter((post)=> {
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