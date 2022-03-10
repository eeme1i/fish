import { useState } from 'react';

/*

function Child(props){
    console.log("Child Rendered");
    return(
        <div>
            <h1>Child Name={props.name}</h1>
        </div>
    );
}
*/

class Animals{
    constructor() {
        this.state = 0;
    }
    
    getState(){
        if (this.state >= 2){
            this.state = 0;
            return this.state;
        }
        this.state = this.state + 1;
        return (this.state);
    }

    setState(num){
        this.state = num;
    }

    update(){
        this.state ++;
    }

    element() {
        if (this.state == 0){
            return (
                <div className="aspect-h-1 aspect-w-1 bg-[url('/images/mo-es.png')] bg-cover"/>
            )
        }
        if (this.state == 1){
            return(
                <div className="aspect-h-1 aspect-w-1 bg-[url('/images/chad04.png')] bg-cover"/>
            )
        }
        return(
            <div className="aspect-h-1 aspect-w-1 bg-[url('/images/tulee20e.png')] bg-cover"/>
        )
    }
}


function Mehmed(){
    const [Count2, setCount2]=useState(0);
    const m = new Animals();
    
    return(
        
        <div className='h-64 w-64 '>
            <button id='paska' onClick={()=>setCount2(m.getState())}>
                asdasd
            </button>
            {m.setState(Count2)}
            {m.element()}
        </div>
    )
}
  
export default function Bruh() {
    return Mehmed();
}
