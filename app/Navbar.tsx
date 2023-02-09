
import Image from "next/image";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi"
export default function Navbar() {

  const buttons = ["HOW IT WORKS","APPLY","AVAILABLE PROGRAMS","ABOUT","WIT"]
  const btns = [{btn:"HOW IT WORKS",lnk:"/howitworks"},{btn:"APPLY",lnk:"/apply"},{btn:"AVAILABLE PROGRAMS",lnk:"#"},{btn:"ABOUT",lnk:"#"},{btn:"WIT",lnk:"#"}];
  return (
    <nav className=" w-full">


      <div className="flex flex-row justify-between px-10 py-1 text-[#00BF9A]">
      <a href="/"><Image src="/PIAIC_LOGO.svg" width={50} height={100} alt="logo" /></a>
      <div className="flex flex-col divide-y-4 divide-[#00BF9A] text-center">
      <h1 className="text-[#00BF9A]">پرسدنتیل انیشیٹو فور آرٹیفیشل انٹیلی جنس اینڈ کمپیوٹنگ</h1>
      <h1 className="">PRESIDENTIAL INITIATIVE FOR ARTIFICIAL INTELLIGENCE & COMPUTING</h1>

      </div>
      <Image src="/gov.svg" width={50} height={100} alt="logo" />
      </div>



      <div className="container bg-[#00BF9A] flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className=" flex-items-center ml-10">
          <div className="flex flex-row gap-2">
          <BiPhoneCall color="white" size={30}/>
          <text className="text-white font-Montserrat">+92-308-2220203</text>
          </div>
        </a>

        <div className="flex flex-row text-white gap-4 font-Montserrat font-thin">
          {btns.map(btn=>(<a href={btn.lnk} key={btn.lnk}><button>{btn.btn}</button></a>))}
        </div>
        
        <div className="flex flex-row px-10">
          <AiFillFacebook size={30} color="white"/>
          <AiFillTwitterSquare size={30} color="white"/>
          <AiFillLinkedin size={30} color="white"/>
        </div>

        
      </div>
    </nav>
  );
}
