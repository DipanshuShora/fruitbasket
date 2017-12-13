import React from 'react';

export class FruitPrice extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Qty</td>
                            <td>Price</td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}