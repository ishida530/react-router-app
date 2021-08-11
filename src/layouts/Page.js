import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import ProductList from '../pages/ProductList'
import ContactList from '../pages/ContactList'
import AdminLogin from '../pages/AdminLogin'
import Login from "../pages/Login"
import ProductListPage from '../pages/ProductListPage';
const Page = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={ProductListPage} />
                <Route path="/product/:id" component={ProductList} />
                <Route path="/contact" component={ContactList} />
                <Route path="/admin" component={AdminLogin} />
                <Route path="/login" component={Login} />

                <Route render={() => (
                    <h1>Strona nie istnieje</h1>
                )} />
            </Switch>
        </>
    );
}

export default Page;