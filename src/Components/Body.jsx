import React, { useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Draft from '../Draft.js'
import Card from './Card';
import InstaStories from './InstaStories.jsx';
import AddSnaps from './AddSnaps.jsx';
import "./style/popbox.css"
import ScrollBar from './ScrollBar.jsx';
import ImagePreview from './ImagePreview.jsx';
import Contributors from './Contributers.jsx';
const Body = ({handleDisplayImage,imagePreview}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

    //controlling the imagePreview animation
    const [isAnimationActive,setIsAnimationActive] = useState(false);
    const handleAnimation=(isActive)=>{
        setIsAnimationActive(isActive)
    }
   
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-datesprimary dark:bg-datesDarkPrimary">
            <div className="fixed top-20 flex h-screen  overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {Draft.map((card) => {
                        return <Card card={card} key={card.id} handleAnimation={handleAnimation}  handleDisplayImage={handleDisplayImage}/>;
                    })}
                    <Contributors/>
                </motion.div>
                
            </div>    
                   
            <AddSnaps/>
            <ScrollBar/>
            
            <InstaStories imagePreview={imagePreview} isAnimationActive={isAnimationActive}/>
            {/* <ImagePreview imagePreview={imagePreview} isAnimationActive={isAnimationActive} />          */}

        </section>
    );
}

export default Body