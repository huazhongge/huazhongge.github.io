function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}
function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/hikarunara.mp3',
            cover: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/hikarunara.jpg',
            lrc: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/darling.mp3',
            cover: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/darling.jpg',
            lrc: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}