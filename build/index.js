var table = null;
var form = null;
$(function() {
    $(window).on("message onmessage", function(e) {
        var msg = e.originalEvent.data;
        if (msg) {
            var res = JSON.parse(msg);
            if(res.id =='showLoading') {
                layer.load(2);
            }if(res.id =='hideLoading') {
                //关闭所有加载中
                layer.closeAll('loading');
            }
        }
    });
});