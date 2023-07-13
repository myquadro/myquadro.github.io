(function() {
    if(document.URL.indexOf('post_id')<0){return;}
    const layuiCardCss=`@font-face {
    font-family: 'masiroweb';
    src:
    url('https://masiro.me/masirowebfont/MSR-WebFont.woff') format('woff'),
    url('https://masiro.me/masirowebfont/MSR-WebFont.woff2') format('woff2'),
    url('https://masiro.me/masirowebfont/MSR-WebFont.ttf') format('truetype');
}
.layui-card {
    margin-left:15px;
    max-width: 350px;
    flex: 1 1 350px;
    margin-bottom: 0px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    cursor: pointer;
    border-radius: 5px;
    font-size: 10px;
    height: 180px;
    display: grid;
    grid-template-rows: 15% auto 30%;
}
.layui-card-header {
    position: relative;
    height: 42px;
    line-height: 42px;
    padding: 0 15px;
    border-bottom: 1px solid #f6f6f6;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
    overflow: hidden;
    font-weight: 800;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}
.layui-card-body {
    margin-top:5px;
    position: relative;
    padding: 10px 15px;
    line-height: 24px;
}
.layui-card-footer {
    display: grid;
    grid-template-columns: 20% auto;
}
.layui-card:hover{
    box-shadow: 0px 0px 10px 7px rgb(3 115 249 / 32%);
}
.num {
    position: relative;
    left: -5px;
    color: #711083;
    font-size: 10px;
    -webkit-transform: scale(0.9);
    line-height: 6rem;
    text-align: center;
}
.btn_dj {
    display:flex;
    color: #9baacf;
    background: none;
    border: none;
    margin-right: 5%;
    width: 8rem;
    height: 3rem;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white;
    justify-self: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
}
.btn_dj:hover {
    color: #6d5dfc;
}
.btn_dj:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem white;
}
.rarity{
    font-family: masiroweb;
}
.rarity:after{
    content: "UR";
    margin-left:5px;
    color: OrangeRed;
    font-family: masiroweb;
}`;
    const layuiCard=`<p>如果您翻译的小说符合下列条件之一，可申请加入收藏品：<br> 1.文库化,<br> 2.漫画化,<br> 3.动画化,<br> 4.完结,<br> 5.您想起高兴的事情……</p><div class="layui-card">
    <div class="layui-card-header">一个例子</div>
    <div class="layui-card-body">一段文案，和原作相关，100字以内且最好不多于3行<br>
    ——摘自<a>《一些收藏品文案编写须知》</a>
    <p class="rarity">RARITY 0</p></div>
    <span class="layui-card-footer"><span class="num">数量:0</span>
    <button class="btn_dj">一个按钮</button></span></div><p> </p>`;
    $('style').first().append(layuiCardCss);
    $('.top-notice').append(layuiCard);
    $('.notice_content').css('overflow','visible');
    $('.btn_dj').click(function(){tfAll()});
})();

function tfAll(){
    const tfNum= Math.random()*3;
    $('div').each(function(index){
        const tfPara=(index+tfNum)%3-1;
        $(this).css('transform','rotate('+tfPara+'deg)');
    });
}
