import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Feed from './components/Feed.jsx';

const allPosts = [
  {
    header: 'Post 1 Header',
    body: 'Asdf asdf asdf asdf asdf dg gdjkslfgjdfgjrfidc fdkgjdfjgdfg fsdf!',
    votes: 1,
    id: 0
  },
  {
    header: 'Post 2 Header',
    body: 'Asdf asdf asdf asdf asdf dg  fdkgjdfjgdfg fsdf!',
    votes: 5,
    id: 2
  },
]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: allPosts.sort((a, b) => b.votes - a.votes)
    };
    this.vote = this.vote.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  vote(id, modifier) {
    const newPosts = this.state.posts.slice();
    const thisPost = newPosts.find(p => p.id === id);
    thisPost.votes += modifier;
    newPosts.sort((a, b) => b.votes - a.votes);
    this.setState({posts: newPosts});
  }

  newPost(input) {
    const newPosts = this.state.posts.slice();
    let post = {
      header: input.header,
      body: input.body,
      votes: parseInt(input.votes),
      id: input.id
    };
    newPosts.push(post);
    newPosts.sort((a, b) => b.votes - a.votes);
    this.setState({posts: newPosts});
  }

  render (){
    return (
      <div className="App">
        <Header />
        <Feed
          newPost={this.newPost}
          posts={this.state.posts}
          vote={this.vote}
          />
      </div>
    );
  }
}
export default App;
