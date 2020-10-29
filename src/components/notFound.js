import React from 'react'
import { useLocation } from 'react-router-dom'
function notFound() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()
    return (
        <div className="container text-black-50 text-center align-content-center">
            <h4>Not Found</h4>
            <p className="text-danger font-weight-bold fa">Sorry, No Match for
             <code>
                    {location.pathname}
                </code>
            </p>
        </div>
    )
}
export default notFound;