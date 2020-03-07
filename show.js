$(document).ready(function () {
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return 1; //返回参数值
    }

    page = getUrlParam("page");
    // page = 0

    function getJson() {
        $.getJSON("json/" + page + ".json", function success(data) {
            console.log(data)
            $("#p_question").html(data['question'])
            $("#div_answer").html(data['answer'])
        })
    }

    getJson()


});