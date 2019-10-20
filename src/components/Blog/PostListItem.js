import React, { Component } from 'react'

class PostListItem extends Component {
    render() {
        return (
            <div>
                <article className={this.getStyleClasses()}>
                    <h2> {this.props.post.title} </h2>
                    <p>
                        {this.props.post.content}
                        <span className="pull-right">{this.props.author}</span>
                    </p>
                    <button className="btn btn-success" onClick={() => this.props.onLike(this.props.post)}><i className="fa fa-heart"></i> Love Its</button> &nbsp;
                    <button className="btn btn-danger" onClick={() => this.props.onDontLike(this.props.post)}><i className="fa fa-heartbeat"></i> Dont Love Its</button>
                </article>
            </div>
        )
    }

    getStyleClasses() {
        const { post } = this.props
        let classes = 'list-group-item'
        if(post.loveIts > post.dontLoveIts)
            classes+=' list-group-item-success'
        else if(post.loveIts < post.dontLoveIts)
            classes+=' list-group-item-danger'
        return classes
    }
}

export default PostListItem