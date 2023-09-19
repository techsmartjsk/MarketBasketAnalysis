import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from 'axios'
import loadingGif from '../assets/images/loading.gif'
export default function Items(){
    const {item} = useParams()
    const [loading,setLoading] = useState(true)
    const { REACT_APP_API_ENDPOINT } = process.env
    const [arr,setArr] = useState([])
    useEffect(()=>{
        getRecommendedItems()
    },[])
    const getRecommendedItems = async ()=>{
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/train/${item}/`)
        setArr(response.data['items'])
        if(response.data['items'].length > 0){
            setLoading(false)
        }else{
            setLoading(true)
        }
    }
    return <>
    <Navbar/>
    <div className="ml-10 mr-10 pt-[10%] pb-[40%] bg-white">
        <h1 className="text-left pb-10 text-3xl text-[#b3e1ff]">Make Offers on : </h1>
        <div className="grid grid-cols-4 gap-4">
        {
            !loading ? arr.map((e)=>{
                return <div className="border-[1px] capitalize hover:animate-pulse rounded-md p-10 hover:bg-[#b3e1ff]">
                <h1>{e}</h1>
                </div>
            }):<img src={loadingGif}></img>
        }
        </div>
    </div>
    <Footer/>
    </>
}