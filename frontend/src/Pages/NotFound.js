import React from 'react';
import { Route } from 'react-router-dom';

function NotFound() {
    return (
        <Status code={404}>
            <div>
                <h1>404. Sorry, can’t find that.</h1>
            </div>
        </Status>
    );
}

function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = code;
                return children;
            }}
        />
    );
}

export default NotFound;