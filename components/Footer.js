import Link from 'next/link'

function Footer() {
    return (
    <div className="font-monospace m-auto w-3/4 md:max-w-4xl items-baseline ">
        <div className='w-full h-0.5 bg-nord3'></div>
        
        <span className='hidden'> {/* flex justify-center  */} <a>NEW DESIGN</a></span>
        <div className='hidden'> {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-x-4 */}
            <div className='flex flex-row justify-center mb-4 space-x-4 md:ml-auto '>
                <div className='flex text-nord4'>
                    <Link href="/">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Koti
                        </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link href="/login">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Kirjautumissivu
                        </a>
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-center mb-4 md:mr-auto space-x-4'>
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
                    <Link href="/message">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Viesti
                        </a>
                    </Link>
                </div>
            </div>
            {/* this column does not work right in large column sizes, don't know why it leaves strange bigger gap */}
            <div className='flex flex-row justify-center col-span-1 md:col-span-2 lg:col-span-1 mb-4  lg:mr-auto space-x-4 '>
                <div className='flex text-nord4'>
                    <Link target="_blank" rel="noreferrer" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        MEK
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
        </div>
        



        <span className='hidden'> {/* flex justify-center  */} <a>OLD DESIGN</a></span>
        <div className='my-8 w-2/4 mx-auto'>
            <div className='mb-4 flex justify-center space-x-4'>
                <div className='flex text-nord4'>
                    <Link href="/">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Koti
                        </a>
                    </Link>
                </div>
                <div className='flex text-nord4'>
                    <Link href="/login">
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
                
            </div>
            <div className='grid-1 flex justify-center space-x-4'>
                <div className='flex text-nord4'>
                    <Link href="/usefulLinks">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Linkkejä
                        </a>
                    </Link>
                </div>
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
                <div className='flex text-nord4'>
                    <Link  target="_blank" rel="noreferrer" href="https://github.com/eeme1i/fish">
                        <a className='px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3'>
                        Github
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
                <Link href='mailto:eeruoh@gmail.com'>
                <a className='hover:underline'>s-posti</a>
                </Link>
            </div>
            <div className=''>
                <p>Tämä sivusto ei kerää tai tallenna minkäänlaista dataa sinusta.</p>
            </div>
        </div>
    </div>
    )
}

export default Footer