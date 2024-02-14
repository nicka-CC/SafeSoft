'use client'
import Image from "next/image";
import Slider from "./components/slider";
import SmartCard from "./components/smartcard";
export default function Home() {

  return (
    
    <main>
      <div className="">
        <div className="m-[50px] ml-[100px] mr-[100px]">
        <Slider/>
         </div>
        <div>
          <SmartCard/>
        </div>
      </div>
      
      
      
    </main>
  );
}
