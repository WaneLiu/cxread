import React, { PureComponent } from 'react'
import { NavBar } from 'antd-mobile';

class Bookshelves extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar>书架</NavBar>
                <div>
                    <div className="recentReadIcon">最近阅读</div>
                    
                </div>
            </div>
        )
    }
}

export default Bookshelves