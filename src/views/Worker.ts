const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: "foo" });
const urlstr = 'http://10.110.147.35:8001/machine-learning/1.0/cluster/app/pageStatics/reportSend';

// Respond to message from parent thread
ctx.addEventListener("message", (event) => {
    console.log("参数 =", event);
    // fetch 请求方式
    fetch(urlstr, {
        body: '', // must match 'Content-Type' header
        headers: {
            //   "Authorization": "Bearer " + eventData.token,
            "Content-Type": "application/json"
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function (data) {
            console.log(JSON.stringify(data));
            // console.table(data);
            console.log('%c webworker请求成功 fetch方式 开始收集数据', 'color:orange');
        }, function (err) {
            console.error(err);
        })
        .catch(error => console.error('Error:', error))
});