import React from 'react';
import {motion} from 'framer-motion';
import './styles.scss';

import html from '../../../assets/images/myskill/html.svg';
import css3 from '../../../assets/images/myskill/css3.svg';
import javascript from '../../../assets/images/myskill/javascript.svg';
import typescript from '../../../assets/images/myskill/typescript.svg';
import react from '../../../assets/images/myskill/react.svg';
import angular from '../../../assets/images/myskill/angular.svg';
import git from '../../../assets/images/myskill/git.svg';

const skillsArray = [
    {
        name: 'HTML5',
        src: html,
        alt: 'html5 icon',
    },
    {
        name: 'CSS3',
        src: css3,
        alt: 'CSS icon',
    },
    {
        name: 'Javascript',
        src: javascript,
        alt: 'Javascript icon',
    },
    {
        name: 'Typescript',
        src: typescript,
        alt: 'Typescript icon',
    },
    {
        name: 'React',
        src: react,
        alt: 'React icon',
    },
    {
        name: 'Angular',
        src: angular,
        alt: 'Angular icon',
    },
    {
        name: 'Git',
        src: git,
        alt: 'Git icon',
    },
];

const MySkill = () => {
    const variantsTitle = {
        visible: {
            opacity: 1, y: 0, transition: {
                type: 'spring',
                duration: 0.5,
            },
        },
        hidden: {opacity: 0, y: -50},
    };

    const variantsSkill = {
        visible: i => ({
            opacity: 1,
            transition: {
                type: 'spring',
                delay: i * 0.3,
                duration: 0.5,
            },
        }),
        hidden: {opacity: 0},
        onHover: {
            x: [0, -20, 0, 20, 0], transition: {
                duration: 0.5,
                bounce: 0.3
            }
        },
    };

    return (
        <section className={'container scroll-snap-container my-skill-section'}>
            <motion.h3 initial={'hidden'}
                       whileInView={'visible'}
                       variants={variantsTitle}
                       className={'my-skill-section__title'}>
                My Skill
            </motion.h3>
            <ul className={'my-skill-section__list'}>
                {skillsArray.map((skill) => (
                    <motion.li key={skill.name}
                               initial={'hidden'}
                               whileInView={'visible'}
                               whileHover={'onHover'}
                               variants={variantsSkill}
                               className={'my-skill-section__list-item'}
                    >
                        {skill.name}
                        <img width={'20'}
                             height={'20'}
                             loading="lazy"
                             className={'my-skill-section__list-item-image'}
                             src={skill.src} alt={skill.alt}/></motion.li>
                ))}
            </ul>
        </section>
    );
};

export default React.memo(MySkill);
