import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Draft from '../Draft.js'
import Card from './Card';
import AddSnaps from './AddSnaps.jsx';
import "./style/popbox.css"
import ScrollBar from './ScrollBar.jsx';
const Body = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-datesprimary">
            <div className="fixed top-20 flex h-screen  overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {Draft.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}

                </motion.div>
            </div>
            <AddSnaps/>
            <ScrollBar/>
            
            
        </section>
    );
}

export default Body