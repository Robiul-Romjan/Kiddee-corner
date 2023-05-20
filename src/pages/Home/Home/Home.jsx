import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Exclusive from "../Exclusive/Exclusive";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {

    useEffect(()=>{
        document.title= "KiddieCorner | Home"
    }, [])
    
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <Exclusive />
            <Review />
        </div>
    );
};

export default Home;