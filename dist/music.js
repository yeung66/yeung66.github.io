const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "披星戴月",
        artist: '张敬轩',
        url: 'http://music.163.com/song/media/outer/url?id=188376.mp3',
        cover: 'http://p1.music.126.net/WZY0jAKYiRd0tL7wyJn7zg==/38482906984309.jpg?param=130y130',
      },
      {
        name: '重新找到你',
        artist: '农夫',
        url: 'http://music.163.com/song/media/outer/url?id=368756.mp3',
        cover: 'http://p2.music.126.net/yJ2MEAY81cKHWNFRiCeKOg==/94557999994101.jpg?param=130y130',
      }
    ]
});