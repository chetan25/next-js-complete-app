import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
   return (
       <section className={styles.hero}>
           <div className={styles.image}>
               <Image src='/images/site/sonic.jpg' alt='Sonic Image' width={300} height={300} />
           </div>
           <h1>Hi I am Sonic</h1>
           <p>I run very fast and love softball.</p>
       </section>
   );
}

export default Hero;