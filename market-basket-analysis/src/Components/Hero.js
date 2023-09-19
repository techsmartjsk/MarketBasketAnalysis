import hero from '../assets/images/hero.jpg'
export default function Hero(){
    return(
        <>
        <div className="flex flex-row bg-[#b3e1ff] gap-2 pt-[20%] lg:pt-[0%]">
            <div className='basis-1/2'>
                <img  src={hero}></img>
            </div>
            <div className='basis-1/2 mt-[20%]'>
                <h1 className='shadow-text text-black text-xl lg:text-7xl'>
                    Market Basket <br/> Analysis
                </h1>
                <p className='hidden lg:block mt-10 shadow-text text-xl w-[500px]'>"Uncovering the secret behind why breads are always conveniently placed beside butter in groceries"</p>
            </div>
        </div>
        </>
    )
}