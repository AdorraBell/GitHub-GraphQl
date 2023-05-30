import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "src/store/index.ts";


let token = sessionStorage.getItem(('token') || '');

if((token?.length === 0) || (token === null)) {
  token = prompt('Please, enter your token'); 
  if(token !== null){
    sessionStorage.setItem('token', token);
  }
}

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
