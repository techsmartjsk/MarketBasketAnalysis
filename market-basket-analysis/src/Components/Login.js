import Cookies from 'universal-cookie'
export default function Login(){
    const cookies = new Cookies();
    return <div className='min-h-screen bg-[#b3e1ff] w-full flex items-center justify-center m-auto'>
        <div className='bg-white w-[35%] shadow-md rounded-md border-[0.2px] p-10'>
            <h1 className='text-center w-full font-bold text-3xl mb-10'>Login</h1>
            <label>Email</label>
            <input placeholder='Email' className='border-[0.2px] mb-5 mt-5 p-4 rounded-md w-full'/>
            <label>Password</label>
            <input type="password" placeholder='Password' className='border-[0.2px] mt-5 p-4 rounded-md w-full'/>
            <button className='bg-[#b3e1ff] text-white p-4 w-full rounded-md mt-5'>Login</button>
        </div>
    </div>
}