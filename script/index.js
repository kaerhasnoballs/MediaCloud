/**
 * Created by houmx.
 * Created on 2016/6/27.
 * Creator's MailAddress: work_for_fe@163.com
 * Description:
 */
define(['jquery'], function(){
    var swiper2 = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        paginationType: 'progress',
        mousewheelControl: true
    });
});