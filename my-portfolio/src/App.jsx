import React, {lazy, Suspense} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

const HomePage = lazy(() => import('./pages/home'));

function App() {

  return (
      <Suspense fallback={<div>Loading...</div>}>
          <Router>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path='/home' component={HomePage}/>
                  <Route path="*" >
                      <Redirect to="/home" />
                  </Route>
              </Switch>
          </Router>
      </Suspense>

  )
}

export default App
