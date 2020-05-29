const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    audio: [
      {
        name: "重新找到你",
        artist: '农夫',
        url: 'https://gitee.com/yeungyeah/resources/raw/master/music/重新找到你.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Np3BR2nsnTx_1.jpg?max_age=2592000',
      },
      {
        name: "恋爱为何物 (Live)",
        artist: 'AGA 江海迦',
        url: 'https://gitee.com/yeungyeah/resources/raw/master/music/恋爱为何物.mp3',
        cover: 'http://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg',
      },
      {
        name: "什么都不做",
        artist: '陈奂仁、欧阳靖',
        url: 'https://gitee.com/yeungyeah/resources/raw/master/music/%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%81%9A.mp3',
        cover: 'http://p2.music.126.net/Vi7R3i38Xze2e7CyZNZLXg==/115448720917228.jpg',
      },
      {
        name: '绵绵（LIVE）',
        artist: 'AGA 江海迦',
        url: 'https://gitee.com/yeungyeah/resources/raw/master/music/绵绵.mp3',
        cover: 'http://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg'
      }
    ]
});