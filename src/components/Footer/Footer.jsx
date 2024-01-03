import Container from "../ui/Container";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin, FaPhone, FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";


const Footer = () => {
    return (
        <>
            <div className="mt-20 gap-8 md:gap-20 bg-[url(https://i.postimg.cc/T1zqkHsS/footer-bg.jpg)] py-6 md:py-12" >
                <Container>
                    <div className="md:flex">
                        {/* footer left site */}
                        <div className="flex-1">
                            <img className="w-16" src="https://i.imgur.com/zIYYcue.png" alt="" />
                            <h2 className="font-rancho text-4xl mb-3">Espresso Emporium</h2>
                            <p className="font-raleway md:w-2/3">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="flex gap-4 my-4">
                                <p><FaFacebookSquare className="text-3xl text-secondary" /></p>
                                <p><FaSquareXTwitter className="text-3xl text-secondary" /></p>
                                <p><FaInstagram className="text-3xl text-secondary" /></p>
                                <p><FaLinkedin className="text-3xl text-secondary" /></p>
                            </div>
                            {/* contact info */}
                            <div>
                                <h2 className="font-rancho text-4xl mb-3">Get in Touch</h2>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-2">
                                        <FaPhone /> <span>+88 01533 333 333</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <CgMail /><span>info@gmail.com</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaLocationDot />72, Wall street, King Road, Dhaka<span></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* footer right site */}
                        <div className="flex-1 md:ml-48 mt-8 md:mt-0 bg-[url()]">
                            <h2 className="font-rancho text-4xl mb-3">Connect with Us</h2>
                            <form>
                                <input type="text" placeholder="Name" className="input input-bordered w-full" />
                                <br />
                                <input type="text" placeholder="Email" className="input input-bordered w-full my-5" />
                                <br />
                                <textarea className="textarea textarea-lg textarea-bordered w-full" placeholder="Message"></textarea>
                                <input type="submit" value="Send Message" className="font-rancho text-xl border-2 border-secondary py-1 px-4 mt-5 rounded-3xl cursor-pointer" />
                            </form>
                        </div>
                    </div>

                </Container>
            </div>
            {/* down footer */}
            <div className="bg-[url(https://i.postimg.cc/C5v9vDv1/down-footer-bg.jpg)]">
                <p className="text-xl font-rancho text-white text-center py-2">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;