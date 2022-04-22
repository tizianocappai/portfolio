import React from 'react';
import {motion} from 'framer-motion';
import './styles.scss';

const Myself = () => {
  const variantsP = {
    visible: {
      opacity: 1, y: 0, transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
    hidden: {opacity: 0, y: -50},
  };

  return (
    <section className={'container scroll-snap-container myself-section'}>
      <motion.p initial={'hidden'}
        whileInView={'visible'}
        variants={variantsP}
        className={'myself-section__paragraph'}>
                I was born in Rome on January 5th 1999.
      </motion.p>
      <motion.p initial={'hidden'}
        whileInView={'visible'}
        variants={variantsP}
        className={'myself-section__paragraph'}>
          Always had a lot of passion for computer science, football and bike.
      </motion.p>
      <motion.p initial={'hidden'}
        whileInView={'visible'}
        variants={variantsP}
        className={'myself-section__paragraph'}>
          Graduated at the age of 18 in computer science in Rome.
      </motion.p>
      <motion.p initial={'hidden'}
        whileInView={'visible'}
        variants={variantsP}
        className={'myself-section__paragraph'}>
          Started to work for K2play srl as web developer at the age of 18.
      </motion.p>
      <motion.p initial={'hidden'}
        whileInView={'visible'}
        variants={variantsP}
        className={'myself-section__paragraph'}>
          Currently working as web developer for Accenture Spa since 2019.
      </motion.p>
    </section>
  );
};

export default React.memo(Myself);
