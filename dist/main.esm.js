class t{constructor(t){this.timer=0,this.startTime=0,this.diffTime=0,this.callback=()=>{},this.start=()=>{this.isDubgger&&console.log("调用start成功",this.getState()),this.stop(),this.id=setTimeout((()=>{this.isDubgger&&console.log("回调触发",this.getState()),this.callback(),"loop"===this.mode&&this.start()}),(()=>this.diffTime>0?this.diffTime:(this.startTime=this.getNowTime(),this.timer))()),this.diffTime=0},this.resume=()=>{0!==this.diffTime&&(this.isDubgger&&console.log("恢复",this.getState()),this.start())},this.pause=()=>{this.diffTime||(this.diffTime=this.timer-(this.getNowTime()-this.startTime),this.isDubgger&&console.log("暂停",this.getState()),this.diffTime<0&&this.callback(),this.stop())},this.stop=()=>{this.id&&clearTimeout(this.id),this.id=0},this.getNowTime=()=>{var t,i;return(null===(i=null===(t=globalThis.window)||void 0===t?void 0:t.performance)||void 0===i?void 0:i.now())||Date.now()},this.setMode=(t,i)=>{this.checkMode(t),i&&this.reset(),this.mode=t,this.isDubgger&&console.log("模式改变",this.getState()),this.start()},this.reset=()=>{this.diffTime=0,this.stop()},this.getState=()=>{const{diffTime:t,startTime:i,mode:s,timer:e}=this;return{diffTime:t,startTime:i,timer:e,mode:s}},this.checkMode=t=>{if(!["loop","once"].includes(t))throw new Error('请指定正确的运行模式,"loop" | "once"')},console.log(globalThis.window?"运行在浏览器":"运行在其它运行时"),this.opentionMeat=t,this.isDubgger=t.debug,this.checkMode(t.mode),this.timer=t.timer,this.mode=t.mode,this.callback=t.callback,this.start()}}export{t as default};
