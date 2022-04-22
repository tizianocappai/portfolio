import React from 'react'
import loadable from '@loadable/component'
import './styles.scss';
import Intro from "../../components/@home/intro";

const Myself = loadable(() => import('../../components/@home/myself'))
const MySkill = loadable(() => import('../../components/@home/myskill'))

function HomePage() {

    return (
        <main className={"home-page"}>
            <Intro />
            <Myself />
            <MySkill />
        </main>
    )
}

export default HomePage