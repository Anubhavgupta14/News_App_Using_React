import React, { Component } from 'react'
import NewsComponents from './NewsComponents'

export class News extends Component {
  render() {
    return (
      <div>
        <NewsComponents/>
        <NewsComponents/>
        <NewsComponents/>
        <NewsComponents/>
        <NewsComponents/>
      </div>
    )
  }
}

export default News
