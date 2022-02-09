import Link from "next/link"

function Footer(){
    return (
        <div className=' w-auto h-1/5 bg-blue-900 grid grid-cols-2 pb-10 pt-7 text-blue-50 text-center'>
            <div className='grid grid-rows-3'>
                <Link href="/" >
                    <a className='hover:underline hover:text-gray-400'>Valikko</a>
                </Link>
                <Link href="/login">
                    <a className='hover:underline hover:text-gray-400'>Kirjautumissivu</a>
                </Link>
                <Link href="/message">
                    <a className='hover:underline hover:text-gray-400'>Varoitus</a>
                </Link>
            </div>
            <div className='grid grid-rows-3'>
                <Link href="/" >
                    <a className='hover:underline hover:text-gray-400'>Valikko</a>
                </Link>
                <Link href="/login">
                    <a className='hover:underline hover:text-gray-400'>Kirjautumissivu</a>
                </Link>
                <Link href="/message">
                    <a className='hover:underline hover:text-gray-400'>Varoitus</a>
                </Link>
            </div>
        </div>
    )
}
export default Footer