import React from "react";

function Footer(){
    return(
        <div className="flex column">
            <div className='footer-logo'><span>.paws</span>itive</div>
            <div className='footer flex center'>
                <div>
                    <div className='footer-title'>Social media</div>
                    <p>puppy.yoga</p>
                    <p>puppy.yoga.cracow</p>
                </div>
                <div>
                    <div className='footer-title'>Location</div>
                    <p>ul. Bulwary 15/16</p>
                    <p>12-356 Cracow</p>
                </div>
                <div>
                    <div className='footer-title'>Contact us</div>
                    <p>123-456-789</p>
                    <p>puppy.yoga@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;