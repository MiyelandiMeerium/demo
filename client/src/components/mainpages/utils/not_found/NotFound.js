import React from 'react'

function NotFound() {
    return {
        __html: '<NotFound src="./public/NotFound.html" ></NotFound>'
    }
    
}

export default function Exercise() {
    return (
        <div>
            <div dangerouslySetInnerHTML={NotFound()} />
        </div>)
}