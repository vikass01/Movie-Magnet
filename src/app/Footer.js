import React from 'react'
import "../css/HomePage/HomePage.css"

function Footer() {
  return (
    <div className='footerHead' >
        <div style={{width:"100%"}}>
        <ul className='footerMenuContainer'>
            <li className='footerMenu'>Terms Of Use</li>
            <li className='footerMenu'>Privacy-Policy</li>
            <li className='footerMenu'>About</li>
            <li className='footerMenu'>Blog</li>
            <li className='footerMenu'>FAQ</li>
        </ul>
        <div className='footerParagraphHead'>
        <p className='footerParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='footerSocielIcons'>
        <img className='socielIcons' src={"https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-59h6qm38.png"}/>
        <img className='socielIcons' src={"https://static.vecteezy.com/system/resources/previews/016/716/469/original/instagram-icon-free-png.png"}/>
        <img className='socielIcons' src={"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"}/>
        <img className='socielIcons' src={"https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-a79l1pyz.png"}/>
        </div>
        </div>
    </div>
  )
}

export default Footer
