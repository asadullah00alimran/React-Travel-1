import './Footer.css'
import footerVideo from './../../../public/images/footer-video.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";






const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="videoDiv">
                    <video src={footerVideo} loop autoPlay muted typeof='video/mp4'></video>
                </div>

                <div className="secContent container">
                    <div className="contactDiv flex">
                        <div className="text">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel with us</h2>
                        </div>
                        <div className="inputDiv flex">
                            <input type="text" placeholder='Enter Email Address' />
                            <button className='btn flex' type='subnit'>
                                SEND <FiSend  className='icon'/>
                            </button>
                        </div>
                    </div>

                    <div className="footerCard flex">
                        <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="#" className='logo flex'>
                                    <MdOutlineTravelExplore className="icon"/> Ttavel.
                                </a>
                            </div>
                            <div className="footerParagraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <div className="footerSocial">
                                <AiOutlineTwitter className='icon' />
                                <AiOutlineYoutube className='icon' />
                                <AiOutlineInstagram className='icon' />
                                <FaTripadvisor className='icon' />
                            </div>
                        </div>

                        <div className="footerLinks grid">
                            <div className="linkGroup">
                                <span className="groupTitle">OUR AGENCY</span>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Services
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Agency
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Tourism
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Insurance
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Payment
                                </li>
                            </div>
                            <div className="linkGroup">
                                <span className="groupTitle">OUR AGENCY</span>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Services
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Agency
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Tourism
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Insurance
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Payment
                                </li>
                            </div>
                            <div className="linkGroup">
                                <span className="groupTitle">OUR AGENCY</span>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Services
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Agency
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Tourism
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Insurance
                                </li>
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' /> Payment
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;