import React from "react"
import PropTypes from "prop-types"

import {ErrorStylesMessage} from "./styles"

export function ErrorMessage({children}) {  
    return <ErrorStylesMessage>{children}</ErrorStylesMessage>
   
    
}

ErrorMessage.propTypes = {
    children: PropTypes.string
}