const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    audio: [
      {
        name: "重新找到你",
        artist: '农夫',
        url: 'https://sharefs.yun.kugou.com/202005272202/d9459392d5aea259fc4604866e9951a5/G186/M02/01/03/WocBAF5cicqAfQj8ADW1Tfc7vhk331.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Np3BR2nsnTx_1.jpg?max_age=2592000',
      },
      {
        name: "恋爱为何物 (Live)",
        artist: 'AGA 江海迦',
        url: 'https://sharefs.yun.kugou.com/202005272204/680df2577087f529e1583c4797b9ada5/G083/M07/12/19/84YBAFhPiASASOUBAD_Kc2C8MrE230.mp3',
        cover: 'http://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg',
      },
      {
        name: "什么都不做",
        artist: '陈奂仁、欧阳靖',
        url: 'https://sharefs.yun.kugou.com/202005272213/5ed9091ad224285f76f2b24fa92958ce/G204/M00/1E/17/DA4DAF5ihSSAGlwvADJwCrgxrOA164.mp3',
        cover: 'http://p2.music.126.net/Vi7R3i38Xze2e7CyZNZLXg==/115448720917228.jpg',
      }
    ]
});