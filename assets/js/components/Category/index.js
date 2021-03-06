import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Item from '../Item'

import ForwardIcon from '../../../icons/ic_chevron_right_black_48px.svg'

import styles from './style.css'

class Category extends Component {

  goToCategoryPage = () => {
    this.props.goToCategoryPage(this.props.items, this.props.category)
  }

  render() {
    const {items, category, goToItemPage} = this.props
    return (<div className={styles.container}>
      <div onClick={this.goToCategoryPage} className={styles.title}>
        <div className={styles.titleName}>{category}</div>
        <div className={cx(styles.titleArrow, 'button')}><ForwardIcon/></div></div>
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
  goToCategoryPage: PropTypes.func,
}


export default Category
