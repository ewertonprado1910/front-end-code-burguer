import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import {Home, Login, Products, Register, Cart, Admin} from "../containers"
import PrivateRouter from "./private-route"
import paths from "../constants/paths"


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/logincode" />
                <Route component={Register} path="/cadastrocode" />
                <PrivateRouter exact component={Home} path="/" />
                <PrivateRouter component={Products} path="/produtos" />
                <PrivateRouter component={Cart} path="/carrinho" />

                <PrivateRouter component={Admin} path={paths.Order} isAdmin />
                <PrivateRouter component={Admin} path={paths.Products} isAdmin />
                <PrivateRouter component={Admin} path={paths.NewProduct} isAdmin />
                <PrivateRouter component={Admin} path={paths.EditProduct} isAdmin />

            </Switch>

        </Router>
    )

}

