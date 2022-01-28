import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
//img, header-text, text

export default function Service({img, headertext, text}){

  return(
    <div className={styles['service']}>
      <Image src={img}  className={styles['filter']} width={95} height={95} />
      <h2 className={styles['service-header']}>{headertext}</h2>
      <p  className={styles['service-subtext']}>{text}</p>
      <Link href="#">
        <button className={styles['button']}>More</button>
      </Link>
    </div>
  )
}
