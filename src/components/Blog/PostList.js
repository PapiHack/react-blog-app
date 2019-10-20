import React, { Component } from 'react'
import PostListItem from './PostListItem'

class PostList extends Component {
    render() {
        return (
            <div className="list-group">
                {
                    this.props.posts.map(post => (<div key={post.id}><PostListItem post={post} /> <br/></div>))
                }
            </div>
        )
    }
}

export default PostList