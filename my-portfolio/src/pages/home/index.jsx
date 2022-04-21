import React from 'react'
import Intro from "../../components/intro";
import Myself from "../../components/myself";

function HomePage() {

    return (
        <main className={"main-section"}>
            <Intro />
            <Myself />
        </main>
    )
}

export default HomePage