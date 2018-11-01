import React from 'react';

const Post = (props) => {
	return (
		<div>
			<ul className="collection">
			    <li className="collection-item avatar">
			      <img src={props.src} alt="" className="circle" />
			      <h5>{props.title}</h5>
			      <p>{props.body}</p>
			    </li>
    		</ul>
		</div>
		
	);
};

export default Post;
