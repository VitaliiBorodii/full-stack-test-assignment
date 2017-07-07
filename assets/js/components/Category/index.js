import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import cx from 'classnames'
import styles from './style.css'
import Item from '../Item'
import ForwardIcon from '../../../icons/ic_chevron_right_black_48px.svg'

class Category extends Component {

  render() {
    const {items, category, goToItemPage} = this.props
    return (<div className={styles.container}>
      <Link to={`/category/${category}`} className={styles.title}>
        <div className={styles.titleName}>{category}</div>
        <div className={cx(styles.titleArrow, 'button')}><ForwardIcon/></div></Link>
      <div className={styles.body}>
        {items.map((item, idx) => <Item goToItemPage={goToItemPage} key={idx} item={item}/>)}
      </div>
    </div>)
  }
}

Category.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
  goToItemPage: PropTypes.func,
}


export default Category
