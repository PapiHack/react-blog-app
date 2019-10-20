import React from 'react';
import PostList from './components/Blog/PostList'
import Post from './models/Post'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        new Post(0, 'First Post', 'This is the first post !', 'Papi'),
        new Post(1, 'Second Post', 'This is the second post !', 'PapiHack'),
        new Post(2, 'Third Post', 'This is the third post !', 'MrD3c0d3R'),
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

  removePost = (post) => {
    this.setState(
      (prevState) => {
        let previousPosts = [...prevState.posts]
        previousPosts.splice(post.id, 1)
        return {
          posts: [...previousPosts]
        }
      }
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>All Posts.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PostList posts={this.state.posts} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
