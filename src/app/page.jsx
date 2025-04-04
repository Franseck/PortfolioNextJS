import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return <div className="h-full flex lg:flex-row">
<div className="h-screen">
<Image src="/h1.jpg" alt=""  fill className="opacity-50 "/>
</div>
<div className="flex flex-col gap-8 items-center justify-center text-center">
    
          <h1 className="text-2xl md:text-4xl font-bold mt-7">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
  
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my   portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
  
          <div className="w-full flex gap-3 text-center justify-center absolute mt-72 ">
            <Link  href="/portfolio">
            <button className="p-3 rounded-lg   bg-black text-white">
              View My Work
            </button>
            </Link>
            <Link  href="/contact">
            <button className="p-3 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
};

export default Homepage;
