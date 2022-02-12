import Head from "next/head";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";
import Game from "../games/newHunt.js";

const tileDisplayName = "Ruutu ";
const tileIdBody = "treasurePanel"

let currentGame = new Game(8, tileIdBody);
let isFirstTime = true;



export default function Home(){
    return(
        <div className='bg-nord0'>
            
            <Head>
                <title>porinlukio.fi</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div id='gameBoard'  className='flex flex-col pb-16 items-center w-auto bg-nord0 text-nord4'>
                <p className='content-center font-mono text-2xl align-top p-16'>Aarrejahti</p>
                <div className='grid grid-cols-3 gap-2 max-w-xl w-2/3 pb-16'>
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
                <button className='px-5 py-2  bg-nord3 rounded-md hover:scale-110 transition ease-in-out mb-10' 
                    onClick={startnewgame}>
                    Uusi peli
                </button>
                <div className='pb-10'>
                    <p id="startTip">Aloita uusi peli painamalla nappia</p>
                </div>
                <div className='grid columns-2'>
                    <p>Pisteet</p>
                    <span  className='grid justify-center items-center'>0</span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


function startnewgame(){
    // initalize new 
    currentGame = new Game(8, tileIdBody);
    currentGame.start();
    
    if (isFirstTime){
        // if start tip is shown, hide it
        hideStartTip();
        isFirstTime = false;
    }

    console.log(currentGame);
}

function hideStartTip(){
    (document.getElementById('startTip')).style.display = 'none';
}

function guessTile(tileIndex){
    // check tile if game started
    if (currentGame.started){
        currentGame.checkTile(tileIndex);
        return;
    }
}
