import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../components/common/style/myPage.css'
import { Flex, Button } from 'antd-mobile';
class My extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            flex: {

            },
            button: {
                width: '80px',
                margin: '15px'
            }
        }
        return (
            <div className="content">
               <div className="g-wrap"></div>
               <div className="g-container">
                    <h2>登录</h2>
                    <div className="g-username">
                        <input name="loginPhoneOrEmail" maxLength="64" placeholder="请输入手机号或邮箱" className="input"/>
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" className="g-username"/>
                    </div>
                    <div className="g-password">
                        <input  name="loginPassword" type="password" maxLength="64" placeholder="请输入密码" className="input"/>
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" className="g-password"/>
                    </div>
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" className="g-normal"/>
                    <div className="loginOrRegister">
                        <Flex justify="center">
                            <Button type="ghost" style={styles.button}>登录</Button>
                            <Button type="ghost" style={styles.button}>注册</Button>
                        </Flex>
                    </div>
               </div>
            </div>
        )
    }
}

export default My