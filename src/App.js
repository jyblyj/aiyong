/*
 * @Date: 2020-05-07 21:26:50
 * @LastEditors: Lq
 * @LastEditTime: 2020-05-09 09:21:03
 * @FilePath: /p/src/App.js
 */
import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {setCommodity} from "./store/action.js"
import Shop from "./component/Shop.jsx"
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      arr: [{ name: "咖啡", count: 10,id:1 }, { name: "黄豆", count: 10,id:2 }, { name: "玉米", count: 12,id:3 }, { name: '大豆', count: 20,id:4 }, { name: '黄瓜', count: 21,id:5 }, { name: "白糖", count: 23,id:6 }, { name: "红糖", count: 3,id:7 }, { name: "丝瓜", count: 245,id:8 }, { name: '南瓜', count: 23,id:9 }, { name: '冬瓜', count: 44,id:10 },
       { name: "白菜", count: 90,id:11 }, { name: "萝卜", count: 55,id:12 }, { name: "鸭肉", count: 66,id:13 }, { name: '鱼肉', count: 77,id:14 }, { name: '鸡肉', count: 23,id:15 }, { name: "豆角", count: 23,id:16 }, { name: "土豆", count: 23,id:17 }, { name: "茶叶", count: 23,id:18 }, { name: '大米', count: 23,id:19 }, { name: '小米', count: 23,id:20 },
        { name: "红枣", count: 23,id:21 }, { name: "青菜", count: 23,id:22 }, { name: "芹菜", count: 23 ,id:23}, { name: '西瓜', count: 23,id:24 }, { name: '豆瓣', count: 23,id:25 }, { name: "苹果", count: 23,id:26 }, { name: '石榴', count: 23,id:27 }, { name: "葡萄", count: 23,id:28 }, { name: '蜜瓜', count: 23,id:29 }, { name: '木瓜', count: 23,id:30 }, 
        { name: "芒果", count: 23,id:31 }, { name: "番茄", count: 23,id:32 }, { name: "粉丝", count: 23,id:33 }, { name: '鸭血', count: 23,id:34 }, { name: '百合', count: 23,id:35 }, { name: "西芹", count: 23,id:36 }, { name: "芹菜", count: 23,id:37 }, { name: "洋葱", count: 23,id:38 }, { name: '蒜瓣', count: 23,id:39 }, { name: '葫芦', count: 23,id:40 },{name:"奶油",count:100,id:41},{ name: "咖啡", count: 10,id:42 }, { name: "黄豆", count: 10,id:43 }, { name: "玉米", count: 12,id:44 }, { name: '大豆', count: 20,id:45 }, { name: '黄瓜', count: 100,id:46 }, { name: "白糖", count: 23,id:47 }, { name: "红糖", count: 3,id:48 }, { name: "丝瓜", count: 245,id:49 }, { name: '南瓜', count: 23,id:50 }, { name: '冬瓜', count: 44,id:51 },{ name: "白菜", count: 90,id:52 }, { name: "萝卜", count: 55,id:53 }, { name: "鸭肉", count: 66,id:54 }, { name: '鱼肉', count: 77,id:55 }, { name: '鸡肉', count: 23,id:56 }, { name: "豆角", count: 23,id:57 }, { name: "土豆", count: 23,id:58 }, { name: "茶叶", count: 23,id:59 }, { name: '大米', count: 23,id:60 }, { name: '小米', count: 23,id:61 },{ name: "红枣", count: 23,id:62 }, { name: "青菜", count: 23,id:63 }, { name: "芹菜", count: 23,id:64 }, { name: '西瓜', count: 23,id:65 }, { name: '豆瓣', count: 23,id:66 }, { name: "苹果", count: 23,id:67 }, { name: '石榴', count: 23,id:68 }, { name: "葡萄", count: 23,id:69}, { name: '蜜瓜', count: 23,id:70 }, { name: '木瓜', count: 23,id:71 }, { name: "芒果", count: 23,id:72 }, { name: "番茄", count: 23,id:73 }, { name: "粉丝", count: 23,id:74 }, { name: '鸭血', count: 23,id:75 }, { name: '百合', count: 23,id:76 }]
    }
  }
  render(){
    return(
      <div className="App">
        <Shop></Shop>
      </div>
    )
  }
  componentDidMount(){
    this.props.setCommodity(this.state.arr)
  }
  
}

export default connect(state=>{
  return{

  }
},dispatch=>{
  return{
    setCommodity(c){
      dispatch(setCommodity(c))
    }
  }
})(App);
