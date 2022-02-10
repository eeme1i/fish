import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";

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
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 1
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 2
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 3
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 4
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 5
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 6
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 7
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 8
                        </p>
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-nord2 transition ease-in-out hover:bg-nord3'>
                        <p className="flex justify-center items-center">
                        Ruutu 9
                        </p>
                    </button>
                </div>
                <div className='grid columns-2'>
                    <p>Pisteet</p>
                    <span className='grid'>123</span>
                </div>
            </div>
            
            <Footer/>
        </div>

    )
}