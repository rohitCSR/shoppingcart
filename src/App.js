import Cart from '../src/components/Cart';
import ProductLists from '../src/components/ProductLists';
import SingleItem from '../src/components/SingleItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import './App.css';
import { connect } from 'react-redux';
function App({ currentItem }) {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductLists} />
          {!currentItem ? (
            <Redirect to='/' />
          ) : (
            <Route path='/product/:id' exact component={SingleItem} />
          )}

          <Route path='/cart' exact component={Cart} />

          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.allProducts.currentItem,
  };
};

export default connect(mapStateToProps)(App);
