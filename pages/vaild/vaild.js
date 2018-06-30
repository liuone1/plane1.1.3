var app = getApp()
// var step = 1 
var countdown = 60;  
var settime = function (that) { 
  if (countdown == 0) { that.setData({ is_show: true })  
   countdown = 60; return; } 
   else { that.setData({ is_show: false, last_time: countdown })    
    countdown--; } 
    setTimeout(function () {
       settime(that) },
        1000)
        } 
Page({
  data: {
    windowWidth: 0,
    windoeHeight: 0,
    last_time: '',
    is_show: true
  },            
  //验证手机号码格式
  validatemobile: function (mobile) {
    console.log(mobile);
    if (mobile.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: 'fail',
        duration: 1500
      })
      return false;
    }
    if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'info',
        duration: 1500
      })
      return false;
    }
    return true;
  },
  //验证是否输入验证码
  validateuserNumber: function (userNumber) {
    console.log(userNumber);
    if (userNumber.length == 0) {
      wx.showToast({
        title: '请输入验证码！',
        icon: 'info',
        duration: 1500
      })
      return false;
    }
  },
  //验证是否密码为空
  validateuserPassword: function (userPassword) {
    console.log(userPassword);
    if (userPassword.length == 0) {
      wx.showToast({
        title: '请输入密码！',
        icon: 'info',
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
  //验证码输入获取
  userNumberInput: function (e) {
    this.setData({
      userNumber: e.detail.value
    })
  },
  //用户名密码输入获取
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
 logIn: function () {
    if (this.validatemobile(this.data.userName) == false) return;
    if (this.validateuserNumber(this.data.userNumber) == false) return;
    if (this.validateuserPassword(this.data.userPassword) == false) return;

    wx.navigateTo({
      url: '/pages/first/first',//页面跳转相对路径要写清楚且准确 
    })
  },
  shuaxin: function () {
    wx.navigateTo({
      url: '/pages/first/first',//页面跳转相对路径要写清楚且准确 
    })
  },
  reSendPhoneNum: function () {
    var that = this;  // 将获取验证码按钮隐藏60s，60s后再次显示    
    that.setData({   
     is_show: (!that.data.is_show)  //false   
     })    
     settime(that); 
      } ,
  /*reSendPhoneNum: function (){
    if (currentTime < 0) {
      var that = this
      currentTime = maxTime
      interval = setInterval(function () {
        currentTime--
        that.setData({
          time: currentTime
        })

        if (currentTime <= 0) {
          currentTime = -1
          clearInterval(interval)
        }
      }, 1000)
    } else {
      wx.showToast({
        title: '短信已发到您的手机，请稍后重试!',
        icon: 'loading',
        duration: 700
      })
    }
  }*/
})