/**
 * Created by houmx.
 * Created on 2016/6/24.
 * Creator's MailAddress: work_for_fe@163.com
 * Description: 模块配置主入口
 */
requirejs.config({
    baseUrl: './components',
    paths: {
        "jquery": "jquery/dist/jquery.min"
    }
});

requirejs(['jquery', '../script/user'], function($, user) {

});