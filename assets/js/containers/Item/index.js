import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import cx from 'classnames'
import {fetchItem} from '../../actions/item'
import styles from './style.css'
import BackIcon from '../../../icons/ic_chevron_left_black_48px.svg'

class Item extends Component {

  componentWillMount() {
    if (!this.props.item.item) {
      this.props.fetchItem(this.props.match.params.itemId)
    }
  }

  render() {
    const {item} = this.props.item
    return (
    item ? <div className={styles.container}>
        <div className={styles.background} style={{backgroundImage: `url(${item.thumb})`}}/>
      <Link to='/' className={styles.link}><div className={cx(styles.linkArrow, 'button')}><BackIcon /></div></Link>
      <div className={styles.info}>
        <div className={styles.badge} style={{backgroundImage: `url(${item.thumb_180})`}} />
        <div className={styles.name}>{item.name}</div>
      </div>
      <div className={styles.footer}>
        <div className={cx(styles.button, 'button')}>Play Now</div>
      </div>
      </div> : <div className={styles.loading}>Loading...</div>
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