import Head from "next/head";
import Link from "next/link";
import Footer from "./components/footer.js"

export default function Home(){
    return(
        <div className='bg-blue-400'>
            
            <Head>
                <title>porinlukio.fi</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col min-h-screen items-center w-auto bg-orange-700'>
                <p className='content-center font-mono text-2xl align-top p-10'>Aarrejahti</p>
                <div className='grid grid-cols-3 gap-2 max-w-xl w-2/3 pt-10 pb-56 object-top'>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300 '>
                        Ruutu 1
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 2
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 3
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 4
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 5
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 6
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 7
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 8
                    </button>
                    <button className='w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300'>
                        Ruutu 9
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