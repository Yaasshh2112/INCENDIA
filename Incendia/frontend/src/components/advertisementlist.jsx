import { useState, useEffect, useRef } from "react";
import { Backdrop, CircularProgress, debounce, } from "@mui/material";
import Advertisement from "./advertisements";
import dummyAdData from "./addata";
const Advertisementlist = ({ limit }) => {

    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);
    const limitIncreasedRef = useRef(false);
    const fetchRandomAds = () => {
        const shuffledAds = dummyAdData.sort(() => 0.5 - Math.random());
        const selectedAds = shuffledAds.slice(0, limit);
        setAds((prevAds) => [...prevAds, ...selectedAds]);
        if (!limitIncreasedRef.current) {
            limit = limit + 1;
            limitIncreasedRef.current = true;
        }
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchRandomAds();
    }, []);

    const hadleScroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {

            setTimeout(() => {
                fetchRandomAds();
            }, 500);
        }
    }, 200);
    useEffect(() => {
        window.addEventListener('scroll', hadleScroll);
        return () => {
            window.removeEventListener("scroll", hadleScroll);
        }
    }, []);

    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="secondary" />
            </Backdrop>
            <div className=" overflow-y-hidden">
                {
                    ads.map((aditem, index) => {
                        return <Advertisement key={index} companyname={aditem.company_name} profilepic={aditem.profile_pic}
                            productdesc={aditem.product_description} productimg={aditem.product_img} weblink={aditem.website_url} />
                    })
                }
            </div>
        </>
    );
}

export default Advertisementlist;