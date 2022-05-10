import './index.scss';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import nftImage from "../../assets/images/image 16.png";
import ellipse from "../../assets/images/Ellipse 17.png";
import line from "../../assets/images/Line 3.png";
import {gsap} from "gsap";

function Hero() {
    const buttonRef = useRef();
    const[showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    useLayoutEffect(()=>{
        gsap.to(buttonRef.current,
            {
                rotation: "360"
            })
    },[])
     return (
         <div className="hero pb-5 text-white">
             <nav className="py-3.5 sm:px-32">
                 <div className="container flex flex-wrap justify-between items-center mx-auto">
                     <span className="flex items-center">
                        <span
                            className="self-center uppercase font-bold whitespace-nowrap pl-3">
                            Niffy's
                        </span>
                     </span>
                     <button className={`${showDropdown ? "hamburger hamburger--expanded" : "hamburger"} flex flex-col items-center mr-3 ml-3 md:hidden focus:outline-none`}
                             aria-expanded="false"
                             onClick={toggleDropdown}>
                         <div className="hamburger__bar"/>
                         <div className="hamburger__bar"/>
                     </button>

                     <div className={`${showDropdown ? '': 'hidden' } w-full h-screen md:h-full md:block md:w-auto`}>
                         <ul className="flex flex-col content-between mt-4 items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                             <li>
                                 <span>
                                     About
                                 </span>
                             </li>

                             <li>
                                 <span>
                                     Contact Us
                                 </span>
                             </li>

                             <li>
                                 <span>
                                     Visit Market Place
                                 </span>
                             </li>
                         </ul>
                     </div>
                 </div>
             </nav>
             <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-rows-1">
                 <div className="flex justify-start pl-14 pt-16 flex-col">
                     <div ref={buttonRef} className="btn-send_nfts--container">
                         <div className="rope_set__init relative w-2/3">
                             <span className="absolute text-center dot left-8">
                                <img src={line} className="line mx-auto" alt=""/>
                                <img src={ellipse} className="ellipse" alt=""/>
                             </span>
                             <span className="absolute text-center dot right-8">
                                <img src={line} className="line mx-auto" alt=""/>
                                <img src={ellipse} className="ellipse" alt=""/>
                             </span>
                         </div>
                         <div className="btn btn-send_nfts hover:cursor-crosshair w-2/3 py-5 my-2 text-2xl font-bold"> Send NFTs </div>
                     </div>
                     <div className="relative">
                         <div className="rope_set relative w-2/3">
                             <span className="absolute text-center dot left-3">
                                <img src={line} className="line mx-auto" alt=""/>
                                <img src={ellipse} className="ellipse" alt=""/>
                             </span>
                             <span className="absolute text-center dot right-3">
                                <img src={line} className="line mx-auto" alt=""/>
                                <img src={ellipse} className="ellipse" alt=""/>
                             </span>
                         </div>
                         <div  className="btn btn-send_smiles hover:cursor-crosshair w-2/3 py-5 my-2 text-2xl font-bold"> Send Smiles</div>
                     </div>
                     <p className="mt-4 font-medium">
                         Buy NFT art, share and transfer ownership rights and join a community of NFT enthusiasts all for FREE.
                     </p>
                     <div className="btn hover:cursor-crosshair btn-start-now w-2/4 py-3 mt-6 text-2xl font-bold"> Start Now</div>
                 </div>
                 <div className="flex md:justify-center justify-end">
                     <img src={nftImage} className="max-h-99" alt=""/>
                 </div>
             </div>
         </div>
     )
 }
 export default Hero;