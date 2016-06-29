/**
 * Created by houmx.
 * Created on 2016/6/27.
 * Creator's MailAddress: work_for_fe@163.com
 * Description:
 */
define(function(require, exports, module) {
    var index = {};

    index.init = function(){
        var swiper1 = new Swiper('.swiper-container-h', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true
        });

        $(".tabs ul li").on("click", function(e){
            var index = $(this).index();
            $(".tab-content").hide().eq(index).show();
            $(this).addClass("selected").siblings("li").removeClass("selected");
        });

        $(".tabs ul li").eq(0).click();
    };
});