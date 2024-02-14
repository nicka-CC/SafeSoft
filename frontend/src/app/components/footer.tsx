import Image from "next/image";
import ssl from '@/app/[public]/SafeSoft-logo2.svg'
import './style.css'
import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="text-black fcb mt-32  pb-10 pt-10 flex justify-center  ">
                <div className="fwid">
                <div className="flex">
                    <div className="mr-16">
                        <Link href="/">
                            <Image src={ssl} alt='SafeSoftware' width={311} height={71}/>
                        </Link>
                    </div>
                    <div className="flex-col  flex ffon mr-40">
                        <Link href="/articles"><div className="mb-0.5">Articles</div></Link>
                        <div className="mb-0.5"><Link href="/password_manager">Password Manager</Link></div>
                        <div className="mb-0.5"><Link href="/contacs">Contacs</Link></div>
                        <div className="mb-0.5"><Link href="/help_us">Help Us</Link></div>
                        
                    </div>
                    <div className="flex-col flex-wrap flex ffon mr-36">
                        <button className="mb-0.5">En</button>
                        <button>Ua</button>
                    </div>
                    <div className="ffon ">
                        <div className="mb-0.5">Location</div>
                        <div className="w-21 mb-0.5">At the moment we do not have our own</div>
                        <div>premises and work only remotely.</div>
                    </div>
                </div>
                <div className="flex mt-11">
                    <div>
                        <div><p className="w-5/12 h-auto flex hsc">We do not take responsibility for the information that is posted on our website. In addition to this, our site does not collect nicknames of your data.</p></div>
                        <div className="hsc">Personal data processing policity.</div>
                    </div>
                    <div className="ffon -ml-35">Develope by SafeSoft</div>
                </div>
                </div>
                
            </div>
        </div>
    )
}