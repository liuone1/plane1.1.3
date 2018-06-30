//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: '欢迎登录微信智能蓝牙锁',
    userInfo: {},
    userName: '',
    userPassword: '',
    responseData:'',
    tell:'',
    pass:'',
    id_token: '',//方便存在本地的locakStorage
    response: '' //存取返回数据
  },

  //验证手机号码格式
  validatemobile: function (mobile) {
    console.log(mobile);
    if (mobile.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
    if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
    if (mobile != 17621931360) {
      wx.showToast({
        title: '帐号不存在',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
    return true;
  },
  validateuserPassword: function (userPassword) {
    console.log(userPassword);
    if (userPassword.length == 0) {
      wx.showToast({
        title: '请输入密码！',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
    if (userPassword != 123123) {
      wx.showToast({
        title: '密码错误！',
        image: '../../images/130.png',
        duration: 1500
      })
      return false;
    }
  },
  //用户名输入获取
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  //用户名密码输入获取
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
 
 logIn: function () {
   var that = this
  //请完成参数获取和用户名检查
   wx.request({
     url: 'https://www.shuee.xin/tp5/public/user/login',
     data: {
       name: that.data.userName,
       password: that.data.userPassword,
     },
     method: 'GET',
     success: function (res) {
       console.log(res.data)
       if (res.data.success) {
         wx.redirectTo({
           url: '/pages/index/index',
         })
       } else {
         wx.showModal({
           title: '提示',
           content: '用户名或密码错误',
           confirmColor: '#118EDE',
           showCancel: false,
           success: function (res) {
             if (res.confirm) {
               //console.log('用户点击确定')  
             }
           }
         });
         return false;
       }
     },
     fail: function (err) {
       console.log(err)
     }
   
  /*if (this.validatemobile(this.data.userName)==false) return;
  if (this.validateuserPassword(this.data.userPassword) == false) return;*/

  /*wx.request({
    url: 'http://project.clouduptech.com/p/keylocker/api/Public/v1/?service=Deng.UserLogin',
    data: {
      tel: this.data.userName,
      pass: this.data.userPassword,
    },
    method: 'GET',
    success: function (res) {
      if (res.data.token) {
        wx.navigateTo({
          url: '/pages/index/index' //+ 1,//页面跳转相对路径要写清楚且准确 
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '用户名或密码错误',
          confirmColor: '#118EDE',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              //console.log('用户点击确定')  
            }
          }
        });
        return false;
      }
    },
    fail: function (err) {
      console.log(err)
    }*/
  })
  },
 shuaxin: function () {
    wx.navigateTo({
      url: '/pages/vaild/vaild',//页面跳转相对路径要写清楚且准确 
    })
  },

/* onLoad: function () {
    var that = this
   wx.showLoading({
     title: '正在获取信息',
   })
   wx.getUserInfo({
     success: function (res) {
       var userInfo = res.userInfo
       var nickName = userInfo.nickName
       var avatarUrl = userInfo.avatarUrl
       var gender = userInfo.gender //性别 0：未知、1：男、2：女 
       var province = userInfo.province
       var city = userInfo.city
       var country = userInfo.country
       that.setData({
         userInfo: res.userInfo
       })
       console.log(nickName)
       wx.hideLoading();
     }
   })
 }*/
})