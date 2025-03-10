"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { RiScrollToBottomLine } from "react-icons/ri";


const items = [
  {
    id: 1,
    color: "from-black/25 to-black",
    title: "Crypto Coin Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/coin2.png",
    link: "https://seckin-cryptoapp.vercel.app/",
  },
  {
    id: 2,
    color: "from-black/25 to-black",
    title: "Restaurant Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/rest2.png",
    link: "https://seckin-restaurant.vercel.app/",
  },
  {
    id: 3,
    color: "from-black/25 to-black",
    title: "Recipe Founder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/gastro.jpg",
    link: "https://seckin-gastroapp.vercel.app/",
  },
  {
    id: 4,
    color: "from-black/25 to-black",
    title: "Travel Agency App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/travel.jpg",
    link: "https://seckin-travel-agency.vercel.app/",
  },
  {
    id: 5,
    color: "from-black/25 to-black",
    title: "Portfolio Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/port2.jpg",
    link: "https://seckin-portfoliobook.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["17%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-7xl text-center gap-12 ">
         <h1>My Works</h1> 
         <div className="animate-bounce" > <RiScrollToBottomLine /> </div> 
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-black/25">
          <motion.div style={{ x }} className="flex">
            <div className="h-auto w-auto flex items-center justify-center bg-gradient-to-r from-black/25 to-black" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl mt-7">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-r from-black to-black/25">
       <Image
               src="/Logo.png"
               width={100}
               height={150}
               className="rounded-3xl"
             />
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-End Developer & UI/UX Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
                 <Image
               src="/Logo.png"
               width={100}
               height={150}
               className="rounded-full"
             />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;