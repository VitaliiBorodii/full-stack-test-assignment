import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './style.css'
import Category from '../../components/Category'

import {loadFeed} from '../../actions/feed'

class Home extends PureComponent {

  loadMore = (page) => {
    this.props.loadFeed(page)
  }

  render() {
    const {feed} = this.props
    const categoryNames = Object.keys(feed.feed)
    const hasMore = (!feed.pending && (feed.meta.total > categoryNames.length))

    return (<div className={styles.container}>
      <Header/>
      <div className={styles.infinite}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}
          useWindow={false}
        >
          {categoryNames.map(key => <Category category={key} key={key} items={feed.feed[key]}/>)}
        </InfiniteScroll>
      </div>
      <Footer/>
    </div>)
  }
}

const mapStateToProps = (state => {
  return {
    feed: state.feed
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadFeed
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
