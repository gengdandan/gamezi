
//// 创建游戏类
//function game(){
//  this.arr=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//  this.len=3,
//  this.currentletter=[]//当前的字母
//  this.currentspan=[]//当前文档中的span
//  this.cw=document.documentElement.clientWidth,
//  this.ch=document.documentElement.clientHeight
//
//  this.t
//  this.speed=3
//}
//game.prototype={
//  play:function(){
//    // alert(this._getRand(this,len))
//      this._createspan(this._getRand(this.len))
//        this._move()
//        this._key()
//  },
//  _getRand:function(num){
//    var newarr=[]
//    for(var i=0;i<num;i++){
//    var letter=this.arr[Math.floor(Math.random()*this.arr.length)]
//    while(this._checkletter(letter,this.currentletter)){
//          letter=this.arr[Math.floor(Math.random()*this.arr.length)]
//    }
//       this.currentletter.push(letter)
//       newarr.push(letter)
//  }
//  return newarr
//},
//
//  _checkletter:function(val,arr){
//  for(var i=0;i<arr.length;i++){
//      if(val==arr[i]){
//        return true
//      }
//    }
//    return false
//  },
//_createspan:function(arr){
//   var newarr=[]
//   for (var i = 0; i < arr.length; i++) {
//    var span=document.createElement("span")
//    span.innerHTML=arr[i]
//    var lefts=(100+Math.random()*(this.cw-200))
//    span.lefts=lefts
//    while(this._checkpos(span,this.currentspan)){
//      lefts=(100+Math.random()*(this.cw-200))
//      span.lefts=lefts
//    }
//    newarr.push(span)
//    this.currentspan.push(span)
//    span.style.cssText="position:absolute;left:"+lefts+"px;top:"+Math.random()*30+"px";
//    document.body.appendChild(span)
//   }
//   return newarr
//},
//_checkpos:function(ele,eleArr){
//  for(var i=0;i<eleArr.length;i++){
//      if(ele.lefts>eleArr[i].lefts-30&&ele.lefts<eleArr[i].lefts+30){
//        return true
//      }
//    }
//    return false
//},
//_move:function(){
//  var that=this
//    that.t=setInterval(function(){
//    for (var i = 0; i < that.currentspan.length; i++) {
//      var tops=that.currentspan[i].offsetTop+that.speed
//      that.currentspan[i].style.top=tops+"px"
//    if(tops>that.ch){
//        document.body.removeChild(that.currentspan[i])
//        that.currentspan.splice(i,1);
//        that.currentletter.splice(i,1)
//        that._createspan(that._getRand(1))
//      }
//    }
//   },60)
//},
//_key:function(){
//  var that=this
//    document.onkeydown=function(e){
//    var e=e||window.event
//    var letter=String.fromCharCode(e.keyCode)
//    for (var i = 0; i < that.currentspan.length; i++) {
//    if(letter==that.currentspan[i].innerHTML){
//      document.body.removeChild(that.currentspan[i])
//        that.currentspan.splice(i,1);
//        that.currentletter.splice(i,1)
//        that._createspan(that._getRand(1))
//     }
//    };
//   }
//},
// }
var coming=$(".coming")[0]
var come=$(".come")[0]
coming.onclick=function(){
    come.style.display="none"
// 创建游戏类
    function game(){
        this.arr=["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        this.imgs={A:"images/a.png",B:"images/b.png",C:"images/c.png",D:"images/d.png",E:"images/e.png",F:"images/f.png",G:"images/g.png",H:"images/h.png",I:"images/i.png",J:"images/j.png",K:"images/k.png",L:"images/l.png",M:"images/m.png",N:"images/n.png",O:"images/o.png",P:"images/p.png",Q:"images/q.png",R:"images/r.png",S:"images/s.png",T:"images/t.png",U:"images/u.png",V:"images/v.png",W:"images/w.png",X:"images/x.png",Y:"images/y.png",Z:"images/z.png"};
        this.len=3,
            this.currentletter=[]//当前的字母
        this.currentspan=[]//当前文档中的span
        this.cw=document.documentElement.clientWidth,
            this.ch=document.documentElement.clientHeight
        this.t
        this.speed=1
        this.step=5
        this.life=$(".life")[0]
        this.score=$(".score")[0]
        this.zongfen=$(".zongfen")[0]
        this.guanqia=$(".guanqia")[0]
        this.endbox=$(".endbox")[0]
        this.end=$(".end")[0]
        this.nextbox=$(".nextbox")[0]
        this.next=$(".next")[0]
    }
    game.prototype={
        play:function(){
            this._createspan(this._getRand(this.len))
            this._move()
            this._key()
        },
        _getRand:function(num){
            var newarr=[]
            for(var i=0;i<num;i++){
                var letter=this.arr[Math.floor(Math.random()*this.arr.length)]
                while(this._checkletter(letter,this.currentletter)){
                    letter=this.arr[Math.floor(Math.random()*this.arr.length)]
                }
                this.currentletter.push(letter)
                newarr.push(letter)
            }
            return newarr
        },

        _checkletter:function(val,arr){
            for(var i=0;i<arr.length;i++){
                if(val==arr[i]){
                    return true
                }
            }
            return false
        },
        _createspan:function(arr){
            var newarr=[]
            for (var i = 0; i < arr.length; i++) {
                var span=document.createElement("span")
                span.innerHTML="<img src="+this.imgs[arr[i]]+" style=width:75px;height:80px;>"
                span.values=arr[i]
                var lefts=(100+Math.random()*(this.cw-200))
                span.lefts=lefts
                while(this._checkpos(span,this.currentspan)){
                    lefts=(100+Math.random()*(this.cw-200))
                    span.lefts=lefts
                }
                newarr.push(span)
                this.currentspan.push(span)
                span.style.cssText="position:absolute;width:85px;height:100px;left:"+lefts+"px;top:"+Math.random()*30+"px";
                document.body.appendChild(span)
            }
            return newarr
        },
        _checkpos:function(ele,eleArr){
            for(var i=0;i<eleArr.length;i++){
                if(ele.lefts>eleArr[i].lefts-100&&ele.lefts<eleArr[i].lefts+100){
                    return true
                }
            }
            return false
        },
        _move:function(){
            var that=this
            that.t=setInterval(function(){
                for (var i = 0; i < that.currentspan.length; i++) {
                    var tops=that.currentspan[i].offsetTop+that.speed
                    that.currentspan[i].style.top=tops+"px"
                    if(tops>that.ch){
                        document.body.removeChild(that.currentspan[i])
                        that.currentspan.splice(i,1);
                        that.currentletter.splice(i,1)
                        that._createspan(that._getRand(1))
                        if(that.currentletter.splice(i,1)){
                            that.life.innerHTML--
                            if(that.life.innerHTML==0){
                                clearInterval(that.t)
                                that.endbox.style.display="block"
                                that.end.onclick=function(){
                                    that.endbox.style.display="none"
                                    location.reload()
                                }
                            }
                        }

                    }
                }
            },60)
        },
        _key:function(){
            var that=this
            document.onkeydown=function(e){
                var e=e||window.event
                var letter=String.fromCharCode(e.keyCode)
                for (var i = 0; i < that.currentspan.length; i++) {
                    if(letter==that.currentspan[i].values){
                        document.body.removeChild(that.currentspan[i])
                        that.currentspan.splice(i,1);
                        that.currentletter.splice(i,1)
                        that._createspan(that._getRand(1))
                        if(that.currentletter.splice(i,1)){
                            that.score.innerHTML++
                            that.zongfen.innerHTML++
                            if(that.score.innerHTML>=that.step){
                                clearInterval(that.t)
                                that.nextbox.style.display="block"
                                document.onkeydown=null
                                that.next.onclick=function(){
                                    that.nextbox.style.display="none"
                                    that._next()
                                }
                            }
                        }
                    }
                };
            }
        },
        _next:function(){
            var that=this
            clearInterval(that.t)
            for (var i = 0; i < that.currentspan.length; i++) {
                document.body.removeChild(that.currentspan[i])
            };
            that.currentletter=[]
            that.currentspan=[]
            that.speed+=1
            that.step+=5
            that.len+=1
            that.guanqia.innerHTML++
            that.score.innerHTML=0;
            that._getRand(that.len)
            that._createspan(that.currentletter)
            that._move(that.currentspan)
            that._key(that.currentspan)
        },
    }
    var game=new game()
    game.play()
}