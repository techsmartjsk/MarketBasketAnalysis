import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import about from '../assets/images/about.jpeg'
export default function About(){
    return(
        <>
            <Navbar/>
            <div className="ml-10 mr-10 pt-[10%] pb-10 bg-white">
            <h1 className="text-left text-3xl text-[#b3e1ff]">About</h1>
                <div className="flex flex-col lg:flex-row gap-10">
                    <p className="mt-10 lg:basis-1/2 text-justify">
                    Market basket analysis is a data mining technique used by retailers to increase sales by better understanding customer purchasing patterns. It involves analyzing large data sets, such as purchase history, to reveal product groupings, as well as products that are likely to be purchased together<br/><br/>
                    Data scientists are able to carry out Market Basket Analysis by implementing Association Rule Mining. Association Rule Mining is a rule-based machine learning method that helps to uncover meaningful correlations between different products according to their co-occurrence in a data set.<br/><br/>
                    The Apriori Algorithm is one of the most popular algorithms used in association rule learning over relational databases. It identifies the items in a data set and further extends them to larger and larger item sets.
                    </p>
                    <img className='hidden border-[1px] border-black rounded-md lg:block basis-1/2 w-[250px]' src={about}></img>
                </div>
            </div>
            <Footer/>
        </>
    )
}