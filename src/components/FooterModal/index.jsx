import './index.scss';


function FooterModal(){
    return(
        <>
            <div className="text-center md:rounded-3xl my-16 text-white relative -mb-24 footer_modal md:w-2/3 m-auto px-8 py-12">
                <h2 className="font-semibold text-3xl mb-5">Buy,Send and Transfer NFTs,just one click away.</h2>
                <p className="w-3/4 m-auto font-medium"> Buy NFT art, share and transfer ownership rights and join a community of NFT enthusiasts all for FREE using NIFF’s NFT marketplace. </p>
                <div className="btn btn-start-now hover:cursor-crosshair md:w-1/3 sm:w-2/3 w-1/2 mx-auto mt-10 py-5 my-2 text-2xl font-bold"> Start Now </div>
            </div>
        </>
    )
}
export default FooterModal;