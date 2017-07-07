import React from 'react'

import styles from './style.css'

import HomeIcon from '../../../icons/ic_home_black_48px.svg'
import TrendIcon from '../../../icons/ic_whatshot_black_48px.svg'
import SubIcon from '../../../icons/ic_subscriptions_black_48px.svg'
import LibIcon from '../../../icons/ic_perm_media_black_48px.svg'

const Footer = () => (<div className={styles.container}>
  <div className={styles.item}>
    <HomeIcon className={styles.icon}/>
    <span className={styles.label}>Home</span>
  </div>
  <div className={styles.item}>
    <TrendIcon className={styles.icon}/>
    <span className={styles.label}>Trending</span>
  </div>
  <div className={styles.item}>
    <SubIcon className={styles.icon}/>
    <span className={styles.label}>Subscriptions</span>
  </div>
  <div className={styles.item}>
    <LibIcon className={styles.icon}/>
    <span className={styles.label}>Library</span>
  </div>

</div>)

export default Footer
