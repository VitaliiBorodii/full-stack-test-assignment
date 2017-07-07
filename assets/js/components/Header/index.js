import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import styles from './style.css'
import cx from 'classnames'

class Header extends Component {

  onSearch = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const search = form.search.value
    this.props.history.push(`/search?qs=${search}`)
  }

  render() {
    return (<form onSubmit={this.onSearch} className={styles.container}>
      <div className={styles.searchContainer}>
        <label htmlFor="" className={styles.searchWrapper}>
          <input name="search" type="text" className={styles.searchInput}/>
          <span className={styles.searchLabel}>Your daily dose of awesome games</span>
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Search</button>
      </div>
    </form>)
  }
}

export default withRouter(Header)