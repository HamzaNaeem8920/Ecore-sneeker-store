import { Link } from "react-router-dom"
import ecorelogo from "../assets/images/ecorelogo.png";
export const Footer = () => {
    return (
<footer className="bg-black text-white justify-center  " >
  <div className="container mx-auto flex flex-wrap justify justify-between">
  <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-3xl lg:text-4xl">
                        <img src={ecorelogo} alt="logo" className="w-40 h-20 object-contain"/>
                    </Link>
                </div>
        <div className="w-full md:w-auto mt-3 md:mt-0">
      <h4 className="text-lg font-bold text-3xl mb-2">Pages</h4>
      <ul className="text-gray-700">
        <li className="mb-2 hover:text-blue-500">  <Link to="/" className="  text-2xl lg:text-xl">Home </Link></li>
        <li className="mb-2 hover:text-blue-500">  <Link to="/Products" className=" text-2xl lg:text-xl">Products </Link></li>
        <li className="mb-2 hover:text-blue-500">  <Link to="/" className="  text-2xl lg:text-xl">About </Link></li>
        <li className="mb-2 hover:text-blue-500">  <Link to="/" className="  text-2xl lg:text-xl">Contact Us </Link></li>
      </ul>
    </div>
    <div className="w-full md:w-auto mt-2 md:mt-0">
      <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
      <ul className="text-gray-700">
        <li className="mb-2 hover:text-blue-500"><a href="https://facebook.com">Facebook</a></li>
        <li className="mb-2 hover:text-blue-500"><a href="https://twitter.com">Twitter</a></li>
        <li className="mb-2 hover:text-blue-500"><a href="https://instagram.com">Instagram</a></li>
      </ul>
    </div>
  </div>



            <div class="py-3 px-0 bg-white md:flex md:items-center md:justify-center">
                <span class=" bg-white text-black text-md ">© 2023 ecore app. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}