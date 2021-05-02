import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {ROUTE_NAME_LOGIN} from "../constants/strings";
import ErrorBoundary from "../components/error-boundary/error-boundary";

const ProtectedRoute = ({ component: Component, store, globalStore, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location, ...restProps }) => {
                if (globalStore.user) {
                    return (
                        <ErrorBoundary>
                            <Component {...restProps}/>
                        </ErrorBoundary>
                    );
                } else {
                    return <Redirect to={{
                        pathname: `/${ROUTE_NAME_LOGIN}`,
                        state: { from: location }
                    }}/>
                }
            }}
        />
    )
}

export default ProtectedRoute;
