import logo from '../assets/images/logo.png'

export default function Footer(){
    return(

<footer class="antialiased p-4 bg-[#b3e1ff] shadow md:px-6 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="w-[150px] lg:w-[200px]" alt="The next gen" />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Prediction Model</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-black sm:text-center">© <a href="/" class="hover:underline">The Next Gen™</a>. All Rights Reserved.
    </span>
</footer>

    )
}