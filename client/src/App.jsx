import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBooks from '../../SearchBooks';
import LoginSignup from './components/LoginSignup';
import SavedBooks from './components/SavedBooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000', 
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={SearchBooks} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/saved" component={SavedBooks} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
