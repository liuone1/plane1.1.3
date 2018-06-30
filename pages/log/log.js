Page({
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    var that = this;
    wx.getStorage({
      key: 'stationIdData',
      success: function (res) {
        console.log(res.data)
        wx.request({
          method: 'get',
          url: 'https://www.shuee.xin/tp5/public/station/readlog',
          data: {
            stationid: res.data
          },
          success: function (res) {
            console.log(res.data)
            console.log(that.data.listData[0].time)
            var i = 0
            for (i = 0; i < res.data.length; i++) {
              that.data.listData[i].time = res.data[i].create_time
              that.data.listData[i].ID = res.data[i].stationid
              that.data.listData[i].status = res.data[i].stationstatus
              if (that.data.listData[i].status == 0) {
                that.data.listData[i].status = '飞离'
              } else if (that.data.listData[i].status == 1) {
                that.data.listData[i].status = '开始充电'
              } else if (that.data.listData[i].status == 2) {
                that.data.listData[i].status = '充电完成'
              }
              that.data.listData[i].name = res.data[i].id
            }
            that.setData({
              listData: that.data.listData
            })
          },
        })
      }
    })  
    wx.stopPullDownRefresh() //停止下拉刷新   
    wx.hideNavigationBarLoading() //完成停止加载
  },
  data: {
    listData: [
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" },
      { "time": "无记录", "ID": "无记录", "status": "无记录", "name": "无记录" }
    ]
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'stationIdData',
      success: function (res) {
        console.log(res.data)
    wx.request({
      method: 'get',
      url: 'https://www.shuee.xin/tp5/public/station/readlog',
      data: {
        stationid:res.data
      },
      success: function (res) {
        console.log(res.data)
        console.log(that.data.listData[0].time)
        var i=0
        for(i=0;i<res.data.length;i++){
          that.data.listData[i].time = res.data[i].create_time
          that.data.listData[i].ID = res.data[i].stationid
          that.data.listData[i].status = res.data[i].stationstatus
          if (that.data.listData[i].status == 0) {
            that.data.listData[i].status = '飞离'
          } else if (that.data.listData[i].status == 1) {
            that.data.listData[i].status = '开始充电'
          } else if (that.data.listData[i].status == 2) {
            that.data.listData[i].status = '充电完成'
          }
          that.data.listData[i].name = res.data[i].id
        }
        that.setData({
          listData: that.data.listData
        })
      },
    })
      }
    })
  },
})