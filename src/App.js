import './App.scss';
import React from "react";
import GlobalContext from "./contexts/GlobalContext";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProtectedRoute from "./routes/protected-route";
import globalStore from "./stores/GlobalStore";
import {ROUTE_NAME_LOGIN} from "./constants/strings";
import Login from "./pages/login/login.page";
import MainApp from "./pages/main-app/main-app.page";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.user = null;
    }

    componentDidMount() {
        this.user = globalStore.user;
    }

    /**
     * @type {object} routes - This array contains configuration objects which map Routes to Modules,
     * along-with additional meta-data
     */
    routes = [
        {
            path: '/',
            component: MainApp,
            exact: true,
            isAuthProtected: true,
        },
        {
            path: `/${ROUTE_NAME_LOGIN}`,
            component: Login,
            exact: true,
            isAuthProtected: false,
        }
    ];

    render () {
        return (
            <GlobalContext.Provider value={globalStore}>
              <div className="App">
                <Router>
                  <Switch>
                    {
                      this.routes.map(
                          ({ path, component: Component, exact, isAuthProtected }, index) => {
                            if (isAuthProtected) {
                              return (
                                  <ProtectedRoute
                                      key={`route-${index}`}
                                      path={path}
                                      component={Component}
                                      exact={exact}
                                      globalStore={globalStore}
                                  />
                              );
                            } else {
                              return (
                                  <Route
                                      key={`route-${index}`}
                                      exact
                                      path={path}
                                      render={
                                        props => {
                                          return (
                                              <ErrorBoundary>
                                                <Component
                                                    {...props}
                                                    globalStore={globalStore}
                                                />
                                              </ErrorBoundary>
                                          );
                                        }
                                      }
                                  />
                              )
                            }
                          }
                      )
                    }
                  </Switch>
                </Router>
              </div>
            </GlobalContext.Provider>
        );
  }
}

export default App;
