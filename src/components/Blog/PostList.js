import React, { Component } from 'react'
import PostListItem from './PostListItem'

class PostList extends Component {
    render() {
        return (
            <div className="list-group">
                {
                    this.props.posts.map(post => (
                                <React.Fragment key={post.id}>
                                    <PostListItem onLike={this.props.onLike} 
                                                  onDontLike={this.props.onDontLike} 
                                                  post={post} />
                                    <br/>
                                </React.Fragment>)
                                )
                }
            </div>
        )
    }
}

export default PostList
