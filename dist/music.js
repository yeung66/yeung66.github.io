const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "芝麻开门",
        artist: "李幸倪",
        url: "http://111.47.194.11/amobile.music.tc.qq.com/C400001vbxMc4avrUg.m4a?guid=8029882072&vkey=3B95ADE09F9E5CFBDD9C45CE63F0B029E4C236C5EC5DCB1BFC764C359227B62A838CB1119FBDCF3D86FAC3086210429EDC103941010AA085&uin=2628&fromtag=66",
        cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000tbCh12RdPbg.jpg?max_age=2592000",        
      },
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