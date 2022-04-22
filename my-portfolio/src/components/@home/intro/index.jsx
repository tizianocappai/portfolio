import React from "react";
import './styles.scss';

const GREETING_HOURS = {
    GOOD_MORNING: "Good Morning",
    GOOD_AFTERNOON: "Good Afternoon",
    GOOD_EVENING: "Good Evening",
    DEFAULT: "Hello"
}

const Intro = () => {
    const now = new Date();
    const hours = now.getUTCHours();

    const getGreeting = () => {
        if (hours > 5 && hours <= 12) return GREETING_HOURS.GOOD_MORNING;
        if (hours > 12 && hours <= 18) return GREETING_HOURS.GOOD_AFTERNOON;
        if (hours > 18 && hours <= 24) return GREETING_HOURS.GOOD_EVENING;
        return GREETING_HOURS.DEFAULT
    }


    return (
        <section className={"container scroll-snap-container intro-section"}>
                <h1 className={'intro-section__name'}>{getGreeting()}, I am Tiziano</h1>
                <h2 className={'intro-section__desc'}>and I am a web developer.</h2>
        </section>
    )
}

export default React.memo(Intro);
