import React, { useEffect } from 'react'
import Banner from './Banner'
import "../home/home.css";
import Slide from './Slide';
import { Divider } from '@mui/material';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";


const Maincomp = () => {

    const { products} = useSelector(state => state.getproductsdata);
    // remove empty array
    //console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deal Of The Day" products={products} />
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://static.toiimg.com/thumb/84469514.cms?imgsize=248874&width=800&height=800" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>

                <Slide title="Today's Deal" products={products} />

                <div className="center_img">
                    <img src="https://novasolingredients.com/wp-content/uploads/2022/03/Polyols-for-Traditional-sweets-Banner.webp" alt="" />
                </div>

                <Slide title="Best Seller" products={products} />
                <Slide title="Upto 80% off" products={products} />
            </div>

            <Divider />

        </>
    )
}

export default Maincomp;

{/* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */}
