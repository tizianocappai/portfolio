import React from 'react';
import {motion} from 'framer-motion';
import './styles.scss';

import github from '../../../assets/images/mycontacts/github-icon.svg';
import instagram from '../../../assets/images/mycontacts/instagram.svg';
import linkedin from '../../../assets/images/mycontacts/linkedin.svg';
import mail from '../../../assets/images/mycontacts/mail-ios.svg';

const contactsArray = [
    {
        href: 'mailto:tiziano.cappai1999@gmail.com',
        src: mail,
        alt: 'mail icon',
    },
    {
        href: 'https://www.linkedin.com/in/tiziano-cappai-1b5271153/',
        src: linkedin,
        alt: 'linkedin icon',
    },
    {
        href: 'https://github.com/tizianocappai',
        src: github,
        alt: 'github icon',
        haveBackground: true
    },
    {
        href: 'https://www.instagram.com/tizianocappai_/',
        src: instagram,
        alt: 'instagram icon',
    },
];

const MyContacts = () => {
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
        visible: {
            opacity: 1, y: 0, transition: {
                type: 'spring',
                duration: 0.5,
            },
        },
        hidden: {opacity: 0},
        onHover: {scale: 1.3, transition: {
                type: 'spring',
                duration: 0.3,
            },
        },
    };

    return (
        <section className={'container scroll-snap-container my-contacts-section'}>
            <motion.h3 initial={'hidden'}
                       whileInView={'visible'}
                       variants={variantsTitle}
                       className={'my-contacts-section__title'}>
                My Contacts
            </motion.h3>
            <ul className={'my-contacts-section__list'}>
                {contactsArray.map((contact, index) => (
                    <motion.li key={index}
                               initial={'hidden'}
                               whileInView={'visible'}
                               whileHover={'onHover'}
                               variants={variantsSkill}
                        className={'my-contacts-section__list-item'}
                    >
                        <a href={contact.href} target={"_blank"} rel="noreferrer">
                            <img width={'50'}
                                 height={'50'}
                                 loading="lazy"
                                 className={`my-contacts-section__list-item-image ${!!contact.haveBackground ? 'my-contacts-section__list-item-image--background' : ''}`}
                                 src={contact.src} alt={contact.alt}/>
                        </a>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default React.memo(MyContacts);
