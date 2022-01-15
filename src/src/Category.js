import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Lalala from './lalala';

function Category() {
    const { path } = useRouteMatch();
    console.log("path", path)
    return (
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
            <Route exact path={`${path}/lalala`} component={Lalala} />
        </Switch>
    )
}

export default Category