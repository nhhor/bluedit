import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Feed from './components/Feed.jsx';
import Moment from 'moment';

const allPosts = [
  {
    header: 'I like flannel.',
    body: 'Like a lot...',
    votes: 3,
    id: 0,
    timePosted: new Moment()
  },
  {
    header: 'I like flannel more!',
    body: 'It\'s true!',
    votes: 1,
    id: 1,
    timePosted: new Moment()
  },
  {
    header: 'I love flannel.',
    body: 'Please send help.',
    votes: 2,
    id: 2,
    timePosted: new Moment()
  },
]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: allPosts.sort((a, b) => b.votes - a.votes),
      timeNow: new Moment()
    };
    this.vote = this.vote.bind(this);
    this.newPost = this.newPost.bind(this);
    this.updateTimeNow = this.updateTimeNow.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTimeNow(),
    5000);
  }

  updateTimeNow() {
    this.setState({timeNow: new Moment()})
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  vote(id, modifier) {
    const newPosts = [...this.state.posts];
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
      timePosted: input.timePosted,
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
          timeNow={this.state.timeNow}
          />
      </div>
    );
  }
}
export default App;
