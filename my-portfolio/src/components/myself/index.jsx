import React from "react";
import './styles.scss';

const Myself = () => {
    return (
        <section className={"container myself-section"}>
            <p className={'myself-section__paragraph'}>I was born in Rome on January 5th 1999.</p>
            <p className={'myself-section__paragraph'}>Always had a lot of passion for computer science, football and bike.</p>
            <p className={'myself-section__paragraph'}>Graduated at the age of 18 in computer science in Rome.</p>
            <p className={'myself-section__paragraph'}>Started to work for K2play srl as web developer at the age of 18.</p>
            <p className={'myself-section__paragraph'}>Currently working as web developer for Accenture Spa since 2019.</p>
        </section>
    )
}

export default React.memo(Myself);
