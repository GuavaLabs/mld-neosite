import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Service from '../components/service'

// Header must be created in _index.js

export default function Home() {
  return (
    <>
      <div className="grid-wrapper">
        {/* Hero */}
        <section  className={`${styles['flexbox']} ${styles['header-1']}`}>
          <h1 className='h1 head-text'>
            <span className={`${styles["stars"]} ${styles["drop-shadow"]}`}>Modern Life Dating</span>
          </h1>
          <p className={`${styles["intro-blurb"]}`}>Take part in the most important men's masculine improvement network</p>
        </section>
        {/* Section 1 */}
        <section  className={`${styles['flexbox']} ${styles['section-2']}`} id="services">
          <h1 className='h1 head-text'>
            <span className={styles["drop-shadow"]}>Services</span>
          </h1>
          <div  className={styles["servicebox"]}>
            <Service img={'/video.svg'} headertext="Real-Time Coaching" text="I offer a variety of Real-Time coaching packages to fit your needs. Check out some of my packages. "/>
            <Service img={'/social-icon-youtube.svg'} headertext="My YouTube Channel" text="I post to YouTube daily, answering your questions on dating, making money, & more. Make sure to check it out. "/>
            <Service img={'/tinder.svg'} headertext="Tinder Guide" text=" Sign-up for my email list and get FREE Guide that will help triple your success on Tinder. "/>
            <Service img={'/email.svg'} headertext="Email Me" text=" Send me an email with your your dating problems. Let's fix your life today so you can succeed. "/>
          </div>
        </section>
        {/* Section 2 */}
        <section  className={`${styles['flexbox']}  ${styles['section-3']}`}>
          <h1 className='h1 head-text social-header'>
            <span className={styles["drop-shadow"]}>Follow MLD</span>
          </h1>
          <ul className={`${styles["central-list"]} ${styles['social-list']}`}>
            <li className={`${styles['social-li']} ${styles['youtube']}`}>
              <a href="https://www.youtube.com/c/ModernLifeDatingChannel">Modern Life Dating</a>
            </li>
            <li className={`${styles['social-li']} ${styles['instagram']}`}>
              <a href="https://www.instagram.com/hotdudelife/">@hotdudelife</a>
            </li>
            <li className={`${styles['social-li']} ${styles['tiktok']}`}>
              <a href="https://www.tiktok.com/@modernlifedating">@modernlifedating</a>
            </li>
            <li className={`${styles['social-li']} ${styles['instagram']}`}>
              <a href="https://www.instagram.com/modernlifedating/">@modernlifedating</a>
            </li>
            <li className={`${styles['social-li']} ${styles['facebook']}`}>
              <a href="https://www.facebook.com/ModernLifeDating/">@ModernLifeDating</a>
            </li>
          </ul>
          <div  className={styles['blended-background']}></div>
        </section>
        {/* Footer */}
        <footer className={styles.flexbox}>
          <p  className={styles['empty-space']}>&nbsp;</p>
          <Image src={'/harambe.png'} width={128} height={128}/>

          <p className={styles["pull-quote"]}>“Decrease your judgement of others, increase your judgement of yourself.”</p>

          <p>© 2021 &ndash; Modern Life Dating</p>

          <p  className={styles["shameless-plug"]}>Powered by <a href="https://guavalabs.io" target="_blank" rel="noopener noreferer" className={styles['name']}>Guava Labs</a></p>
        </footer>
      </div>
    </>
  )
}
