import Image from "next/image";
import src from "@/app/[public]/Academy-How-to-choose-the-best-password-manager-Thumb 1.png"
export default function SmartCard2(){
    return(
        <div className="rounded-3xl bg-opacity-[27%]">
            <Image style={{borderRadius: '20px', opacity: '27%'}} src={src} alt="src" width={416} height={416}></Image>
        </div>
    )
}