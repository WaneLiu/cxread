import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/**
 * My Page
 */
class My extends PureComponent {
    user = () => {
        if (this.props.login === '未登录') {

        }
    }
    
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(My)