import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Draft from '../Draft.js'
import Card from './Card';
import Button from './AddDialog.jsx'
import TestAdd from './TestAdd.jsx';
import "./style/popbox.css"
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
            <TestAdd/>
            <Button/>
          
        </section>
    );
}

const cards = [
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Oct 1 2019'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'May 22 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jul 1 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jul 9 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Nov 28 2020'
    },
     {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jan 12 2021'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Apr 16 2021'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jun 17 2021'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Oct 1 2019'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'May 22 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jul 1 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jul 9 2020'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Nov 28 2020'
    },
     {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jan 12 2021'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Apr 16 2021'
    },
    {
        url: "/src/assets/img1.jpg",
        id: 1,
        date: 'Jun 17 2021'
    },
];
export default Body