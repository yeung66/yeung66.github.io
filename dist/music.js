const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "芝麻开门",
        artist: "李幸倪",
        url: "http://music.163.com/song/media/outer/url?id=410338018.mp3",
        cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000tbCh12RdPbg.jpg?max_age=2592000",        
      },
      {
        name: "披星戴月",
        artist: '张敬轩',
        url: 'http://music.163.com/song/media/outer/url?id=188376.mp3',
        cover: 'http://p1.music.126.net/WZY0jAKYiRd0tL7wyJn7zg==/38482906984309.jpg?param=130y130',
      },
      // {//网易版权没了
      //   name: '重新找到你',
      //   artist: '农夫',
      //   url: 'http://music.163.com/song/media/outer/url?id=368756.mp3',
      //   cover: 'http://p2.music.126.net/yJ2MEAY81cKHWNFRiCeKOg==/94557999994101.jpg?param=130y130',
      // }
      {
        name: "我歌故我在",
        artist: '谢安琪',
        url: 'http://music.163.com/song/media/outer/url?id=5256471.mp3',
        cover: 'http://p2.music.126.net/i2P1ox4pWG9VLeoRFeUxfQ==/76965813961922.jpg',
      }
    ]
});