if (window.addEventListener) {
    document.addEventListener('DOMContentLoaded', zongzi);
}
else if (window.attachEvent) {
    document.attachEvent('onDOMContentLoaded', zongzi);
}
function zongzi(){
    if(document.URL.indexOf('post_id')<0){
        return;
    }
    $('d').remove();
    if(document.URL.indexOf('blacksheepwall')>=0){
        return;
    }
    $('.reply_list').each(function() {
        $(this).find('.reply').last().attr('class','last-reply');
    });
    $('.reply').remove();
    $('.show_reply_list').remove();
    $('.last-reply').attr('class','reply');
    $('.notice_details').css('max-height', '');
}
