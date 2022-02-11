import Link from 'next/link'

function Footer() {
    return (
    <div className="font-monospace m-auto lg:w-2/4 sm:w-3/4 items-baseline hidden sm:block">
        <div className='w-full h-0.5 bg-nord3'></div>
        <div className='my-8 w-2/4 m-auto'>
            <div className='mb-4 flex justify-center space-x-4'>
                <div className='flex text-nord4'>
                    <Link href="/">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    Koti
                    </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link href="/">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    Kirjautumissivu
                    </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link href="/treasureHunt">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    Aarrejahti
                    </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link href="/notFound">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    404
                    </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link  target="_blank" rel="noreferrer" href="https://github.com/eeme1i/fish">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    Github
                    </a>
                    </Link>
                </div>
            </div>
            <div className='grid-1 flex justify-center space-x-4'>
                <div className='flex text-nord4'>
                    <Link href="/message">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    Viesti
                    </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link target="_blank" rel="noreferrer" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases">
                    <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                    MEK
                    </a>
                    </Link>
                </div>
            </div>
        </div>
            <div className='mx-8 pb-8 text-nord4'>
                <Link href="login">
                <a className=''>
                porinlukio.fi
                </a>
                </Link>
            <div className=''>
                <p>Tämä sivusto ei kerää tai tallenna minkäänlaista dataa sinusta.</p>
            </div>
        </div>
    </div>
    )
}

export default Footer