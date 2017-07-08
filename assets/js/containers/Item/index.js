import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import cx from 'classnames'
import {fetchItem} from '../../actions/item'
import styles from './style.css'
import BackButton from '../../components/BackButton'

class Item extends Component {

  componentWillMount() {
    if (!this.props.item.item) {
      this.props.fetchItem(this.props.match.params.itemId)
    }
  }

  render() {
    const {item} = this.props.item
    return (
    item ? <div className={cx(styles.container, 'transition-item')}>
        <div className={styles.background} style={{backgroundImage: `url(${item.thumb})`}}/>
      <div className={styles.link}><BackButton /></div>
      <div className={styles.info}>
        <div className={styles.badge} style={{backgroundImage: `url(${item.thumb_180})`}} />
        <div className={styles.name}>{item.name}</div>
      </div>
      <div className={styles.footer}>
        <div className={cx(styles.button, 'button')}>Play Now</div>
      </div>
      </div> : <div className={styles.container} />
    )
  }
}

const mapStateToProps = (state => {
  return {
    item: state.item
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)