webrtc-stats
========

#### Webrtc tools  ####
show webrtc connect stats with graphics

<img src="https://raw.githubusercontent.com/caohanghust/webrtc-stats/master/docs/fps.png">　　<img src="https://raw.githubusercontent.com/caohanghust/webrtc-stats/master/docs/speed.png">

#### Install ####
```bash
    npm install webrtc-stat
```

#### Usage ####
Javascript
```javascript
  import { Renderer } from 'webrtc-stat';
  const renderer = Renderer.fromPeerConnection(pc, interval);
  // pc: RTCPeerConnection interval: number
```

Html:
```html
<script src="https://raw.githubusercontent.com/caohanghust/webrtc-stats/master/dist/index.js"/>
<script>
    const renderer = Renderer.fromPeerConnection(pc, interval);
    // pc: RTCPeerConnection interval: number
</script>
```
