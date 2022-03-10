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
        this.öö = undefined;
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

    Mehmed(){
        const [Count2, setCount2]=useState(0);
        this.Click = setCount2;
        return(
            
            <div className='h-64 w-64' onClick={()=>setCount2(this.getState())}>
                {this.setState(Count2)}
                {this.element()}
                
            </div>
        )
    }
    //<div onClick={() => (this.Click)(this.getState())}>oooooooooo</div>

    UpdateState(){
        (this.Click)(this.getState());
    }

}

const m = new Animals();

//function Mehmed(){}
  
export default function Bruh() {
    return (
        <div>
            <button onClick={m.loom}>öööööööööö</button>
            {m.Mehmed()}
            <div onClick={() => m.UpdateState()}>oooooooooo</div>
        </div>
    );
}
