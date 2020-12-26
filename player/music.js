const baseUrl = 'https://yeungyeah.gitee.io/resources/music/';

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    audio: [
      {
        name: "重新找到你",
        artist: '农夫',
        url: baseUrl + '重新找到你.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Np3BR2nsnTx_1.jpg?max_age=2592000',
      },
      {
        name: "恋爱为何物 (Live)",
        artist: 'AGA 江海迦',
        url: baseUrl + '恋爱为何物.mp3',
        cover: 'https://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg',
      },
      {
        name: "什么都不做",
        artist: '陈奂仁、欧阳靖',
        url: baseUrl + '%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%81%9A.mp3',
        cover: 'https://p2.music.126.net/Vi7R3i38Xze2e7CyZNZLXg==/115448720917228.jpg',
      },
      {
        name: '绵绵（LIVE）',
        artist: 'AGA 江海迦',
        url: baseUrl + '绵绵.mp3',
        cover: 'https://p2.music.126.net/WsN6MgeqY0sbmRZFO1BxXw==/19078725765177629.jpg'
      },
      {
        name: '让我享受谈恋爱',
        artist: '连诗雅',
        url: baseUrl + '让我享受谈恋爱.mp3',
        cover: 'https://p1.music.126.net/L7MFKvbFLu3cQ4CXitP0ow==/4431031859949173.jpg'
      },
      {
        name: '愁人节（Live）',
        artist: '谢安琪',
        url: baseUrl + '愁人节.mp3',
        cover: 'https://singerimg.kugou.com/uploadpic/pass/softhead/100/20200419/20200419211646129.jpg'
      },
      {
        name: '高山低谷',
        artist: '林奕匡',
        url: baseUrl + '高山低谷.mp3',
        cover: 'https://singerimg.kugou.com/uploadpic/pass/softhead/100/20200303/20200303093045359.jpg'
      },
      {
        name: '天黑黑',
        artist: '孙燕姿',
        url: baseUrl + '天黑黑.mp3',
        cover: 'https://p2.music.126.net/p_5BNWuwtBJ_Fl5gClx5Pg==/101155069756398.jpg'
      },
      {
        name: '逆光',
        artist: '孙燕姿',
        url: baseUrl + '逆光.mp3',
        cover: 'https://p2.music.126.net/PehnaQ-BaAXeQg1d5s7leA==/6635552673699715.jpg'
      },
      {
        name: '眠眠',
        artist: '农夫',
        url: baseUrl + '眠眠.mp3',
        cover: 'https://p2.music.126.net/hozpR0eQyYYFamcg5Byatg==/5716360952882127.jpg'
      },
      {
        name: '不吐不快',
        artist: '张敬轩',
        url: baseUrl + '不吐不快.m4a',
        cover: 'https://p2.music.126.net/MbAMGidLob2YUEsw732PXw==/18815942488049510.jpg'
      },
      {
        name: '和每天讲再见',
        artist: '李幸倪',
        url: baseUrl + '和每天讲再见.m4a',
        cover: 'https://p2.music.126.net/owrXi0vV2HoAv_wqS0IBNw==/18856624416421399.jpg'
      },
      {
        name: '黑洞里',
        artist: '方大同',
        url: baseUrl + '黑洞里.mp3',
        cover: 'https://p1.music.126.net/1U1iWW1z8gypkPFbPe_H-g==/72567767445970.jpg'
      },
      {
        name: '随风而来随风而去',
        artist: '李幸倪',
        url: baseUrl + '随风而来随风而去.mp3',
        cover: 'https://p2.music.126.net/D2zG1VVrUmv-AKBJzbVCJw==/18854425393133313.jpg'
      },
      {
        name: '难得咁人齐',
        artist: '农夫',
        url: baseUrl + '难得咁人齐.mp3',
        cover: 'https://p1.music.126.net/hRdVJ061mER5wTlSB-CU8A==/109951164078381042.jpg'
      },
      {
        name: '好不容易',
        artist: '方大同',
        url: baseUrl + '好不容易.mp3',
        cover: 'https://p1.music.126.net/fmt8sEMrpytMR9rJzVCovw==/42880953496238.jpg'
      },
      {
        name: '泡沫',
        artist: '邓紫棋',
        url: baseUrl + '泡沫.mp3',
        cover: 'https://p2.music.126.net/FFCQQMYJA3n2Ig9bS6Lh2g==/5890083790192984.jpg'
      },
      {
        name: '无菇朋友',
        artist: '方大同',
        url: baseUrl + '无菇朋友.mp3',
        cover: 'https://p1.music.126.net/fmt8sEMrpytMR9rJzVCovw==/42880953496238.jpg'
      },
      {
        name: '男孩像你',
        artist: '薛凯琪',
        url: baseUrl + '男孩像你.mp3',
        cover: 'https://p1.music.126.net/eVNxevw1W5lyBmdq18tMJw==/109951163639097093.jpg'
      }
    ]
});