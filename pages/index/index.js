var bmap = require('../../utils/bmap-wx.min.js');
var wxMarkerData = [{
  id: "0",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, {
  id: "1",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, {
  id: "2",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, {
  id: "3",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, {
  id: "4",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, {
  id: "5",
  latitude: "",
  longitude: "",
  iconPath: "../../images/1314.png",
  stationid: ""
}, ];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
  },
  makertap: function(e) {
    var that = this;
    var id = e.markerId;
    console.log(id)
    if (id == 0) {
      wx.navigateTo({
        url: 'detail/detail',
      })
      return false;
    } else if (id == 1) {
      wx.navigateTo({
        url: 'detail1/detail1',
      })
      return false;
    } else if (id == 2) {
      wx.navigateTo({
        url: 'detail2/detail2',
      })
      return false;
    } else if (id == 3) {
      wx.navigateTo({
        url: 'detail3/detail3',
      })
      return false;
    } else if (id == 4) {
      wx.navigateTo({
        url: 'detail4/detail4',
      })
      return false;
    } else if (id == 5) {
      wx.navigateTo({
        url: 'detail5/detail5',
      })
      return false;
    }
  },


  onLoad: function() {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'LY6OiOx061frIgGAZddIPjpqN9WsmyKI'
    });
    wx.request({
      method: 'get',
      url: 'https://www.shuee.xin/tp5/public/station/returngaodegps',
      data: {},
      success: function(res) {
        console.log(res.data)
        wxMarkerData[0].latitude = res.data[0].lat;
        wxMarkerData[0].longitude = res.data[0].lon;
        wxMarkerData[0].stationid = res.data[0].stationid;
        wxMarkerData[1].latitude = res.data[1].lat;
        wxMarkerData[1].longitude = res.data[1].lon;
        wxMarkerData[1].stationid = res.data[1].stationid;
        wxMarkerData[2].latitude = res.data[2].lat;
        wxMarkerData[2].longitude = res.data[2].lon;
        wxMarkerData[2].stationid = res.data[2].stationid;
        wxMarkerData[3].latitude = res.data[3].lat;
        wxMarkerData[3].longitude = res.data[3].lon;
        wxMarkerData[3].stationid = res.data[3].stationid;
        wxMarkerData[4].latitude = res.data[4].lat;
        wxMarkerData[4].longitude = res.data[4].lon;
        wxMarkerData[4].stationid = res.data[4].stationid;
        wxMarkerData[5].latitude = res.data[5].lat;
        wxMarkerData[5].longitude = res.data[5].lon;
        wxMarkerData[5].stationid = res.data[5].stationid;

        that.setData({
          wxMarkerData: wxMarkerData
        })
        wx.setStorage({
          key: 'markerData',
          data: that.data.wxMarkerData,
        })
        console.log(wxMarkerData)
      },
    })
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      that.setData({
        wxMarkerData: data.wxMarkerData
      });

      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '../../images/1314.png',
      iconTapPath: '../../images/1314.png'
    });
  },


})