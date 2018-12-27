import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout'
import Home from './components/home/index'
import BookView from  './components/Books/index';
import Login from './containers/Admin/login'


const Routes = () => {
    return(
        <div>
            <Layout>
                <Switch>
                    
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />

                <Route path='/books/:id' exact component={BookView} />
                </Switch>
            </Layout>
  
        </div>
    )
}

export default Routes;
