import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout'
import Home from './components/home/index'
import BookView from  './components/Books/index';
import Login from './containers/Admin/login'
import Auth from './hoc/auth';
import User from './components/Admin/index';
import AddReview from './containers/Admin/add';
import UserPost from './components/Admin/userPost';
import  EditReview from './containers/Admin/edit';
import Register from './containers/Admin/register';
import Logout from './components/Admin/logout';

const Routes = () => {
    return(
        <div>
            <Layout>
                <Switch>
                    
                <Route path='/' exact component={Auth(Home,null)} />
                <Route path='/login' exact component={Auth(Login,false)} />
                 <Route path='/user/logout' exact component={Auth(Logout, true)} />

                <Route path='/user' exact component={Auth(User, true)} />
                <Route path='/user/add' exact component={Auth(AddReview, true)} />
                <Route path='/user/edit-post/:id' exact component={Auth(EditReview, true)} />
                <Route path='/user/register' exact component={Auth(Register, true)} />
                <Route path='/books/:id' exact component={Auth(BookView)} />
                <Route path='/user/user-reviews' exact component={Auth(UserPost, true)} />
                <Route path='/user/user-reviews' exact component={Auth(UserPost, true)} />

                </Switch>
            </Layout>
  
        </div>
    )
}

export default Routes;
