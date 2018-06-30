Page({
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    wx.showNavigationBarLoading() 
    var that = this;
    wx.getStorage({
      key: 'markerData',
      success: function (res) {

        wx.getStorage({
          key: 'markerData',
          success: function (res) {
            var stationId = res.data[0].stationid
            that.setData({
              stationId: stationId
            })
            wx.setStorage({
              key: 'stationIdData',
              data: stationId,
            })
            wx.request({
              method: 'get',
              url: 'https://www.shuee.xin/tp5/public/station/readstation',
              data: {
                stationid: stationId
              },
              success: function (res) {
                console.log(res.data)
                var power = res.data.power
                that.setData({
                  power: power
                })
                var update_time = res.data.update_time
                that.setData({
                  update_time: update_time
                })
                var uavId = res.data.uavid
                that.setData({
                  uavId: uavId
                })
                var stationStatus = res.data.stationstatus
                if (stationStatus == 0) {
                  stationStatus = '未充电'
                } else if (stationStatus == 1) {
                  stationStatus = '正在充电'
                } else if (stationStatus == 2) {
                  stationStatus = '充电完成'
                }
                that.setData({
                  stationStatus: stationStatus
                })
              }
            })
          }
        })

      }

    })
    wx.stopPullDownRefresh() //停止下拉刷新   
    wx.hideNavigationBarLoading() //完成停止加载       
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'markerData',
      success: function (res) {

        wx.getStorage({
          key: 'markerData',
          success: function (res) {
            var stationId = res.data[0].stationid
            that.setData({
              stationId: stationId
            })
            wx.setStorage({
              key: 'stationIdData',
              data: stationId,
            })
            wx.request({
              method: 'get',
              url: 'https://www.shuee.xin/tp5/public/station/readstation',
              data: {
                stationid: stationId
              },
              success: function (res) {
                console.log(res.data)
                var power = res.data.power
                that.setData({
                  power: power
                })
                var update_time = res.data.update_time
                that.setData({
                  update_time: update_time
                })
                var uavId = res.data.uavid
                that.setData({
                  uavId: uavId
                })
                var stationStatus = res.data.stationstatus
                if (stationStatus == 0) {
                  stationStatus = '未充电'
                } else if (stationStatus == 1) {
                  stationStatus = '正在充电'
                } else if (stationStatus == 2) {
                  stationStatus = '充电完成'
                }
                that.setData({
                  stationStatus: stationStatus
                })
              }
            })
          }
        })

      }

    })

  },
  logIn: function () {
    wx.navigateTo({
      url: '../../log/log',
    })
  }
})