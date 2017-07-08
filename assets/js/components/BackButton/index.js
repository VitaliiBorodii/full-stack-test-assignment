import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import cx from 'classnames'

import styles from './style.css'

import BackIcon from '../../../icons/ic_chevron_left_black_48px.svg'

class BackButton extends PureComponent {

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div onClick={this.goBack} className={cx(styles.linkArrow, 'button')}><BackIcon /></div>
    )
  }
}

export default withRouter(BackButton)
