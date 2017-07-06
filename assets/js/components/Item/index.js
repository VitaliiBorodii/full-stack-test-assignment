import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './style.css'


class Item extends PureComponent {

  render() {
    const {thumb, name} = this.props
    return (<div className={styles.container}  style={{backgroundImage: `url(${thumb})`}}>
      <div className={styles.name}>{name}</div>
    </div>)
  }
}

Item.propTypes = {

}


export default Item
