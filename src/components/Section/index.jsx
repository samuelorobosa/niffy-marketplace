import  './index.scss';
import nftImage from "../../assets/images/image 18.png";

function Section (){

    return(
        <>
            <div className="section pb-5 text-white">
                <div className="grid grid-cols-2">
                    <div className="flex justify-center">
                        <img src={nftImage} className="max-h-96" alt=""/>
                    </div>

                    <div className="flex  pl-14 pt-16 flex-col justify-center">
                       <p className="font-semibold text-3xl">
                           <span className="block my-2">Smoky App</span>
                           <span className="block my-2">Basement Club.</span>
                       </p>

                        <p className="my-3">
                            Get the unique NFT and share its <br/> ownership with your friends.
                        </p>

                        <div className="btn-get_nfts--container">
                            <div className="btn btn-get_nfts hover:cursor-crosshair w-1/3 py-3 mt-6 text-2xl font-bold"> Get NFTs </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;