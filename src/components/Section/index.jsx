import  './index.scss';
import nftImage from "../../assets/images/image 18.png";
import nftImage2 from "../../assets/images/Star 1.png";
import nftImage3 from "../../assets/images/Star 5.png";
import nftImage5 from "../../assets/images/Star 6.png";

function Section (){

    return(
        <>
            <div className="section pb-5 text-white">
                <div className="grid grid grid-rows-1 grid-cols-1 md:grid-cols-2 md:grid-rows-1">
                    <div className="flex md:justify-center justify-end relative order-2 md:order-1">
                        <img src={nftImage3} className="absolute left-24 top-5 z-10" width="300px" alt=""/>
                        <img src={nftImage} className="relative max-h-99 z-30" alt=""/>
                        <img src={nftImage5} className="nft_bottom absolute bottom-0 left-20 z-10" width="200px" alt=""/>
                    </div>
                    <div className="flex  pl-14 pt-16 flex-col order-1 md:order-2">
                        <div className="self-end">
                            <img src={nftImage2}  alt=""/>
                        </div>
                       <p className="font-semibold text-3xl">
                           <span className="block my-2">Smoky App</span>
                           <span className="block my-2">Basement Club.</span>
                       </p>

                        <p className="my-3 font-medium">
                            Get the unique NFT and share its <br/> ownership with your friends.
                        </p>

                        <div className="btn-get_nfts--container">
                            <div className="btn btn-get_nfts hover:cursor-crosshair w-2/4 py-3 mt-6 text-2xl font-bold"> Get NFTs </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;