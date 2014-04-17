$(document).ready(function(){
    $('.menu_drop > ul > li').click(function(){
        // Для мобильной версии
        if($(this).parents('div.menu_drop').hasClass('visible')) {
            $(this).toggleClass('active').siblings('li.active').removeClass('active');
        } 
        // Для полной версии
        else {
            $(this).addClass('active').siblings('li.active').removeClass('active');  
            // add class if menu has submenu
            if ($(this).children('ul').length > 0) {
                $(this).parents('div.menu_drop').addClass('has_submenu');
            } else {
                $(this).parents('div.menu_drop').removeClass('has_submenu');
            }
            
//            $(this).parents('div.menu_drop').removeClass('has_submenu_level2');
        }
    })
    $('.menu_drop > ul > li > ul > li').click(function(){
        // Для мобильной версии
        if($(this).parents('div.menu_drop').hasClass('visible')) {
            $(this).toggleClass('active').siblings('li.active').removeClass('active');
//            return false;
        } 
        // Для полной версии
        else {
            $(this).addClass('active').siblings('li.active').removeClass('active');  
            // add class if menu has submen
            if ($(this).children('ul').length > 0) {
                $(this).parents('div.menu_drop').addClass('has_submenu_level2');
            } else {
                $(this).parents('div.menu_drop').removeClass('has_submenu_level2');
            }
        }
    });
    
    // first display
    if ($('.menu_main .active').children('ul').length > 0) {
        $('.menu_main').addClass('has_submenu');
    }
    if ($('.menu_main .active ul li.active').children('ul').length > 0) {
        $('.menu_main').addClass('has_submenu_level2');
    }
});

// Show / hide block
function toggleBlock(block, init) {
    $(block).toggleClass('visible');
    $('.visible').not(block).removeClass('visible');
    $(init).toggleClass('active').siblings('.active').removeClass('active');
    return false;
}