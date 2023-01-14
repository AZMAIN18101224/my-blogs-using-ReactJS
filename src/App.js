import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NoteFound';

function App() {
  
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>     
      </div>
    </Router>
  );
}

export default App;
