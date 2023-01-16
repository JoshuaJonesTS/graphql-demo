import './App.css';
import Home from './Pages/Home';
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  HttpLink
} from '@apollo/client';

function App() {
  return (
    <ApolloProvider>
      <Home />
    </ApolloProvider>
  );
}

export default App;
