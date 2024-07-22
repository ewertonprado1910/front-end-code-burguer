import React from "react"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { Header } from "../components/Header"

export default function PrivateRouter({ component, isAdmin, ...props }) {
    const users = localStorage.getItem("codeburguer:userData")

    if (!users) {
        return <Redirect to="/logincode" />
    }
    if (isAdmin && !JSON.parse(users).admin) {
        return <Redirect to="/" />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Route {...props} component={component} />
        </>
    )

}

PrivateRouter.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}