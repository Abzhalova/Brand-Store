import React , {FC} from "react";
import facebook from "../../assets/facebook 1.svg";
import twitter from "../../assets/twitter 1.svg";
import instagram from "../../assets/instagram 1.svg";
import tiktok from "../../assets/tiktok 1.svg";
import snapchat from "../../assets/snapchat 1.svg";
import android from "../../assets/android-logo 1.svg";
import apple from "../../assets/apple-black-logo 1.svg";
import { Link } from "react-router-dom";

import MasterCard from "../../assets/MasterCard.svg";
import PayPal from "../../assets/PayPal.svg";
import eBay from "../../assets/eBay.svg";
import CooglePay from "../../assets/Google Pay.svg";
import monobank from "../../assets/monobank.svg";
import WesternUnion from "../../assets/Western Union.svg";
import Payoneer from "../../assets/Payoneer.svg";
import './Footer.css'
import ApplePay from "../../assets/ApplePay.svg";
import AmericanExpress from "../../assets/American Express.svg";
import Amazon from "../../assets/Amazon.svg";
import AliPay from "../../assets/AliPay.svg";
import BitPay from "../../assets/BitPay.svg";
import Bitcoin from "../../assets/Bitcoin.svg";
import Discover from '../../assets/Discover.svg'


const Footer: React.FC  = () => {
  return (
    <footer>
      <div className="container">
        <div className="card " style={{marginBottom:'50px'}}>
          <div className="card about-block" >
            <div style={{  width: '150px', height: '200px'}}>
              <h3 className="h3-footer" >COMPANY INFO</h3>
              <div>
                {" "}
                <p className="p-footer"  style={{color: '#9CA3AF'}} >About Laura’s Closet </p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Social Responsibility</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}}  >Affiliate</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Fashion Blogger</p>
              </div>
            </div>
            <div style={{ width: '150px', height: '200px'}}>
              <h3 className="h3-footer" style={{width:'200px'}}>HElP & SUPPORT</h3>
              <div className="p-footer">
                {" "}
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Shipping Info</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Returns</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >How to Order</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >How to Track</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Size Chart</p>
              </div>
            </div>
            <div style={{ width: '150px', height: '200px'}}>
              <h3 className="h3-footer" style={{width:'200px'}}>CUSTOMER CARE</h3>
              <div className="p-footer">
                {" "}
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Contact Us</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Payment</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Bonus Point</p>
                <p className="p-footer"  style={{color: '#9CA3AF'}} >Notices</p>
              </div>
            </div>
          </div>
          <div className="logo-block">
            <div className="card">
              <div style={{width:'200px',marginBottom: ' 40px', }}>
                <h3 className="h3-footer" style={{marginBottom: ' 10px'}}>SOCIALS</h3>
                <div style={{width:'180px',display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <img src={facebook} alt="error" />
                  <img src={twitter} alt="error" />
                  <img src={instagram} alt="error" />
                  <img src={tiktok} alt="error" />
                  <img src={snapchat} alt="error" />
                </div>
              </div>
              <div style={{width:'80px',margin: '0 30px 40px 50px'}}>
                <h3 className="h3-footer" style={{marginBottom: ' 10px'}}>PLATFORMS</h3>
                <div style={{width:'80px',display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
                  <img src={android} alt="error" />
                  <img src={apple} alt="error" />
                </div>
              </div>
            </div>
            <div >
              <div>
                <h3 className="h3-footer">SIGN UP FOR LAURA’S CLOSET  STYLE NEWS</h3>
                <div className="card" style={{margin:'10px 0 20px 0'}}>
                <input type="text" placeholder="Your email" style={{width: '450px', height: '40px', padding:'0 15px 0 '}}/>
                <button style={{width: '130px', height: '40px', backgroundColor: '#1F2937', letterSpacing: '2px', color: 'white', border:'#9CA3AF'}}>SUBCRIBE</button>
                </div>
               
              </div>
              <p className="p-footer"  style={{color: '#9CA3AF', marginTop: '30px'}} >
                By clicking the SUBSCRIBE button, you are agreeing to our{" "}
                <Link to="#">Privacy & Cookie Policy</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{width:'500px' }}>
            <p className="p-footer"  style={{width:'500px', marginBottom: '20px',color: '#9CA3AF'}}>©2010-2022 Laura’s Closet All Rights Reserved</p>
            <div>
              <div className="p-footer" style={{width:'500px'}}>
                <Link to="#" style={{marginRight:'10px',color: '#9CA3AF'}}>Privacy Center</Link>
                <Link to="#" style={{marginRight:'10px',color: '#9CA3AF'}}>Privacy & Cookie Policy</Link>
                <Link to="#" style={{color: '#9CA3AF'}} >Manage Cookies</Link>
              </div>
              <div className="p-footer">
                <Link to="#" style={{marginRight:'10px',color: '#9CA3AF'}}>Terms & Conditions</Link>
                <Link to="#" style={{marginRight:'10px',color: '#9CA3AF'}}>Copyright Notice</Link>
                <Link to="#" style={{color: '#9CA3AF'}} >Imprint</Link>
              </div>
            </div>
          </div>
          <div  style={{width:'600px' }}>
            <h3 className="h3-footer" style={{ marginBottom: '20px'}}>WE ACCEPT</h3>
            <div style={{width: '400px'}}>
              <div  style={{width: '320px',display: 'flex',justifyContent: 'space-between'}}>
                <Link to="#">
                  <img src={MasterCard} alt="error" />
                </Link>
                <Link to="#">
                  <img src={PayPal} alt="error" />
                </Link>
                <Link to="#">
                  <img src={eBay} alt="error" />
                </Link>
                <Link to="#">
                  <img src={CooglePay} alt="error" />
                </Link>
                <Link to="#">
                  <img src={monobank} alt="error" />
                </Link>
                <Link to="#">
                  <img src={WesternUnion} alt="error" />
                </Link>
                <Link to="#">
                  <img src={Payoneer} alt="error" />
                </Link>
                <Link to="#">
                  <img src={ApplePay} alt="error" />
                </Link>
              </div>
              <div style={{width: '240px',display: 'flex',justifyContent: 'space-between' }}>
                <Link to='#'><img src={AmericanExpress} alt="error" /></Link>
                <Link to='#'><img src={Amazon} alt="error" /></Link>
                <Link to='#'><img src={AliPay} alt="error" /></Link>
                <Link to='#'><img src={BitPay} alt="error" /></Link>
                <Link to='#'><img src={Bitcoin} alt="error" /></Link>
                <Link to='#'><img src={Discover} alt="error" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
