import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './style.css'
import cx from 'classnames'
import Category from '../../components/Category'

import {loadFeed} from '../../actions/feed'
import {setCachedItem} from '../../actions/item'
import {setCachedCategory} from '../../actions/category'

class Home extends PureComponent {

  loadMore = (page) => {
    this.props.loadFeed(page)
  }

  goToItemPage = (item) => {
    this.props.setCachedItem(item)
    this.props.history.push(`/item/${item.package_id}`)
  }

  goToCategoryPage = (category, id) => {
    this.props.setCachedCategory(category)
    this.props.history.push(`/category/${id}`)
  }

  render() {
    const {feed} = this.props
    const categoryNames = Object.keys(feed.feed)
    const hasMore = (!feed.pending && (feed.meta.total > categoryNames.length))

    return ( <div className={cx(styles.infinite, 'transition-item')}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}
          useWindow={false}
        >
          {categoryNames.map(key => <Category
            goToCategoryPage={this.goToCategoryPage}
            goToItemPage={this.goToItemPage}
            category={key}
            key={key}
            items={feed.feed[key]}
          />)}
        </InfiniteScroll>
    </div>)
  }
}

const mapStateToProps = (state => {
  return {
    feed: state.feed
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadFeed,
  setCachedItem,
  setCachedCategory
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
