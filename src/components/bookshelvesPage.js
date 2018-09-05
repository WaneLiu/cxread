import React, { PureComponent } from 'react'
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'


const Bookshelves = ({read_history}) => {
    return (
        <div>
            <NavBar>书架</NavBar>
            <div>
                <div className="recentReadIcon">最近阅读</div>
                <div>
                    {read_history.map(item => <div>{item.chapterTitle}</div>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    read_history: state.read_history
})

export default connect(mapStateToProps)(Bookshelves)