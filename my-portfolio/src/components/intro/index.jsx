import React from "react";
import Fade from "react-reveal/Fade";
import './styles.scss';

const Intro = () => {
    return (
        <section className={"container intro-section"}>
            <Fade bottom cascade opposite>
                <h1 className={'intro-section__name'}>Hello, I am Tiziano</h1>
                <h2 className={'intro-section__desc'}>and I am a web developer.</h2>
            </Fade>
        </section>
    )
}

export default React.memo(Intro);
