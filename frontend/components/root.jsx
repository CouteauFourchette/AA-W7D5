import { Provider } from 'react-redux';
import React from 'react';

const Root = ({store}) => {
    return (
        <Provider store={ store } >
            <div>
                <h1>Hello</h1>
            </div>
    </Provider >
    );

};

export default Root; 