import React, { Component } from 'react'
import { EventEmitter } from 'events'

class PostListItem extends Component {
    constructor(props) {
        super(props)
        this.eventBus = new EventEmitter()
    }

    render() {
        return (
            <div>
                <article className="list-group-item">
                    <h2> {this.props.post.title} </h2>
                    <p>
                        {this.props.post.content}
                        <span className="pull-right">{this.props.author}</span>
                    </p>
                    <button className="btn btn-success" onClick={this.increment}><i className="fa fa-heart"></i> Love Its</button> &nbsp;
                    <button className="btn btn-danger"><i className="fa fa-heartbeat"></i> Dont Love Its</button>
                </article>
            </div>
        )
    }

    increment = () => this.eventBus.emit('like', this.props.post)
}

export default PostListItem