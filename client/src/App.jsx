
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExplorePage from './pages/ExplorePage';
import LiveMusicPage from './pages/LiveMusicPage';
import MusicVenuePage from './pages/MusicVenuePage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ExplorePage} />
          <Route path="/live-music" component={LiveMusicPage} />
          <Route path="/music-venue" component={MusicVenuePage} />
          <Route path="/reviews" component={ReviewPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
