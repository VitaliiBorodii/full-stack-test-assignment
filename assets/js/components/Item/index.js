import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './style.css'


class Item extends PureComponent {

  goToItemPage = () => {
    this.props.goToItemPage(this.props.item)
  }

  render() {
    const {thumb, name} = this.props.item
    return (<div onClick={this.goToItemPage} className={styles.container}  style={{backgroundImage: `url(${thumb})`}}>
      <div className={styles.name}>{name}</div>
    </div>)
  }
}

Item.propTypes = {
  goToItemPage: PropTypes.func,
  item: PropTypes.shape({
    package_id: PropTypes.string,
    thumb: PropTypes.string,
    name: PropTypes.string,
  })
}


export default withRouter(Item)
