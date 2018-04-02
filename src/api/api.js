import wepy from 'wepy';

let env = "-test" //-dev 或者 -test

// const voice = 'http://10.58.84.196:3000'
const voice = 'https://voicer-2018.herokuapp.com'

const voiceApi = voice + '/api/v3'

const wxRequest = async(params = {}, url) => {
  let needLoading = params.needLoading || true
  if (needLoading) {
    wepy.showLoading({
      title: "加载中..." || params.loadingText,
      mask: true
    })
  }

  let data = params.query || {};
  let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: { 'Content-Type': 'application/json' },
  });

  if (res.statusCode != 200) {
    wepy.showToast({
      title: JSON.stringify(res),
      icon: 'none'
    })
  }

  if (needLoading) {
    wepy.hideLoading()
  }
  return res.data;
};

//查询banner列表
const getBannerList = (params) => wxRequest(params, voiceApi + '/topics.json');
const getTopicList = (params) => wxRequest(params, voiceApi + '/topics.json');
const getNodeList = (params) => wxRequest(params, voiceApi + '/nodes.json');

const getTopic = (params) => wxRequest(params, voiceApi + '/topics/'+params.path.id + '.json');

const saveTopic = (params) => {
  params = Object.assign({}, params, {method: 'POST'});
  return wxRequest(params, voiceApi + '/topics');
}

const getUptoken = (params) => wxRequest(params, voice + '/uptokens.json');

//微信的jscode换取jwt
const wxJsCode2Session = (params) => {
  params = Object.assign({}, params, {method: 'POST'});
  return wxRequest(params, voiceApi + "/wechat/login");
}

module.exports = {
  getTopicList,
  getTopic,
  saveTopic,
  getBannerList,
  getNodeList,
  getUptoken,
  wxJsCode2Session,
}
