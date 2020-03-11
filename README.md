webrtc-stats
========

#### Webrtc tools  ####
show webrtc connect stats with graphics

<img src="https://pic.downk.cc/item/5e68b803e83c3a1e3a79b0c2.png">　　<img src="https://pic.downk.cc/item/5e68b81ce83c3a1e3a79bf00.png">

<img src="https://pic.downk.cc/item/5e68b81ce83c3a1e3a79bf04.png">

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
