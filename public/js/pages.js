//首页左侧菜单选中效果
$('.silder li').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
})
//tab切换效果
$('.tabs').each(function() {
	var i = $(this).index();
	$(this).find('.tab').addClass("tab_" + i).find('li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');

		$(this).parents('.tab').siblings('.tab-content').children('div').eq($(this).index()).show().siblings().hide();
	});

});

//$('.tabs').each(function(){
//	$(this).find('tab').each(function(){
//		$(this).find('li').on('click',function({
//			$(this).addClass('active').siblings().removeClass('active');
//			$('.tab').siblings('.tab-content').children('div').eq($(this).index()).addClass('active').siblings().removeClass('active');
//		}))
//	})
//});
//
//appModule.controller('tabsController', function($scope) {
//	
//	
//  $('.tabs').each(function(){
//			$(this).find('tab').each(function(){
//				$(this).find('li').on('click',function({
//					$(this).addClass('active').siblings().removeClass('active');
//					$('.tab').siblings('.tab-content').children('div').eq($(this).index()).addClass('active').siblings().removeClass('active');
//				}))
//			})
//		});
//});
