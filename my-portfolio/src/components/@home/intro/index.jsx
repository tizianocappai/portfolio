import React from "react";
import {motion} from "framer-motion";
import './styles.scss';

const GREETING_HOURS = {
    GOOD_MORNING: "Good Morning",
    GOOD_AFTERNOON: "Good Afternoon",
    GOOD_EVENING: "Good Evening",
    DEFAULT: "Hello"
}

const Intro = () => {
    const now = new Date();
    const hours = now.getHours();

    const getGreeting = () => {
        if (hours > 5 && hours <= 12) return GREETING_HOURS.GOOD_MORNING;
        if (hours > 12 && hours <= 18) return GREETING_HOURS.GOOD_AFTERNOON;
        if (hours > 18 && hours <= 24) return GREETING_HOURS.GOOD_EVENING;
        return GREETING_HOURS.DEFAULT
    }

    const variantsH1 = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: -50},
    }

    const variantsH2 = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: -50},
    }

    return (
        <section className={"container scroll-snap-container intro-section"}>
            <motion.h1 initial={"hidden"}
                       whileInView={"visible"}
                       variants={variantsH1}
                       transition={{duration: 0.5}}
                       className={'intro-section__name'}>
                {getGreeting()}, I am Tiziano
            </motion.h1>
            <motion.h2 initial={"hidden"}
                       whileInView={"visible"}
                       variants={variantsH2}
                       transition={{duration: 0.5, delay: 0.7}}
                       className={'intro-section__desc'}>and I am a web developer.</motion.h2>
        </section>
    )
}

export default React.memo(Intro);
