import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import styles from './style.css'
import Item from '../Item'

class Category extends Component {

  render() {
    const {items, category} = this.props
    return (<Link to={`/category/${category}`} className={styles.container}>
      {items.map((item, idx) => <Item key={idx} {...item}/>)}
    </Link>)
  }
}

Category.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
}


export default Category
