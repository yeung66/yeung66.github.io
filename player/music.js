const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    audio: [
      {
        name: "重新找到你",
        artist: '农夫',
        url: 'http://resources.scottyeung.top/music/重新找到你.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Np3BR2nsnTx_1.jpg?max_age=2592000',
      },
      {
        name: "恋爱为何物 (Live)",
        artist: 'AGA 江海迦',
        url: 'http://resources.scottyeung.top/music/恋爱为何物.mp3',
        cover: 'http://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg',
      },
      {
        name: "什么都不做",
        artist: '陈奂仁、欧阳靖',
        url: 'http://resources.scottyeung.top/music/%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%81%9A.mp3',
        cover: 'http://p2.music.126.net/Vi7R3i38Xze2e7CyZNZLXg==/115448720917228.jpg',
      },
      {
        name: '绵绵（LIVE）',
        artist: 'AGA 江海迦',
        url: 'http://resources.scottyeung.top/music/绵绵.mp3',
        cover: 'http://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg'
      },
      {
        name: '让我享受谈恋爱',
        artist: '连诗雅',
        url: 'http://resources.scottyeung.top/music/让我享受谈恋爱.mp3',
        cover: 'http://p1.music.126.net/L7MFKvbFLu3cQ4CXitP0ow==/4431031859949173.jpg'
      },
      {
        name: '愁人节（Live）',
        artist: '谢安琪',
        url: 'http://resources.scottyeung.top/music/愁人节.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/pass/softhead/100/20200419/20200419211646129.jpg'
      }
    ]
});