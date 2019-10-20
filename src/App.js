import React from 'react';
import PostList from './components/Blog/PostList'
import Post from './models/Post'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        new Post(1, 'First Post', 'This is the first post !', 'Papi'),
        new Post(2, 'Second Post', 'This is the second post !', 'PapiHack'),
        new Post(3, 'Third Post', 'This is the third post !', 'MrD3c0d3R'),
      ]
    }
  }

  addPost = (post) => {
    this.setState(
      (prevState) => {
        return {
          posts: prevState.posts.concat(post) 
        }
      }
    )
  }

  removePost = post => {
    this.setState(
      (prevState) => {
        let previousPosts = prevState.posts.filter(p => p.id !== post.id)
        return {
          posts: previousPosts
        }
      }
    )
  }

  handleLike = post => {
    this.setState(
      prevState => {
        const posts = prevState.posts
        posts[post.id - 1].increaseLoveIts()
        return { posts }
      }
    )
  }

  handleDontLike = post => {
    this.setState(
      prevState => {
        const posts = prevState.posts
        posts[post.id - 1].increaseDontLoveIts()
        return { posts }
      }
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>All Posts ({this.state.posts.length}).
              <button className="btn btn-success" style={ { marginLeft:  210} }>
                <i className="fa fa-book"></i> Add a new post
              </button>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PostList posts={this.state.posts} 
                      onLike={this.handleLike} 
                      onDontLike={this.handleDontLike} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
