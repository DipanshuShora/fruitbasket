import React from 'react';
export class AddButton extends React.Component{
    constructor(props){
        super(props);
    }
    AddToCart(){
        console.log("work");
    }
    render(){
        return(
            <div>
                <button onClick={this.AddToCart}>Add To Cart</button>
            </div>
        );
    }
}