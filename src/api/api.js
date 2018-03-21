import wepy from 'wepy';

let env = "-test" //-dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
// const apiMall = 'https://api.tangxinmao.com'
const apiMall = 'http://10.58.84.196:3000/api/v3'
const Mall = 'http://10.58.84.196:3000'
// const apiMall = 'https://voicer-2018.herokuapp.com/api/v3'

const wxRequest = async(params = {}, url) => {
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    return res;
};

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getVoiceList = (params) => wxRequest(params, apiMall + '/topics.json');
const getNodeList = (params) => wxRequest(params, apiMall + '/nodes.json');
const getUptoken = (params) => wxRequest(params, Mall + '/uptokens.json');
const getVoiceList2 = (params) => {
  let lllll = [
    {
      "marketPrice": 328,
      "saleCount": 0,
      "businessName": "广州素洁服饰公司",
      "businessId": "4028800457b6cf7a0157b7998c39001d",
      "thumLogo": "http://qn-qn-echo-image-cdn.app-echo.com/FihFH8LDnuyoy3DT29RCoqQrRmwn?imageMogr2/auto-orient/quality/100|imageMogr2/thumbnail/!300x300r/gravity/Center/crop/300x300/dx/0/dy/0",
      "title": "2018女士春季花形衬衫上衣",
      "evaluateCount": 0,
      "price": 126,
      "name": "深林之声",
      "node": "自然",
      "stockNum": 150,
      "wholePrice": 119,
      "logo": "http://sujiefs.com/upload/images/20180125/201801251646441664583.jpg",
      "source": 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      "id": "2c9257a16126d14701612c8321ef013e"
    },
    {
      "marketPrice": 479,
      "saleCount": 5,
      "businessName": "广州素洁服饰公司",
      "businessId": "4028800457b6cf7a0157b7998c39001d",
      "thumLogo": "https://al-qn-echo-image-cdn.app-echo.com/FiervnhAcPEvQOn3zhaKOlIzzWEB?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100",
      "title": "2018女士优雅时尚防真丝面料衬衫",
      "evaluateCount": 0,
      "price": 128,
      "name": "奇葩的雄狮之吼",
      "stockNum": 300,
      "wholePrice": 118,
      "node": "自然",
      "logo": "http://sujiefs.com/upload/images/20180125/201801251418536724109.jpg",
      "source": 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      "id": "2c9257a16126d14701612c032f360110"
    },
    {
      "marketPrice": 529,
      "saleCount": 3,
      "businessName": "广州素洁服饰公司",
      "businessId": "4028800457b6cf7a0157b7998c39001d",
      "thumLogo": "http://qn-qn-echo-image-cdn.app-echo.com/Fi0kOU7PN6q-y2KGhu0urOM5uGFI?imageMogr2/auto-orient/quality/100|imageMogr2/thumbnail/!300x300r/gravity/Center/crop/300x300/dx/0/dy/0",
      "title": "2018雪纺女士春季印花衬衣T18C068",
      "evaluateCount": 0,
      "price": 128,
      "name": "亮亮之鬼畜",
      "node": "搞笑",
      "stockNum": 300,
      "wholePrice": 118,
      "logo": "http://sujiefs.com/upload/images/20180126/201801261154140274561.jpg",
      "source": 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      "id": "2c9257a16126d147016130c94aa901e6"
    },
    {
      "marketPrice": 368,
      "saleCount": 6,
      "businessName": "广州素洁服饰公司",
      "businessId": "4028800457b6cf7a0157b7998c39001d",
      "thumLogo": "https://al-qn-echo-image-cdn.app-echo.com/FiervnhAcPEvQOn3zhaKOlIzzWEB?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100",
      "title": "2018女士春季小碎花衬衫T18C079",
      "evaluateCount": 0,
      "price": 129,
      "name": "淅淅沥沥",
      "node": "自然",
      "stockNum": 150,
      "wholePrice": 119,
      "logo": "http://sujiefs.com/upload/images/20180127/201801271610459640091.jpg",
      "source": 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      "id": "2c9257a16126d147016136b6f22f0362"
    },
    {
      "marketPrice": 988,
      "saleCount": 6,
      "businessName": "广州素洁服饰公司",
      "businessId": "4028800457b6cf7a0157b7998c39001d",
      "thumLogo": "https://al-qn-echo-image-cdn.app-echo.com/FiervnhAcPEvQOn3zhaKOlIzzWEB?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100",
      "title": "2018春季条纹女士连衣裙 D18C071",
      "evaluateCount": 0,
      "price": 268,
      "name": "听一听小奶音的呼喊 D18C071",
      "stockNum": 150,
      "node": "生活",
      "wholePrice": 238,
      "logo": "http://sujiefs.com/upload/images/20180127/201801271115216801676.jpg",
      "source": 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      "id": "2c9257a16126d1470161359fc27502a1"
    }
  ]
  return {
    data: {
      code: 0,
      msg: "",
      result: lllll
    }
  }
}

const saveTopic = (params) => {
  params = Object.assign({}, params, {method: 'POST'});
  return wxRequest(params, apiMall + '/topics');
}

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => {
  params = Object.assign({}, params, {method: 'POST'});
  return wxRequest(params, apiMall + "/wechat/login");
}
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');

//查询商品详情信息
const getSubject = (params) => wxRequest(params, apiMall + '/topics/'+params.path.id + '.json');
const getSubject2 = (params) => {
  return {
    data: {
      code: 0,
      msg: "",
      result: {
        id: 111,
        cover: "http://img-cdn2.luoo.net/pics/vol/5a71eb60ac679.jpg!/fwfh/640x452",
        title: '对面的你，如何能不忧愁fasdffffffffffffff发顺丰的发大水发斯蒂芬',
        source: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        info: `这是我的一段简介描述，与故事，很高兴见到你们！！`
      }
    }
  }
}

const createSubject = (params) => {
  return {
    data: {
      code: 0,
      msg: "",
      result: {
        id: 111,
        cover: "http://img-cdn2.luoo.net/pics/vol/5a71eb60ac679.jpg!/fwfh/640x452",
        title: '对面的你，如何能不忧愁fasdffffffffffffff发顺丰的发大水发斯蒂芬',
        source: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        info: `这是我的一段简介描述，与故事，很高兴见到你们！！`
      }
    }
  }
}
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData');

//支付前生成订单
const saveByCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/api/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/list');

//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate');

//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/operation');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
// const getBannerList = (params) => wxRequest(params, apiMall + '/api/adverts/list');
const getBannerList = (params) => {
  return {
    data: {
      code: 0,
      msg: "",
      result: [
        {
          id: 1,
          targetUrl: "http://www.baidu.com",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518178404867&di=a4c9af133cda4f78612692f2afa08309&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3Debe5980105e939014902803e4bec54f9%2Fbd3eb13533fa828b3122bdc2f91f4134970a5a89.jpg"
        },
        {
          id: 2,
          targetUrl: "https://hidden-meadow-49311.herokuapp.com/topics/2",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518178432788&di=b5eb23214c3e47d810b667aab63ed886&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F96dda144ad3459828f97f79506f431adcbef8493.jpg"
        },
        {
          id: 3,
          targetUrl: "https://hidden-meadow-49311.herokuapp.com/topics/9",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518178458996&di=68cc81bad32a3b2f192385f8bcafce1f&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Flvpics%2Fw%3D1000%2Fsign%3D828bed794210b912bfc1f2fef3cdfe03%2F5bafa40f4bfbfbede4fe9cbd7df0f736aec31f48.jpg"
        },
        {
          id: 4,
          targetUrl: "https://hidden-meadow-49311.herokuapp.com/topics/8",
          cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518178493699&di=b99b838927ee325225e576d62e8fc593&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Flvpics%2Fw%3D1000%2Fsign%3D84372791950a304e5222a4fae1f8a686%2F0824ab18972bd4074cd2806879899e510fb30909.jpg"
        }
      ]
    }
  }
}

module.exports = {
  hostGoodsList,
  getVoiceList, getHomeDisvocerList,
  getGoodsList,
  getNodeList,
  getSubject,
  getUptoken,
  saveTopic,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart, cartList, cartCheck, cartCheckAll, cartDel, cartUpdateNum,
  preOrder,refundApply,
  pointInfo,
  browseInfo,addBrowser,delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword, searchKeywordList, clearSearchKeyword,
  getMyOrderList, saveByCart,toPay,
  rootCtegoryList, childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo, goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,getPayOrderDetail,
  getBannerList,
  getSignDate
}
