- 全局配置
  window + tabbar
  assets目录 pages

- UI 框架
  app.wxss 引入weui
  数据 生命周期 wx.request

- list 有套路
  onLoad onReachBottom onPallDownRefresh isLoading 加载 状态
  currentPage 传参
  totalPage 最后一页

- template
  共有的界面
  <template data={{}}>
  <template name="loading"/>



- "enablePullDownRefresh": true,
  下拉出现三个点

- wx.request({
      url: API_BASE,