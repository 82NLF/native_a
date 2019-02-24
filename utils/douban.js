let app = getApp();
export default ({url,data,loading,navLoading}) => new Promise((resolve,reject)=>{
  if(loading) wx.showLoading({title:'加载中'})
  if(navLoading) wx.showNavigationBarLoading()
  wx.request({
    url: app.globalData.baseUrl + url,
    data: data,
    header: {
      'content-type': 'json' 
    },
    success(res) {
      loading && wx.hideLoading()
      navLoading && wx.hideNavigationBarLoading()
      resolve(res)
    },
    error(){
      reject()
    }
  })
})