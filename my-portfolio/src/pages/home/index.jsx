import React from 'react'
import Intro from "../../components/intro";
import loadable from '@loadable/component'
import './styles.scss';

const Myself = loadable(() => import('../../components/myself'))

function HomePage() {

    return (
        <main className={"home-page"}>
            <Intro />
            <Myself />
        </main>
    )
}

export default HomePage