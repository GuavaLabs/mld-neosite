import Image from 'next/image';
import Link from 'next/link';
import Base_Styles from '../styles/Home.module.css'
import styles from '../styles/Product.module.css'

export default function Product({ProductName, ImagePath, ProductText}){

  return(
    <div  className={styles['product-box']}>
      {/* Product Title */}
      <h1 className={`${styles['product-title']} ${Base_Styles['drop-shadow']}`}>{ProductName}</h1>
      <div  className={styles['sub-box']}>
        {/* Product Image Box */}
        <div  className={styles['product-image']}>
          <Image src={ImagePath} width={240} height={240}/>
        </div>
        {/* Product Text Box */}
        <div className={styles['product-text']}>
            <p>{ProductText}</p>
          </div>
      </div>
      <div  className={styles['placeholder']}>
        <h1>Place Holder for PayPal Buttons</h1>
      </div>
    </div>
  )
}
