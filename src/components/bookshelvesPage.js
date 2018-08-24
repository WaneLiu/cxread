import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'antd-mobile';

class Bookshelves extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar>书架</NavBar>
                Bookshelves
            </div>
        )
    }
}

export default Bookshelves