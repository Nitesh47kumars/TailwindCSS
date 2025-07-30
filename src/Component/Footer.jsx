import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white flex justify-around py-5'>
        <div>
            <h2 className='text-xl font-bold'>Get to Know Us</h2>
            <ul className='text-sm font-semibold text-slate-400 mt-2 flex flex-col gap-1'>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Amazon</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Amazon Devices</a></li>
            </ul>
        </div>

        <div>
            <h2 className='text-xl font-bold'>Make Money with Us</h2>
            <ul className='text-sm font-semibold text-slate-400 mt-2 flex flex-col gap-1' >
                <li><a href="#">Sell on Amazon</a></li>
                <li><a href="#">Sell under Amazon Accelerator</a></li>
                <li><a href="#">Protect & Build Your Brand</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise Your Products</a></li>
            </ul>
        </div>

        <div>
            <h2 className='text-xl font-bold'>Amazon Payment Products</h2>
            <ul className='text-sm font-semibold text-slate-400 mt-2 flex flex-col gap-1' >
                <li><a href="#">Amazon Business Card</a></li>
                <li><a href="#">Shop with Points</a></li>
                <li><a href="#">Reload Your Balance</a></li>
                <li><a href="#">Amazon Currency Converter</a></li>
            </ul>
        </div>

        <div>
            <h2 className='text-xl font-bold'>Let Us Help You</h2>
            <ul className='text-sm font-semibold text-slate-400 mt-2 flex flex-col gap-1' >
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Shipping Rates & Policies</a></li>
                <li><a href="#">Returns & Replacements</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
    </footer>

  )
}

export default Footer
