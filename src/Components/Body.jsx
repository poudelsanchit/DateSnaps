import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Draft from '../Draft.js'
import Card from './Card';
import InstaStories from './InstaStories.jsx';
import AddSnaps from './AddSnaps.jsx';
import "./style/popbox.css"
import ScrollBar from './ScrollBar.jsx';
import ImagePreview from './ImagePreview.jsx';
const Body = ({handleDisplayImage}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-datesprimary dark:bg-slate-700">
            <div className="fixed top-20 flex h-screen  overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {Draft.map((card) => {
                        return <Card card={card} key={card.id}  handleDisplayImage={handleDisplayImage}/>;
                    })}
                </motion.div>
            </div>           
            <AddSnaps/>
            <ScrollBar/>
            
            <InstaStories/>
            {/* <ImagePreview/>          */}
        </section>
    );
}

export default Body