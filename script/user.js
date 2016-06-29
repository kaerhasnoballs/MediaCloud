/**
 * Created by houmx.
 * Created on 2016/6/27.
 * Creator's MailAddress: work_for_fe@163.com
 * Description:
 */
define(['jquery'], function(){
    $(".addCard").on("click", function(e){
        window.location.href = "adDtls.html";
    });

    var swiper2 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
});