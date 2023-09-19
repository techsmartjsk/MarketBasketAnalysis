import process from "../assets/images/process.png"
export default function Process(){
    return(
        <div className="p-2 lg:p-10 text-center">
            <h1 className="text-center text-3xl font-bold">Process Flow</h1>
            <img src={process} className="lg:w-[800px] m-auto border-[1px] mt-10 border-black rounded-md"></img>
        </div>
    )
}