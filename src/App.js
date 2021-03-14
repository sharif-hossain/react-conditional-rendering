import logo from './logo.svg';
import './App.css';
import TwitterHead from './components/TwitterHead/TwitterHead';
import TweetBody from './components/TweetBody/TweetBody';
import TweetComments from './components/TweetComments/TweetComments';

function App() {
  return (
    <div className="tweet">
      <div className="header">
        <h1>React Conditional Rendering</h1>
      </div>
      <TwitterHead/>
      <TweetBody/>
      <TweetComments/>
    </div>
  );
}

export default App;
