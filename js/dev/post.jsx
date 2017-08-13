import React from 'react';

var Post = (props) => {
  console.log(`the props are ${props}`);

  return(
    <div key={props.post.link} className="post">
	  <h2 className="post-title"><a href={props.post.link}
		  dangerouslySetInnerHTML={{__html:props.post.title.rendered}} /></h2>

	  {props.post.featured_media ? <a href={props.post.link}><img src={props.post._embedded['wp:featuredmedia'][0].media_details.sizes["large"].source_url} /></a> : null}

      {props.post.excerpt.rendered ? <div className="excerpt" dangerouslySetInnerHTML={{__html:props.post.excerpt.rendered}} /> : null}
      
      <div className="entry-meta">
        
        {/* <a className="author-wrap" href={props.post._embedded.author[0].link}>
          <img className="avatar" src={post._embedded.author[0].avatar_urls['48']} />by&nbsp; {post._embedded.author[0].name}
        </a> */}

		<a className="button read-more" href={props.post.link}>Read More &raquo;</a>
	  </div>
	</div>

  )

}

export default Post;