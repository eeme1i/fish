import React, { useState } from "react";


export class ShittyGameBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    render(){
        if (this.state.count == 2){
            return(
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <div className='h-64 w-64 bg'>
                        <div className="aspect-h-4 aspect-w-5 bg-[url('/images/mo-es.png')] bg-cover"></div>
                    </div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                    </button>
                </div>
            );
        }
    
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                    <div className='h-64 w-64 bg'>
                        <div className="aspect-h-4 aspect-w-5 bg-[url('/images/tulee20e.png')] bg-cover"></div>
                    </div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

