if (window.addEventListener) {
    document.addEventListener('DOMContentLoaded', zongzi);
}
else if (window.attachEvent) {
    document.attachEvent('onDOMContentLoaded', zongzi);
}
function zongzi(){
    if(document.URL.indexOf('blacksheepwall')>=0 || document.URL.indexOf('post_id')<0){
        return;
    }

    const pages=$('.page-link');
    if(pages.length>0){
        $('.notice').remove();
        const lastPage=pages[pages.length-2].textContent;
        $('.pagination').remove();
        const postId=$('.notice_content').first().attr('data-id');
        $('.reply-lists').append('<div class="loading-info" style="text-align:center">正在加载回复</div>');//
        fetch('https://masiro.me/admin/post?post_id='+postId+'&page='+lastPage)
            .then(function(response) {
            return response.text();
        })
            .then(function(responsetext) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(responsetext, "text/html");
            $('.reply-lists').append($(doc).find(".notice").last());
            $('.loading-info').hide();
        })
            .catch(function(err) {
            console.log('Failed to fetch page: ', err);
            $('.loading-info').show();
            $('.loading-info').html('加载失败，请稍后重试');
        });
    }else{
        $('.notice').last().attr('class','last-notice');
        $('.notice').remove();
    }
}
