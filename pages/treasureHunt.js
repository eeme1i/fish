import Head from "next/head";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";
import GameStates from "../games/gameStates.js";
import Game from "../games/newHunt.js";
import PointCounter from "../games/pointCounter.js";
import { updateElemText } from "../games/helpers.js";
import { ShittyGameBlock } from "../components/GameComponents";
import Bruh from "../components/ShittyViewer.js";

const tileDisplayName = "Ruutu ";
const tileIdBody = "treasurePanel"
// tileAmount, idBody, tileDisplayName, difficulty = 3, scoreDisplay = undefined
let currentGame = new Game(8, tileIdBody, tileDisplayName, 3, "scoreDisplay");
let totalPointsCounter = new PointCounter();




export default function Home(){


    return(
        <div className='bg-nord0 min-h-screen'>
            
            <Head>
                <title>porinlukio.fi</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <p className='flex justify-center font-mono text-4xl align-top p-10 text-nord4 md:text-5xl underline'>
                Aarrejahti
            </p>


            <div id='gameBoard' className='text-nord4 w-2/3 grid items-center grid-cols-1 m-auto mb-[8%]
                        md:align-middle md:w-[100%] max-w-6xl  md:grid-cols-3 '>
                
                <div className=' col-span-2  py-[3%] flex flex-col p-[5%]  '>

                    <div className='grid grid-cols-3 gap-2 '>
                        {/* every button uses same "name body" and "display name body", onClick needs to use lambda function */}
                        <button id="treasurePanelButton0" onClick={() => guessTile(0)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 0}> {tileDisplayName + 1} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton1" onClick={() => guessTile(1)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 1}> {tileDisplayName + 2} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton2" onClick={() => guessTile(2)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 2}> {tileDisplayName + 3} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton3" onClick={() => guessTile(3)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 3}> {tileDisplayName + 4} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton4" onClick={() => guessTile(4)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 4}> {tileDisplayName + 5} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton5" onClick={() => guessTile(5)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 5}> {tileDisplayName + 6} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton6" onClick={() => guessTile(6)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 6}> {tileDisplayName + 7} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton7" onClick={() => guessTile(7)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 7}> {tileDisplayName + 8} </a>
                            </p>
                        </button>
                        <button id="treasurePanelButton8" onClick={() => guessTile(8)} className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                            <p className="flex justify-center items-center">
                                <a id={tileIdBody + 8}> {tileDisplayName + 9} </a>
                            </p>
                        </button>
                    </div>
                </div>
                <div className='w-auto md:h-full md:text-xl'>
                    <div className='flex flex-col items-center md:h-fit md:pt-[40%]'>
                        <div className='h-fit md:text-center pb-5'>
                            <p id="startTip" >Aloita uusi peli painamalla nappia</p>
                        </div>
                        <button className='px-5 py-2  bg-nord3 rounded-md hover:scale-110 transition ease-in-out mb-10' 
                            onClick={startnewgame}>
                            Uusi peli
                        </button>
                        <div className='grid columns-2'>
                            <p>Pisteet</p>
                            <span  className='grid justify-center items-center'><p id="scoreDisplay">0</p></span>
                        </div>
                        <div className='grid columns-2 py-5'>
                            <p>Kokonaispisteet</p>
                            <span  className='grid justify-center items-center'><p id="totalScoreDisplay">0</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Bruh className='w-64 h-64'/>


        </div>
    )
}





function startnewgame(){
    // initalize new
    console.log(paska);
    paska.click();

    currentGame = new Game(8, tileIdBody, tileDisplayName, 3, "scoreDisplay");
    currentGame.start();
    startTipVisibility("none");
}


function startTipVisibility(state){
    (document.getElementById('startTip')).style.display = state;
}


function guessTile(tileIndex){
    // check tile if game started
    if (currentGame.state === GameStates.started){
        currentGame.checkTile(tileIndex);
        if (currentGame.state === GameStates.ended){
            // if game over, ad points to total counter
            totalPointsCounter.add(currentGame.score.value);
            updateElemText("totalScoreDisplay", totalPointsCounter.value);
            startTipVisibility("block");
            
        }
        return;
    }
}
