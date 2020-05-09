import React from "react"
import "./Shop.css"
import { connect } from "react-redux"
import { Input } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { setCommodity } from '../store/action.js'
const { Search } = Input;
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
      allPage: 0,
      currentPage: 1,
      shop: [],
      isShow: false,
      changeTxt: null,
      isFixed: false
    }
  }
  appScroll(e) {

    if (e.target.scrollTop > 60) {
      this.setState({
        isFixed: true
      })
    } else {
      this.setState({
        isFixed: false
      })
    }
  }
  render() {
    return (
      <div className="Shop">
        <h1 className="Shop-title">食物搜索表</h1>
        <div className="Shop-box">
          {/* 搜索 */}
          <header id='fixed-menu' className="Shop-header">
            <Search placeholder="请输入商品名称" onSearch={value => {
              if (value === "") {
                this.info("搜索内容不能为空")
                return
              } else {
                console.log(this.props.commodity)
                var is = false
                var newArr = []
                for (let i = 0; i < this.props.commodity.length; i++) {
                  if (this.props.commodity[i].name === value) {
                    newArr.push(this.props.commodity[i])
                    is = true

                  }
                }
                if (is === true) {
                  this.setState({
                    shop: newArr
                  })
                  return
                } else {
                  this.info("您搜索的商品不在搜索范围内")
                  return
                }
              }


            }} enterButton />
          </header>
          {/* 主要内容展示 */}
          <main className="Shop-main">
            <table className="Shop-table">
              <thead>
                <tr className="Shop-title-tr">
                  <td>序号</td>
                  <td>食物名称</td>
                  <td>食物数量</td>
                  <td style={{ color: 'red' }}>编辑</td>
                </tr>
              </thead>
              <tbody>
                {this.state.shop && this.state.shop.map((el, index) => {
                  return <tr className="Shop-shop-item" key={index}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td style={{ color: '#EE7600' }}>{el.count}</td>
                    <td><EditOutlined onClick={(e) => {
                      this.setState({
                        isShow: true,
                        changeTxt: el
                      })
                    }} /></td>
                  </tr>
                })}
              </tbody>
            </table>
          </main>
          {/* 分页 */}
          <footer className="Shop-footer">
            <ul className="Shop-ul">
              <li className="Shop-li-left"><Button onClick={() => {
                this.prePage()
              }} size="small"><CaretLeftOutlined /></Button></li>

              {this.state.allPage && this.state.allPage.map((el, index) => {
                debugger
                return <li key={index} className="Shop-li-item">
                  <Button size="small" type={this.state.currentPage === el ? `primary` : ``} onClick={(e) => {
                    debugger
                    // var oldIndex = this.state.currentPage;
                    var newIndex = e.target.innerHTML;
                    this.setState({
                      currentPage: newIndex
                    }, () => {
                      this.getShop(newIndex - 1, newIndex)
                    })

                  }}>{el}</Button>
                </li>
              })}

              <li className="Shop-li-right"><Button onClick={() => {
                this.nextPage()
              }} size="small"><CaretRightOutlined /></Button></li>
            </ul>

          </footer>
        </div>

        {/* 编辑修改 */}
        {this.state.isShow && <div className="Shop-shadow">
          <div className="Shop-change">
            <h3>商品名称:{this.state.changeTxt.name}</h3>
            <div className="Shop-input">
              <label htmlFor="num">数量</label>
              <input type="number" id="num" value={this.state.changeTxt.count}
                onChange={(e) => {
                  console.log(this.state.changeTxt)
                  let newObj = {
                    name: this.state.changeTxt.name,
                    count: e.target.value,
                    id: this.state.changeTxt.id
                  }
                  this.setState({
                    changeTxt: newObj
                  })
                }} />
            </div>
            <div className="Shop-btn">
              <Button type="primary" onClick={() => {
                this.setState({
                  isShow: false
                })
              }}>取消</Button>
              <Button type="primary" onClick={() => {
                let arr = this.state.shop
                for (var s = 0; s < arr.length; s++) {
                  if (this.state.changeTxt.id === arr[s].id) {
                    arr[s] = this.state.changeTxt
                    this.setState({
                      shop: arr
                    })
                  }
                }
                let arrs = this.props.commodity
                console.log(this.props.commodity)
                for (var a = 0; a < arrs.length; a++) {
                  if (this.state.changeTxt.id === arrs[a].id) {
                    // console.log(this.changeTxt.id)
                    arrs[a] = this.state.changeTxt
                    console.log(this.state.changeTxt)
                    this.props.setCommodity(arrs)
                  }
                }
                this.setState({
                  isShow: false
                })
              }}>确定</Button>
            </div>
          </div>
        </div>}


      </div>
    )
  }
  // 上一页
  prePage = () => {
    var oldIndex = Number(this.state.currentPage)
    // var index = oldIndex - 1
    if (oldIndex <= 1) {
      this.info("已经是第一页了")
      return
    } else {
      oldIndex -= 1
    }
    this.setState({
      currentPage: oldIndex
    }, () => {
      this.getShop(oldIndex - 1, oldIndex)
    })
  }
  // 下一页
  nextPage = () => {
    var oldIndex = Number(this.state.currentPage);

    // var index = oldIndex + 1
    debugger
    if (oldIndex >= this.state.allPage.length) {
      // console.log(this.state.allPage.length)
      this.info("这已经是最后一页了")
      return
    } else {
      oldIndex += 1
    }

    this.getShop(oldIndex - 1, oldIndex)
    this.setState({
      currentPage: oldIndex
    })
  }
  // 根据页数获取展示商品方法
  getShop = (oldPage, page) => {
    debugger
    this.setState({
      page: page,
      shop: this.props.commodity.slice(oldPage * 10, 10 * page)
    })
  }
  // 提示方法
  info = (msg) => {
    message.info(msg);
  };
  componentDidMount() {
    setTimeout(() => {
      let arr = []
      for (var a = 1; a <= Math.ceil(this.props.commodity.length / 10); a++) {
        console.log(this.props.commodity.length)
        arr.push(a)
      }
      this.setState({
        allPage: arr,
        shop: this.props.commodity.slice(0, 10)
      })
    }, 10)
  };


}

export default connect(state => {
  return {
    commodity: state.commodity
  }
}, dispatch => {
  return {
    setCommodity(c) {
      dispatch(setCommodity(c))
    }
  }
})(Shop)