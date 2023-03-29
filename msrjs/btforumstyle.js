const btForumStyle=`<style>.forum {
  padding-top: 20px;
  display: none;
  margin: auto;
  overflow: auto;
    --color: rgb(255, 230, 230);
  background-color: white;
  background-image:
    radial-gradient(circle at 100% 150%, white 24%, var(--color) 24%, var(--color) 28%, white 28%, white 36%, var(--color) 36%, var(--color) 40%, transparent 40%, transparent),
    radial-gradient(circle at 0 150%, white 24%, var(--color) 24%, var(--color) 28%, white 28%, white 36%, var(--color) 36%, var(--color) 40%, transparent 40%, transparent),
    radial-gradient(circle at 50% 100%, var(--color) 10%, white 10%, white 23%, var(--color) 23%, var(--color) 30%, white 30%, white 43%, var(--color) 43%, var(--color) 50%, white 50%, white 63%, var(--color) 63%, var(--color) 71%, transparent 71%, transparent),
    radial-gradient(circle at 100% 50%, var(--color) 5%, white 5%, white 15%, var(--color) 15%, var(--color) 20%, white 20%, white 29%, var(--color) 29%, var(--color) 34%, white 34%, white 44%, var(--color) 44%, var(--color) 49%, transparent 49%, transparent),
    radial-gradient(circle at 0 50%, var(--color) 5%, white 5%, white 15%, var(--color) 15%, var(--color) 20%, white 20%, white 29%, var(--color) 29%, var(--color) 34%, white 34%, white 44%, var(--color) 44%, var(--color) 49%, transparent 49%, transparent);
  background-size: 200px 100px;
  background-position: top;
  background-repeat: repeat;
}

#magic-btn {
  width: 70px;
  height: 70px;
  position: fixed;
  right: 20px;
  top: 70px;
  z-index: 100;
  cursor: pointer;
}

.forum-head {
  margin-top: 20px;
  color: #833328;
  display: flex;
  height: 160px;
  width: 720px;
  background-color: #f9f9ff;
  border-radius: 12px;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.forum-name {
  line-height: 20px;
  display: block;
  font-size: 32px;
  font-weight: bold;
}

.forum-cover {
  width: 125px;
  height: 125px;
  background: url("https://masiro.me/images/encode/other-210922193623-dSLZ.jpg?quality=50");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  border: 3px solid #ad4234;
}

.forum-option {
  display: grid;
  height: 100px;
  width: 100px;
  justify-items: center;
  align-items: center;
  align-content: space-evenly;
}

.forum-option>f {
  line-height: 20px;
  color: white;
  font-size: 20px;
  background-color: rgb(233, 113, 113);
  border: 4px solid rgb(233, 113, 113);
  border-radius: 8px;
  padding: 5px 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s;
  cursor: pointer;
}

.forum-option>f:hover {
  background-color: transparent;
  color: rgb(233, 113, 113);
  box-shadow: none;
}

.forum-option>f:active {
  transform: scale(0.9);
}

.forum-info {
  height: 60px;
  display: grid;
  justify-items: center;
  align-content: space-around;
}

.forum-introduction {
  border-top: 2px solid #ad4234;
  width: 420px;
  font-size: 18px;
  text-align: center;
  display: grid;
  height: 70px;
  padding-top: 5px;
}

/*post*/

.forum-top {
  width: 720px;
  height: 260px;
  margin: auto;
}

.forum-posts {
  width: 720px;
  margin: auto;
  display: none;
  height: 890px;
}

.forum-post {
  margin-top: 10px;
  width: 720px;
  height: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: #f9f9ff;
  color: #833328;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  transition: 0.3s;
}

.forum-post:hover {
  box-shadow: none;
}

.forum-post>img {
  width: 80px;
  height: 100%;
}

.forum-content {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px;
  border-right: 2px solid #ad4234;
}

.forum-content>f {
  width: 420px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.forum-content>div {
  display: flex;
  justify-content: space-between;
}

.forum-post-type {
  color: #a66363;
  display: inline-block;
  padding: 1px;
  line-height: 16px;
  margin-right: 5px;
  font-size: 15px;
  border-radius: 4px;
  border: 2px solid #ad4234;
  box-sizing: border-box;
  font-weight: normal;
}

.forum-post-title {
  font-weight: bold;
  font-size: 20px;
}

.forum-preview {
  font-size: 16px;
}

.forum-post-info {
  font-size: 14px;
  color: rgb(94 94 94);
}

.forum-other {
  height: 70px;
  display: grid;
  align-items: center;
}

.forum-interact {
  color: black;
  display: flex;
  width: 180px;
  justify-content: space-around;
}

.forum-interact>div {
  font-size: 20px;
  width: 60px;
  display: grid;
  justify-items: center;
}

.forum-coin {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  max-width: 310px;
}

.forum-tip {
  width: 20px;
  height: 80px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}

.forum-top .forum-tip {
  background-color: rgb(233, 113, 113);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E %3Cpath fill='%23fff' d='M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z'%3E%3C/path%3E %3C/svg%3E");
}

.forum-posts[good="1"] .forum-tip,
.forum-posts .forum-post[good="1"] .forum-tip {
  background-color: #ffa2b0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E %3Cpath fill='%23fff' d='M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z'%3E%3C/path%3E %3C/svg%3E");
}

/*action*/

.forum-action {
  width: 720px;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
}

.forum-sort {
  display: flex;
  align-items: center;
  height: 42px;
  width: 450px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: #f9f9ff;
}

.forum-type {
  margin: 15px;
  height: 42px;
  display: flex;
}

.forum-type>label {
  box-sizing: border-box;
  height: 42px;
  display: block;
  padding: 10px;
  font-size: 20px;
  transition: 0.3s;
  line-height: 20px;
  cursor: pointer;
}

.forum-type>label:hover {
  background-color: rgba(0, 0, 0, 0.1)
}

.forum-search {
  padding-left: 14px;
  display: flex;
  align-items: center;
  height: 28px;
  border-left: 2px solid #ad4234;
}

.forum-search>input {
  text-align: center;
  padding: 2px;
  color: #ad4234;
  background: transparent;
  border: 0;
  border-bottom: 2.5px solid #ad4234;
  font-size: 18px;
  width: 100%;
  margin: 0px 5px 0px 10px;
}

.forum-search>input:focus {
  outline: none;
}

/*other*/

.forum-more {
  width: 720px;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.forum-more>f,
.forum-new {
  height: 42px;
  width: 160px;
  box-sizing: border-box;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 20px;
  background-color: rgb(233, 113, 113);
  border: 4px solid rgb(233, 113, 113);
  border-radius: 10px;
  padding: 7px 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.4s;
  cursor: pointer;
}

.forum-more>f:hover,
.forum-new:hover {
  background-color: transparent;
  color: rgb(233, 113, 113);
  box-shadow: none;
}

.forum-more>f:active,
.forum-new:active {
  transform: scale(0.9);
}

.forum-more>n {
  height: 36px;
  width: 36px;
  text-align: center;
  line-height: 36px;
  font-size: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  background-color: #f9f9ff;
  transition: 0.3s;
}

.forum-more>n:hover {
  transform: scale(1.1);
}

input[type="radio"] {
  display: none;
}

#p-normal:checked~[good="0"],
#p-good:checked~[good="1"] {
  display: block;
}

.forum-option>f,
.forum-new,
.forum-more>f {
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
}</style>`;

const btForumHtml=`<div class="forum-head">
  <f class="forum-cover"></f>
  <div>
    <div class="forum-info">
      <f class="forum-name">{{name}}</f>
      <div class="forum-detail">{{info}}</div>
    </div>
    <div class="forum-introduction">
      <f>真白萌 综合讨论区</f>
      <f>文明交流，勿争吵引战，谢绝政治等敏感话题。</f>
      <f>禁止无意义纯水。</f>
    </div>
  </div>
  <div class="forum-option">
    <f onclick="$('{{followBtn}}').click()">{{follow}}</f>
    <f onclick="$('.btn-share').click()">分享</f>
  </div>
</div>

<div class="forum-top">
  <div class="forum-post" onclick="window.open('/admin/post?post_id=24639')">
    <img src="https://masiro.me/images/encode/other-220625114057-k93R.jpg">
    <div class="forum-content">
      <f class="forum-post-title"><span class="forum-post-type">撒币</span>关于愚人节的老(?)活动</f>
      <f class="forum-preview">第一行留悬念</f>
      <div>
        <f class="forum-post-info">By 和祯_BT 两天前</f>
        <f class="forum-coin">T:300G N:30 P:10G R:80% L:8</f>
      </div>
    </div>
    <div class="forum-other">
      <div class="forum-interact">
        <div><f>评论</f><f>50</f></div>
        <div><f>浏览</f><f>248</f></div>
      </div>
    </div>
    <div class="forum-tip"></div>
  </div>
  <div class="forum-post" onclick="window.open('/admin/post?post_id=12120')">
    <img src="https://masiro.me/images/encode/other-210519134404-UUzE.jpg">
    <div class="forum-content">
      <f class="forum-post-title"><span class="forum-post-type">杂谈</span>【咖啡店版规】2022年9月13日更新</f>
      <f class="forum-preview">【咖啡店版规】2022年9月13日更新
        请务必首先阅读全站规定（点击此处）
        1. 禁止讨论政治敏感问题。话题发起人与接下话题的人一律封号处理。遇到这种情况请举报+直接通知管理。另外，请勿公开询问梯子或代理。</f>
      <div>
        <f class="forum-post-info">By 井EEEEEE 1年前</f>
        <f class="forum-coin"></f>
      </div>
    </div>
    <div class="forum-other">
      <div class="forum-interact">
        <div><f>评论</f><f>92</f></div>
        <div><f>浏览</f><f>4967</f></div>
      </div>
    </div>
    <div class="forum-tip"></div>
  </div>
  <div class="forum-post" onclick="window.open('/admin/post?post_id=22203')">
    <img src="https://masiro.me/images/encode/other-210603174802-hhTJ.png">
    <div class="forum-content">
      <f class="forum-post-title"><span class="forum-post-type">杂谈</span>如何快速提升等級？</f>
      <f class="forum-preview">
        當你要操作一台陌生的機器，第一件事情是去找操作說明......
        當你要玩一款沒玩過的遊戲，第一件事情是去找教學NPC/任務/關卡......</f>
      <div>
        <f class="forum-post-info">By 杏里｜✿ 8月前</f>
        <f class="forum-coin"></f>
      </div>
    </div>
    <div class="forum-other">
      <div class="forum-interact">
        <div><f>评论</f><f>163</f></div>
        <div><f>浏览</f><f>6074</f></div>
      </div>
    </div>
    <div class="forum-tip"></div>
  </div>
</div>

<div class="forum-action">
  <div class="forum-sort">
    <div class="forum-type">
      <label for="p-normal">全部</label>
      <label for="p-good">精华</label>
    </div>
    <div class="forum-search">
      <input id="forum-search" type="text" placeholder="帖名/用户" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="  width: 30px;height: 30px;">
        <path d="M0 0h512v512H0z" fill="#000000" fill-opacity="0"></path>
        <g transform="translate(0,0)">
          <path
            d="M333.78 20.188c-39.97 0-79.96 15.212-110.405 45.656-58.667 58.667-60.796 152.72-6.406 213.97l-15.782 15.748 13.25 13.25 15.75-15.78c61.248 54.39 155.3 52.26 213.968-6.407 60.887-60.886 60.888-159.894 0-220.78C413.713 35.4 373.753 20.187 333.78 20.187zm0 18.562c35.15 0 70.285 13.44 97.158 40.313 53.745 53.745 53.744 140.6 0 194.343-51.526 51.526-133.46 53.643-187.5 6.375l.218-.217c-2.35-2.05-4.668-4.17-6.906-6.407-2.207-2.206-4.288-4.496-6.313-6.812l-.218.22c-47.27-54.04-45.152-135.976 6.374-187.502C263.467 52.19 298.63 38.75 333.78 38.75zm0 18.813c-30.31 0-60.63 11.6-83.81 34.78-46.362 46.362-46.362 121.234 0 167.594 10.14 10.142 21.632 18.077 33.905 23.782-24.91-19.087-40.97-49.133-40.97-82.94 0-15.323 3.292-29.888 9.22-43-4.165 20.485.44 40.88 14.47 54.907 24.583 24.585 68.744 20.318 98.624-9.562 29.88-29.88 34.146-74.04 9.56-98.625-2.375-2.376-4.943-4.473-7.655-6.313 45.13 8.648 79.954 46.345 84.25 92.876 4.44-35.07-6.82-71.726-33.813-98.72-23.18-23.18-53.47-34.78-83.78-34.78zM176.907 297.688L42.094 432.5l34.562 34.563L211.47 332.25l-34.564-34.563zM40 456.813L24 472.78 37.22 486l15.968-16L40 456.812z"
            fill="#ad4234" fill-opacity="1"
            transform="translate(0, 0) scale(1, 1) rotate(-90, 256, 256) skewX(0) skewY(0)"></path>
        </g>
      </svg>
    </div>
  </div>
  <div class="forum-new" onclick="$('.post-btn').click()">发布新帖子</div>
</div>

<input type="radio" id="p-normal" name="post" checked>
<div class="forum-posts" good="0" page="1"></div>
<input type="radio" id="p-good" name="post">
<div class="forum-posts" good="1" page="1"></div>

<div class="forum-more">
  <f>没有上一页</f>
  <n>1</n>
  <f>下一页</f>
</div>

<div style="display:none">
  <div sample="post">
    <div class="forum-post" good="{{good}}" onclick="window.open('{{href}}')">
      <img src="{{avatar}}">
      <div class="forum-content">
        <f class="forum-post-title"><span class="forum-post-type">{{tag}}</span>{{title}}</f>
        <f class="forum-preview">{{detail}}</f>
        <div>
          <f class="forum-post-info">By {{name}} {{time}}</f>
          <f class="forum-coin">{{coin}}</f>
        </div>
      </div>
      <div class="forum-other">
        <div class="forum-interact">
          <div><f>评论</f><f>{{reply}}</f></div>
          <div><f>浏览</f><f>{{read}}</f></div>
        </div>
      </div>
      <div class="forum-tip"></div>
    </div>
  </div>
</div>`;
const machine = {
    add: (material, process, container) => machining(material, process, (model) => $(container).append(model)),
    pre: (material, process, container) => machining(material, process, (model) => $(container).prepend(model)),
    re: (material, process) => machining(material, process, (model) => $(material).html(model))
}

$('head').append(btForumStyle);
$('body').append('<img src="https://www.masiro.me/masiroImg/logo-small.ico" id="magic-btn">');
$('#app').append('<div class="forum" next="1"></div>');
preload();
$('#magic-btn').on('click', _ => gogogo());

function gogogo() {
    if (localStorage.getItem('forumStyle') == 'new') {
        localStorage.setItem('forumStyle', 'old');
        switchIt(false);
    }
    else {
        localStorage.setItem('forumStyle', 'new');
        if (!$('.forum-posts').html()) {
            working();
            $('.load-more').click();
            $('.refiny-load-more').click();
        };
        switchIt(true);
    }
}
async function machining(material, process, callback) {
    let model = $(material).html();
    for (let steps in process) model = model.replaceAll(`{{${steps}}}`, process[steps]);
    await callback(model);
}
function getForumHead() {
    let info = $('.follow-info').text();
    info = info.slice(0, info.indexOf('阅读') + 2);
    return {
        cover: $('.cover img').attr('src'),
        info: info,
        name: $('.forum-title ').text(),
        follow: $('.follow-btn').css('display') == 'none' ? '已关注' : '关注',
        followBtn: $('.follow-btn').css('display') == 'none' ? '.unfollow-btn' : '.follow-btn'
    }
    //暂且不需要获取置顶，暂且不会变更
}
function getPostInfo(i, post, good) {
    let info = {
        name: '.user-name',
        time: '.time',
        lv: '.user-lev',
        tag: '.post-tag',
        title: '.post-content>b',
        detail: '.content-text',
        coin: '.post-footer>span',
        reply: '.fa-comment-o',
        read: '.fa-book'
    }
    for (let i in info) info[i] = post.find(info[i]).text();
    info.reply = info.reply.slice(3).slice(0, -1);
    info.read = info.read.slice(3).slice(0, -1);
    info.good = post.find('.lanren1').length;
    info.href = $(good ? '.refiny-post-all>.post-box>a' : '.post-all>a').eq(i).attr('href');
    info.avatar = post.find('.head-pic').attr('src');
    return info;
}
function loadCss(href) {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = href;
    $('head').append(css);
}
function working() {
    machine.re('.forum-head', getForumHead());
    $('.post-all .post-box').each((i, p) => machine.add('[sample="post"]', getPostInfo(i, $(p)), '.forum-posts[good="0"]'));
    $('.refiny-post-all .post-box').each((i, p) => machine.add('[sample="post"]', getPostInfo(i, $(p), !0), '.forum-posts[good="1"]'));
}
function switchIt(i) {
    if (i) {
        $('.post-btn').fadeOut(250);
        $('#forum-head').fadeOut(250);
        $('#forum-body').fadeOut(250, _ => {
            $('.content').css('cssText', 'padding:0 !important');
            $('.content').css('min-height', 0);
            $('.forum').fadeIn(250);
        });
    }
    else {
        $('.forum').fadeOut(250, _ => {
            $('.content').css('cssText', '');
            $('.content').css('min-height', '');
            $('.post-btn').fadeIn(250);
            $('#forum-head').fadeIn(250);
            $('#forum-body').fadeIn(250);
        });
    }
}
function followDown() {
    let state = $('.follow-btn').css('display');
    let timer = setInterval(_ => ($('.follow-btn').css('display') != state) ? followChange(clearInterval(timer)) : state = $('.follow-btn').css('display'), 100);
}
function followChange() {
    $('.forum-option>f').eq(0).text($('.forum-option>f').eq(0).text() == '关注' ? '已关注' : '关注');
    $('.forum-option>f').eq(0).attr('onclick', $('.forum-option>f').eq(0).attr('onclick') == "$('.follow-btn').click()" ? "$('.unfollow-btn').click()" : "$('.follow-btn').click()");
}
function changePage(n) {
    let p = ($('.forum-posts[good="0"]').css('display') == 'block') ? '.forum-posts[good="0"]' : '.forum-posts[good="1"]';
    let t = ($('.forum-posts[good="0"]').css('display') == 'block') ? '.post-all .post-box' : '.refiny-post-all .post-box';
    let page = Number($(p).attr('page'));
    if (page + n > 0 && $('.forum').attr('next') == 1) {
        page += n;
        $('.forum').attr('next', 0);
        setTimeout(_ => $('.forum').attr('next', 1), 1000);
        if ($(t).length < page * 10) {
            $('.forum-more>f').attr('onclick', '');
            $('.forum-more>f').eq(1).css('cursor', 'wait');
            let nextpage = setInterval(_ => {
                if ($(t).length >= page * 10) {
                    clearInterval(nextpage);
                    changePage(n);
                    $('.forum-more>f').eq(0).attr('onclick', 'changePage(-1)');
                    $('.forum-more>f').eq(1).attr('onclick', 'changePage(1)');
                    $('.forum-more>f').eq(1).css('cursor', 'pointer');
                }
            }, 100);
        }
        else {
            $(p).html('');
            $(p).attr('page', page);
            $('.forum-more>f').eq(0).text((page == 1)?'没有上一页':'上一页');
            let good = ($('.forum-posts[good="1"]').css('display') == 'block');
            for (let i = page * 10 - 10; i < page * 10; i++) machine.add('[sample="post"]', getPostInfo(i, $(t).eq(i), good), p);
            good ? $('.refiny-load-more').click() : $('.load-more').click();
            $('.forum-more>n').text(page);
        }
    }
}
$('.forum-more>f').eq(0).click(function() {
    changePage(-1);
});
$('.forum-more>f').eq(1).click(function() {
    changePage(1);
});
function preload() {
    $('.forum').html(btForumHtml);
    if (localStorage.getItem('forumStyle') == 'new') {
        working();
        switchIt(true);
        $('.load-more').click();
        $('.refiny-load-more').click();
    }
    $('.unfollow-btn').on('click', _ => followDown());
    $('.follow-btn').on('click', _ => followDown());
    $('.forum-type').on('click', _ => $('.forum-more>n').text($(($('.forum-posts[good="0"]').css('display') != 'block') ? '.forum-posts[good="0"]' : '.forum-posts[good="1"]').attr('page')));
    if ($('.forum-posts[good="0"]').css('display') == 'block') {
        Number($('.forum-posts[good="0"]').attr('page')) * 10
    }
    $('.forum-more>f').eq(1).hover(_ => {
        let p = ($('.forum-posts[good="0"]').css('display') == 'block') ? '.forum-posts[good="0"]' : '.forum-posts[good="1"]';
        let t = ($('.forum-posts[good="0"]').css('display') == 'block') ? '.post-all .post-box' : '.refiny-post-all .post-box';
        window.nexttt = setInterval(_ => $('.forum-more>f').eq(1).text((Number($(p).attr('page')) * 10 == $(t).length) ? '载入中...' : '下一页'), 100);
    }, _ => {
        $('.forum-more>f').eq(1).text('下一页');
        clearInterval(window.nexttt);
    });
}
