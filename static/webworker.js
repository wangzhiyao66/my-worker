// // import { environments } from '../../environments/environment';
// onmessage = function (event) {
//   // postmessage的参数
//   const eventData = {
//     token: event.data.token,
//     requestData: event.data,
//     url: event.data.url,
//   }

//   // console.log('worker 参数', event);
//   // console.log(navigator)
//   // console.log(location)  // 与window.location 相同，但都是只读的
//   // console.log('XMLHttpRequest构造函数', XMLHttpRequest);

//   // importScripts('./otherworker.js'); // 用来加载当前Worder所用到的外部js代码

//   // 请求地址 在 worker.service.ts 里面

//   const sleep = function (time) {
//     /**
//      *
//      * @param {*} data 请求参数
//      * @param {*} callback 请求成功回掉函数
//      */
//     var xhr = function (data, callback) {
//       // console.log('worker 参数', data);
//       const workerdata = JSON.parse(JSON.stringify(data));
//       if (workerdata) {
//         delete workerdata.token;
//         delete workerdata.url;
//       }
//       // fetch 请求方式
//       fetch(eventData.url, {
//         body: JSON.stringify(workerdata), // must match 'Content-Type' header
//         headers: {
//           "Authorization": "Bearer " + eventData.token,
//           "Content-Type": "application/json;charset=UTF-8"
//         },
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       })
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           throw new Error('Network response was not ok.');
//         })
//         .then(function (data) {
//           // console.log(JSON.stringify(data));
//           // console.table(data);
//           console.log('%c webworker请求成功 fetch方式 开始收集数据', 'color:orange');
//           callback();
//         }, function (err) {
//           console.error(err);
//         })
//         .catch(error => console.error('Error:', error))
//     }

//     return new Promise(function (resolve, reject) {
//       const obj = {
//         data: 'ok',
//         type: 'worker'
//       };

//       xhr(eventData.requestData, function () {
//         resolve(obj);
//       });
//     });
//   };

//   // 立即执行的 async 函数
//   (async () => {
//     const result = await sleep(event.data);
//     postMessage(result);
//     // console.log('在使用importScripts()的文件中调用：' + kk());
//     close();
//   })();
// };
function log() {
    console.log('123', '测试');
}
// 立即执行的 async 函数
(async () => {
    const result = await log();
    postMessage(result);
    // console.log('在使用importScripts()的文件中调用：' + kk());
    close();
})();