import React from 'react';
import ReactDOM from 'react-dom';
import {Cart} from './components/cart.js';

class AppComponents extends React.Component{
    render(){
        return(
            <div>
                <Cart />
            </div>
        );
    }
}
ReactDOM.render(<AppComponents />,document.getElementById('app'));