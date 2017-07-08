import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import cx from 'classnames'

import {fetchCategory} from '../../actions/category'
import {setCachedItem} from '../../actions/item'

import styles from './style.css'

import Item from '../../components/Item'
import BackButton from '../../components/BackButton'

class CategoryPage extends Component {

  componentWillMount() {
    if (!this.props.category.games) {
      this.props.fetchCategory(this.props.match.params.categoryId)
    }
  }

  goToItemPage = (item) => {
    this.props.setCachedItem(item)
    this.props.history.push(`/item/${item.package_id}`)
  }

  render() {
    const {categoryId} = this.props.match.params
    const {games} = this.props.category

    return (<div className={cx(styles.container, 'transition-item')}>
      <div className={styles.title}>
        <BackButton />
        <h1 className={styles.titleName}>{categoryId}</h1>
      </div>
      <div className={styles.content}>
        {games && games.map(item => <Item goToItemPage={this.goToItemPage} key={item.package_id} item={item} />)}
      </div>
    </div>)
  }
}

const mapStateToProps = (state => {
  return {
    category: state.category
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCategory,
  setCachedItem,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
