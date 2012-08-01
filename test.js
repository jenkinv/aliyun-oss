var ossAPI = require('./client.js');

var option = {
	accessId:'',
	accessKey:''
};

var oss = new ossAPI.OssClient(option);

// oss.listBucket(function(err, list) {
// 	console.log(list['Buckets']);
// });

oss.putObject('letsgo','test/chat-0.0.0-27.tgz','/home/jen/chat-0.0.0-27.tgz', function(err){
	console.log('upload file callback, err:' + err);
});

oss.getObject('letsgo','chat-0.0.0-27.tgz', '/home/jen/chat.tgz', function(err) {
  console.log('download file callback, err' + err);
});
