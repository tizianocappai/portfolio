import './styles.scss';
import React from 'react'
import loadable from '@loadable/component'
import Intro from "../../components/@home/intro";

const Myself = loadable(() => import('../../components/@home/myself'))
const MySkill = loadable(() => import('../../components/@home/myskill'))
const MyContacts = loadable(() => import('../../components/@home/mycontacts'))

function HomePage() {

    const now = new Date();
    const hours = now.getUTCHours();
    const isDarkMode = Boolean(hours > 17 || hours < 6);

    return (
        <main className={`home-page ${isDarkMode ? 'dark' : ''}`}>
            <Intro />
            <Myself />
            <MySkill />
            <MyContacts />
        </main>
    )
}

export default HomePage