import React from "react";
import './styles.scss';

const Intro = () => {
    return (
        <section className={"container scroll-snap-container intro-section"}>
                <h1 className={'intro-section__name'}>Hello, I am Tiziano</h1>
                <h2 className={'intro-section__desc'}>and I am a web developer.</h2>
        </section>
    )
}

export default React.memo(Intro);
