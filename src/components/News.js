import React, { Component } from 'react'
import NewsComponents from './NewsComponents'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className='row'>
            <div className='col-md-4'>
            <NewsComponents title="Title" description="mydes"/>
            </div>
            <div className='col-md-4'>
            <NewsComponents/>
            </div>
            <div className='col-md-4'>
            <NewsComponents/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
