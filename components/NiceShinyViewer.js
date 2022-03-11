import { useState } from 'react';




export class ImageViever{
    constructor() {
        this.state = 0;
    }

    // get element
    GetImage(){
        const [Count2, setCount2]=useState(0);
        this.Click = setCount2;
        return(
            <div className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl  transition ease-in-out ' onClick={()=>setCount2(this.GetNextView())}>
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
                <div className="bg-nord2 hover:bg-nord3 bg-cover rounded-xl"/> //bg-[url('/images/mo-es.png')]
            )
        }
        if (this.state == 1){
            return(
                <div className="bg-[url('/textures/boom.png')] bg-cover rounded-xl"/>
            )
        }
        return(
            <div className="bg-[url('/textures/treasure.png')] bg-cover rounded-xl"/>
        )
    }

    //<div onClick={() => (this.Click)(this.GetNextView())}>oooooooooo</div>
}


export default function Bruh() {
    return (
        <div className='' onClick={() => m.UpdateState()}>
            {m.GetImage()}
        </div>
    );
}

const m = new ImageViever();

  

