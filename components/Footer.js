import Link from 'next/link'

function Footer() {
    return (
    <div className="font-monospace w-auto m-auto lg:w-2/4 sm:w-3/4 items-baseline">
        <div className='w-full h-0.5 bg-nord3'></div>
            <div className='pt-8 px-8 pb-8 text-nord4'>
                <Link href="/">
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