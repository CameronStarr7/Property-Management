import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import '../src/style/main';
import history from './history';
import Layout from './components/layout';

//AUTH
import requireAuth from "./components/requireAuth";
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

//DASHBOARD
import Dashboard from './components/dashboard';
import NewNewsletter from './components/newsletter/newsletterNew';
import EditNewsletter from './components/newsletter/newsletterEdit';
import NewsletterDetail from './components/newsletter/newsletterDetail';

import NewRequest from './components/newsletter/requests/requestsNew';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' component={Signup}/>

            <Route path='/dashboard' component={requireAuth(Dashboard)}/>
      
            <Route path='/newsletter/New' component={requireAuth(NewNewsletter)}/>
            <Route path='/newsletter/Edit/:id' component={requireAuth(EditNewsletter)}/>
            <Route path='/newsletter/detail/:id' component={requireAuth(NewsletterDetail)}/>

            <Route path='/requests/new' component={requireAuth(NewRequest)}/>
          
          </Layout>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);