import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout'
import Home from './components/home/index'
import BookView from  './components/Books/index';
const Routes = () => {
    return(
        <div>
            <Layout>
                <Switch>
                    
                <Route path='/' exact component={Home} />
                <Route path='/books/:id' exact component={BookView} />
                </Switch>
            </Layout>
  
        </div>
    )
}

export default Routes;
