
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'w-IEfjDTi9c',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player2 = new YT.Player('player2', {
            height: '390',
            width: '640',
            videoId: 'w-IEfjDTi9c',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
          player3 = new YT.Player('player3', {
            height: '390',
            width: '640',
            videoId: 'w-IEfjDTi9c',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
          player4 = new YT.Player('player4', {
            height: '390',
            width: '640',
            videoId: 'w-IEfjDTi9c',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
      }

     
      function onPlayerReady(event) {
        event.target.playVideo();
      }

    
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
