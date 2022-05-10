import './index.scss';
import star2 from '../../assets/images/Star 2.png'
import star3 from '../../assets/images/Star 3.png'
import star4 from '../../assets/images/Star 4.png'

function Footer(){

    return(
        <>
            <div className="footer mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 pt-32 pl-16">
                    <div>
                        <p className="uppercase font-semibold text-white text-2xl mb-3">Niffy's</p>
                        <p className="font-semibold text-lg mb-3">Niffy’s Marketplace 2022</p>
                        <p className="font-semibold text-lg">Terms of service</p>
                        <div className="-ml-14 hidden md:block"><img className="" src={star2} alt=""/></div>
                    </div>
                    <div>
                        <p className="uppercase font-semibold text-white text-2xl mb-3">Company</p>
                        <p className="font-semibold  text-lg mb-3">About Us</p>
                        <p className="font-semibold  text-lg mb-3">Contact Us</p>
                        <p className="font-semibold  text-lg">Visit Marketplace</p>
                    </div>
                    <div className="hidden md:block">
                        <div>
                            <img src={star3} className="star__3" alt=""/>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-end">
                        <div>
                            <img src={star4}  alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;