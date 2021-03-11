import React from 'react';
import faker from 'faker';

const Post = (props) => {
    return (

        <div class="ui comments">
  <div class="comment">
    <a class="avatar">
      <img src={faker.image.image()}/>
    </a>
    <div class="content">
      <a class="author">{props.name}</a>
      <div class="metadata">
        <span class="date">Today at {faker.random.number()}</span>
      </div>
      <div class="text">
        {props.text}
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div> 
</div>
    )
}

export default Post;