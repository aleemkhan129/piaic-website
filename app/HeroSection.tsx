
import Image from "next/image";
import {FaRegBuilding} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephonePlus} from "react-icons/bs"

export default function HeroSection() {
  return (
    <>
    <div className="flex flex-row bg-[#e2e8f0] m-10">
      <div className=" pl-60 pt-10 w-1/2">
        <Image
          src={"/president.png"}
          alt="president"
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold font-Montserrat ml-20 mt-20">
          PRESIDENTIAL INITIATIVE
        </h1>
        <h2 className="text-3xl font-Montserrat ml-20 text-[#000000]">
          ARTIFICIAL INTELLIGENCE & COMPUTING (PIAIC)
        </h2>
        <text className="ml-20 mt-5">
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We wantto become a global hub for AI, data science, cloud native
          computing,edge computing, blockchain, augmented reality,and internet
          of things.
        </text>
        <button type="button" className="rounded text-white bg-[#00BF9A] place-self-end mr-20 mt-10 p-3 content-center text-sm">APPLY</button>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <h1 className="text-5xl font-Montserrat font-bold text-center">AVAILABLE PROGRAMS</h1>

      <div className="flex flex-row justify-center items-center mt-12 space-x-60">
        <div className="flex flex-col items-center ">
          <Image src={"/aiimage.svg"} alt="sv" width={80} height={100} className=" border rounded-full p-1"/>
          <div className="w-1/5 text-xs border text-center absolute pt-10 p-2  mt-10">
            <h3 className="font-bold">ARTIFICIAL INTELLIGENT</h3>
            <text>A one year AI Program Designed for Absolute Beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI</text>
          </div>
        </div>


        <div className="flex flex-col items-center ">
          <Image src={"/aiimage.svg"} alt="sv" width={80} height={100} className=" border rounded-full p-1"/>
          <div className="w-1/5 text-xs border text-center absolute pt-10 p-2  mt-10">
            <h3 className="font-bold">ARTIFICIAL INTELLIGENT</h3>
            <text>A one year AI Program Designed for Absolute Beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI</text>
          </div>
        </div>


        <div className="flex flex-col items-center ">
          <Image src={"/aiimage.svg"} alt="sv" width={80} height={100} className=" border rounded-full p-1"/>
          <div className="w-1/5 text-xs border text-center absolute pt-10 p-2  mt-10">
            <h3 className="font-bold">ARTIFICIAL INTELLIGENT</h3>
            <text>A one year AI Program Designed for Absolute Beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI</text>
          </div>
        </div>


        <div className="flex flex-col items-center ">
          <Image src={"/aiimage.svg"} alt="sv" width={80} height={100} className=" border rounded-full p-1"/>
          <div className="w-1/5 text-xs border text-center absolute pt-10 p-2  mt-10">
            <h3 className="font-bold">ARTIFICIAL INTELLIGENT</h3>
            <text>A one year AI Program Designed for Absolute Beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI</text>
          </div>
        </div>

      </div>
      
    </div>
    
<div className="flex flex-col bg-[#242424] relative mt-[130px]  items-center m-10 p-10">
    <h1 className="text-3xl text-white font-Montserrat font-bold">Videos</h1>
    <div className=" aspect-ratio-16/9 mt-20">
    <iframe width="922" height="480" src="https://www.youtube.com/embed/m4g0zd4E_bo" title="PIAIC offering free first quarter classes online"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
</div>


    <div className="flex flex-col items-center m-10 mt-20">
      <h1 className="text-3xl font-bold font-Montserrat text-center">GALLERY</h1>
      <div className="flex flex-row relative items-center mt-10">
        <Image src={"/arrowr.svg"} width={40} height={60} alt={"arrow right"} className="mr-10"/>
        <Image src="/launching.jpg" width={1000} height={0} alt="launching ceremoney"/>
        <Image src={"/arrowl.svg"} width={40} height={60} alt={"arrow right"} className="ml-10"/>
      </div>
    </div>

    <div className="flex flex-col items-center bg-[#e2e8f0] p-10 m-10">
      <h1 className="text-3xl font-bold font-Montserrat text-center">STRATEGIC PARTNERS.</h1>
      <div className="flex flex-row items-center mt-10">
        <Image src={"/saylani.svg"} width={250} height={0} alt="saylani"/>
        <Image src={"/panacloud.svg"} width={80} height={80} alt="saylani"/>

      </div>
    </div>

    <div className="flex flex-col bg-[#242424] mx-10">
      <h1 className="text-3xl font-Montserrat text-white p-10">NEWSLETTER SIGNUP</h1>
      <text className="text-white ml-10">* indicates required field</text>
      <form className="m-10">
        <div className="flex flex-row gap-4 pl-20">
          <input type={"text"} placeholder="FIRST NAME*" className="bg-transparent border border-[#00BF9A] p-2"/>
          <input type={"text"} placeholder="LAST NAME*" className="bg-transparent border border-[#00BF9A] p-2"/>
          <input type={"text"} placeholder="ENTER EMAIL*" className="bg-transparent border border-[#00BF9A] p-2"/>
          <button className="text-white font-Montserrat bg-[#00BF9A] px-11">SUBMIT</button>
          </div>
      </form>

      <div className="flex flex-row border border-[#00BF9A] justify-between p-5">
        <Image src={"/PIAIC_LOGO.svg"} width={70} height={100} alt="logo"/>
        <div className="flex flex-row gap-2 items-center">
          <Image src={"/facebook.svg"} width={40} height={50} alt="logo"/>
          <text className="text-white font-Montserrat">Facebook</text>
          <Image src={"/linkedin.svg"} width={40} height={100} alt="logo"/>
          <text className="text-white font-Montserrat">LinkedIn</text>
          <Image src={"/twitter.svg"} width={40} height={100} alt="logo"/>
          <text className="text-white font-Montserrat">Twitter</text>

        </div>
      </div>

      <div className="flex flex-row p-10 justify-between">
          <div className="flex flex-col text-white font-Montserrat text-sm font-thin gap-2">
            
              
            
            <text className="font-thin text-sm text-[#00BF9A]">KARACHI, SINDH</text>
            <div className="flex flex-row items-center gap-2">
            <FaRegBuilding/>

            <text>PANACLOUD, Karachi, Pakistan</text>
            </div>

            <div className="flex flex-row items-center gap-2">
            <AiOutlineMail/>
            <text>contact@panacloud.com</text>
            </div>

            <div className="flex flex-row items-center gap-2">
            <BsTelephonePlus/>
            <text>+92-308-2220203</text>
            </div>

          </div>
      </div>

    </div>
    </>
  );
}
