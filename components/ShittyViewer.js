import { useState } from 'react';


export default function Bruh() {
    return (
        <div onClick={() => m.UpdateState()}>
            {m.Mehmed()}
        </div>
    );
}

export class Animals{
    constructor() {
        this.state = 0;
    }

    // get element
    Mehmed(){
        const [Count2, setCount2]=useState(0);
        this.Click = setCount2;
        return(
            <div className='h-64 w-64' onClick={()=>setCount2(this.GetNextView())}>
                {this.SetState(Count2)}
                {this.#element()}
            </div>
        )
    }

    // update view
    UpdateState(){
        (this.Click)(this.state); 
    }

    // set new state => update with this.UpdateState()
    // only set 0-2
    SetState(num){ 
        this.state = num;
    }

    // show next view
    SetNextView(){
        (this.Click)(this.GetNextView()); 
    }
    
    // hop to next view
    GetNextView(){
        if (this.state >= 2){
            this.state = 0;
            return this.state;
        }
        this.state ++;
        return this.state;
    }

    // private change paths to get new images
    #element() {
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

    //<div onClick={() => (this.Click)(this.GetNextView())}>oooooooooo</div>
}

const m = new Animals();

  

