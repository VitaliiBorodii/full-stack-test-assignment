import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CategoryPage extends Component {
  render() {
    const {categoryId} = this.props.match.params
    return (<div>
      <h1>{categoryId} - Category</h1>
    </div>)
  }
}

export default CategoryPage
