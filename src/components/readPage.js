import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import  * as ConstData from '../modules/constants/ConstData'
import api from '../modules/api/api'

class Read extends PureComponent {
    constructor(props) {
        super(props)
        console.log('super')
        const docEl = document.body;
        docEl.style.background = '#d1d6be';
        this.data = this.props.location.state;//从book detail content传来的type bookid bookname chapter
        this.type = this.data ? this.data.type : ConstData.DATA_INVAILD;
        this.bookId = this.data ? this.data.bookId : -1;
        this.bookName = this.data ? this.data.bookName : -1;
        this.state = {
            chapterList: [],
            currentChapterNum: 1,
            chapterContent: "",
            title: "",
            leftToolBarTop: 40,
            rightToolbarBottom: 0,
            getPageContentSuccess: false,//标识这一章节的内容是否已经成功获取
            visible: false
        };
        this.showModal = () => {
            this.setState({
                visible: true,
            });
        };
        //this.newHandleScroll = this.handleScroll.bind(this);
    }

    componentWillUnmount() {
        document.body.style.background = "white"
    }

    //将用户当前的阅读进度同步到数据库
    asyncCurrentReadChapterNum = (currentChapterNum) => {

    }

    //点击开始阅读时候抓取的数据
    fetchReadBookChapterListAndStartRead = async (bookId) => {
        try {
            let res = await fetch(api.READ_BOOK_CHAPTER_LIST(bookId))
            let data = await res.json()
            data = data.mixToc.chapters
            this.setState({
                chapterList: data,
                currentChapterNum: 1
            })

        } catch (error) {
            
        }
    }
    //点击章节时候住区数据
    fetchChapterDetail = async (chapterUrl, num, title) => {
        try {
            let tempUrl = chapterUrl.replace(/\//g, '%2F').replace('?', '%3F')
            //console.log('tempUrl: ' + tempUrl)
            //console.log(api.READ_BOOK_CHAPTER_DETAIL(tempUrl))
            let res = await fetch(api.READ_BOOK_CHAPTER_DETAIL(tempUrl))
            //console.log("res" + JSON.stringify(res))
            let data = await res.json()
            //console.log("content: " + data)
            data.ok ?
            this.setState({
                chapterContent: data.chapter.body,
                title: title,
                currentChapterNum: num,
                getPageContentSuccess: true
            }) : this.setState({})
            //console.log(this.state.title)
            //console.log(this.state.chapterContent)
        } catch (error) {
            
        }
    }

    componentDidMount() {
        let {chapterUrl, num, title } = this.data.chapter

        if (this.type === ConstData.DATA_INVAILD) {
            return
        }
        //第一次阅读时
        if (this.type === ConstData.READ_BOOK_START) {
            //一些开始阅读的东西需要补充，开始阅读:继续阅读 模式
            this.chapterIndex = 0
            this.fetchReadBookChapterListAndStartRead(this.bookId)
        } else if (this.type === ConstData.READ_BOOK_MIDDLE) {
            //console.log("data: " + JSON.stringify(this.data))
            this.fetchChapterDetail(chapterUrl, num, title)
        }
    }

    renderContentByDataState() {
        let getPageContentSuccess = this.state.getPageContentSuccess
        let renderContent = <div />
        !getPageContentSuccess ? 
            renderContent = <div>加载中...</div> : 
            renderContent = <div>
                <h4 className="title">
                    <span>{this.bookName}</span>
                    <span className="current-chpater">{this.state.title}</span>
                </h4>
                <div ref="content" className="content">
                    <input type="hidden" id="vip" name="" value="false" />
                    <div className="inner-text" dangerouslySetInnerHTML={{
                        __html: this.state.chapterContent
                    }}></div>
                </div>
            </div>

        return renderContent

    }

    render() {
        
        return (
            <div className="page-reader-wrap">
                {this.renderContentByDataState()}
            </div>
        )
    }


}

export default Read