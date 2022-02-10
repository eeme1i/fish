import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";
import NewTreasureHunt from "../games/newHunt.js";

export default function Home(){
    return(
        <div className='bg-nord0'>
            
            <Head>
                <title>porinlukio.fi</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className='flex flex-col pb-16 items-center w-auto bg-nord0 text-nord4'>
                <p className='content-center font-mono text-2xl align-top p-16'>Aarrejahti</p>
                <div className='grid grid-cols-3 gap-2 max-w-xl w-2/3 pb-16'>
                    <button name="treasureGameBtn0" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 1
                        </p>
                    </button>
                    <button name="treasureGameBtn1" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 2
                        </p>
                    </button>
                    <button name="treasureGameBtn2" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 3
                        </p>
                    </button>
                    <button name="treasureGameBtn3" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 4
                        </p>
                    </button>
                    <button name="treasureGameBtn4" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 5
                        </p>
                    </button>
                    <button name="treasureGameBtn5" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 6
                        </p>
                    </button>
                    <button name="treasureGameBtn6" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 7
                        </p>
                    </button>
                    <button name="treasureGameBtn7" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 8
                        </p>
                    </button>
                    <button name="treasureGameBtn8" className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3 hover:scale-105'>
                        <p className="flex justify-center items-center">
                        Ruutu 9
                        </p>
                    </button>
                </div>
                <button className='px-5 py-2  bg-nord3 rounded-md hover:scale-110 transition ease-in-out mb-10' onClick={NewTreasureHunt}>
                    Uusi peli
                </button>
                <div className='grid columns-2'>
                    <p>Pisteet</p>
                    <span className='grid'>123</span>
                </div>
            </div>
            
            <Footer/>
        </div>

    )
}