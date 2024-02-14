import Image from 'next/image'
import './style.css'
import ss_log from '@/app/[public]/Safe-Soft-logo.svg'
import search from '@/app/[public]/Frame 40.svg'
import Link from 'next/link'
export default function Header(){
    return(
        <div className="hfc" >
            <div className='flex w-41 justify-center p-1 pb-0 text-white'>
                <div>
                    <Link href="/">
                        <Image src={ss_log} alt='logo'  className='w-34 h-10'/>
                    </Link>
                </div>
                <div className='flex justify-center mt-2 mb-2 h-3 ffon'>
                    <div className='pl-3'>
                        <Link href="/articles">Articles</Link>
                    </div>
                    <div className='pl-3 font-font1'>
                        <Link href="/password_manager">Password Manager</Link>
                    </div>
                    <div className='pl-3'>
                        <Link href="/contacs">Contacs</Link>
                    </div>
                    <div className='pl-3'>
                        <Link href="/help_us">Help Us</Link>
                        
                    </div>
                    <div className='pl-3'>
                        <button>Ua</button>
                    </div>
                    <div className='pl-3'>
                        <button>En</button>
                    </div>
                    <div className='pl-3'>
                        <button><Image src={search} alt='search' width={22} height={22}/></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}