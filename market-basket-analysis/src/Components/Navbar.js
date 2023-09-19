import { useState } from "react"
import logo from '../assets/images/logo.png'
import { useLocation } from "react-router-dom"
export default function Navbar(){
    const [open,setOpen] = useState(false)
    const location = useLocation()
    console.log(location.pathname)
    const routes = [
      {
        'route':'Home',
        'link':'/'
      },
      {
        'route':'About',
        'link':'/about/'
      },
      {
        'route':'Predictive Model',
        'link':'/predict/'
      }
    ]
    return(
        <>
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
<div>
  <div className="antialiased bg-[#b3e1ff]">
  <div className="w-full text-gray-700 fixed ease-in-out duration-300 shadow-sm bg-[#b3e1ff] dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between p-4">
        <a href="/" className="cursor-pointer"><img src={logo} className="w-[150px] lg:w-[200px]"></img></a>
        {/* <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Market Basket Analysis</a> */}
        <button  onClick={()=>{setOpen(!open)}}  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {
                !open ? 
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                :
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            }
          </svg>
        </button>
      </div>
        <nav className="hidden lg:flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            {
              routes.map((e)=>{
                return <a className={"px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline " + (location.pathname == e.link ? "bg-white":"bg-transparent")} href={e.link}>{e.route}</a>
              })
            }
            
            {/* * <div className="relative">
            <button className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>More</span>
                <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            </div>   */}
        </nav>
        {
            open ? <nav className="flex flex-row flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Home</a>
            <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About</a>
            <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Predictive Model</a>
            {/* <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact</a> */}
            {/* * <div className="relative">
            <button className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>More</span>
                <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            </div>   */}
        </nav>:null
        }
    </div>
  </div>
</div>
  </div>
        </>
    )
}