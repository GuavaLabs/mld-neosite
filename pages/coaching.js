import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Product from '../components/product'

export default function Coaching() {
  return (
    <>
      <div className="flex-wrapper-1">
        {/* Product | Needs ProductName, ImagePath, and Product Text passed to each component*/}
        <Product ProductName='John MLD Alpha Course' ImagePath='/test.png' ProductText='Proin sit amet turpis varius, posuere felis in, laoreet quam. Nam ac elementum arcu, eget tincidunt mi. Fusce ut imperdiet dolor. Nullam sit amet nulla eget sem dignissim imperdiet non quis eros. Duis enim justo, euismod sed tempus sit amet, posuere non ipsum. Nam enim lacus, fringilla a semper ut, euismod sed enim. Aenean nisl arcu, mattis eu efficitur congue, tincidunt ac tellus. Ut dapibus diam nunc, eget pulvinar nibh ultrices vel. Phasellus porta cursus diam eu viverra.'/>
        <Product ProductName='John MLD Alpha Course' ImagePath='/test.png' ProductText='Proin sit amet turpis varius, posuere felis in, laoreet quam. Nam ac elementum arcu, eget tincidunt mi. Fusce ut imperdiet dolor. Nullam sit amet nulla eget sem dignissim imperdiet non quis eros. Duis enim justo, euismod sed tempus sit amet, posuere non ipsum. Nam enim lacus, fringilla a semper ut, euismod sed enim. Aenean nisl arcu, mattis eu efficitur congue, tincidunt ac tellus. Ut dapibus diam nunc, eget pulvinar nibh ultrices vel. Phasellus porta cursus diam eu viverra.'/>
        <Product ProductName='John MLD Alpha Course' ImagePath='/test.png' ProductText='Proin sit amet turpis varius, posuere felis in, laoreet quam. Nam ac elementum arcu, eget tincidunt mi. Fusce ut imperdiet dolor. Nullam sit amet nulla eget sem dignissim imperdiet non quis eros. Duis enim justo, euismod sed tempus sit amet, posuere non ipsum. Nam enim lacus, fringilla a semper ut, euismod sed enim. Aenean nisl arcu, mattis eu efficitur congue, tincidunt ac tellus. Ut dapibus diam nunc, eget pulvinar nibh ultrices vel. Phasellus porta cursus diam eu viverra.'/>
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
