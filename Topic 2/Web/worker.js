var timer = null;
var currentTotal = 0;
var stepValue = 0;

self.onmessage = function (event) {
    var data = event.data;
    var num1 = Number(data.num1);
    var num2 = Number(data.num2);

    stepValue = num2;
    // Tính tổng ban đầu
    currentTotal = num1 + num2;

    // Gửi kết quả đầu tiên về cho main script
    self.postMessage(currentTotal);

    // Cứ sau 5 giây cộng dồn tiếp với number 2 và gửi kết quả về
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
        currentTotal += stepValue;
        self.postMessage(currentTotal);
    }, 5000);
};