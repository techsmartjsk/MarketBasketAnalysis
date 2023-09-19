import { useEffect, useState } from "react"
import axios from 'axios'
import loadingGif from '../assets/images/loading.gif'
export default function PredictModel(){
    const { REACT_APP_API_ENDPOINT } = process.env;
    const [arr,setArr] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        getItems()
    },[])
    const getItems = async ()=>{
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}items/`)
        setArr(response.data['items'])
        if(response.data['items'].length > 0){
            setLoading(false)
        }else{
            setLoading(true)
        }
    }
    return <div className="ml-10 mr-10 pt-[10%] pb-10 bg-white">
        <h1 className="text-left pb-10 text-3xl text-[#b3e1ff]">Predictive Model</h1>
        <div className="grid grid-cols-4 gap-4 text-center w-full">
            {
               !loading ?  arr.map((e)=>{
                    return <a href={`/items/${e}`}><div className="shadow-md border-[0.2px] hover:animate-bounce capitalize rounded-md p-10 hover:bg-[#b3e1ff] cursor-pointer">
                        <h1>{e}</h1>
                        </div></a>
                }):<img src={loadingGif}></img>
            }
        </div>
    </div>
}