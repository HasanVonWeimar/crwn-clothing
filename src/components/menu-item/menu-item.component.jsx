import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

    <div className={`${size} menu-item`} onClick ={() =>
     history.push(`${match.url}${linkUrl}`)}>
         {/* we don't know what structure there is before, so we add match
         before our section's url. this just appends to ..: / + thisSection */}

        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`  //note this operator is on ذ
            }}
        >

        </div>

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)

export default withRouter(MenuItem);
//withrouter will return our menuitem with access to history