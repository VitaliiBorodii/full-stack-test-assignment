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

  loadMore = () => {
    const {meta} = this.props.feed
    this.props.loadFeed(meta.page + 1, 1)
  }

  render() {
    const {feed} = this.props
    console.log('props', this.props.feed)
    const categoryNames = Object.keys(feed.feed)
    const hasMore = (!feed.pending && (feed.meta.total > categoryNames.length))
    console.log('hasMore:', hasMore)
    console.log(categoryNames)

    return (<div className={styles.container}>
      <Header/>
      <div className={styles.infinite}>
        <InfiniteScroll
          pageStart={feed.meta.page}
          loadMore={this.loadMore}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}>
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
