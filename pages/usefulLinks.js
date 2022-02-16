import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";

export default function Home(){
    return(
        <div className='bg-nord0 min-h-screen w-full'>
            <Head>
                <title>porinlukio.fi - linkkejä</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>

            <div className='w-5/6  m-auto text-nord4 font-mono md:max-w-4xl text-sm md:text-xl'>
                <p className='w-max mx-auto text-lg md:text-2xl py-10 underline'>Mielenkiintoisia tai hyödyllisiä linkkejä</p>
                <div className='flex flex-col min-h-screen w-full m-auto pl-10 space-y-2'>
                    <div className='flex flex-row'>
                        <p>Porin lukion viralliset nettisivut</p>
                        <a className='ml-auto underline' href="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio">Linkki</a>
                    </div>
                    <div className='flex flex-row'>
                        <p>Tutkimuksia internetkäyttäytymisesta</p>
                        <a className='ml-auto underline' href="https://jyx.jyu.fi/bitstream/handle/123456789/76926/URN%3aNBN%3afi%3ajyu-202107014114.pdf?sequence=1&isAllowed=y">linkki</a>
                    </div>                    
                    <div className='flex flex-row'>
                        <p>Koulun ruokalista</p>
                        <a className='ml-auto underline' href="https://aromimenu.cgisaas.fi/SatakunnanSeutuAromieMenus/FI/Default/Pori/PoLukio/Restaurant.aspx">linkki</a>
                    </div>
                    <div className='flex flex-row'>
                        <p>Opiskelijakortti</p>
                        <a className='ml-auto underline' href="https://www.feedcowboy.com/asiakkaat/slicefi/join/?porinlukio&secure">linkki</a>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}