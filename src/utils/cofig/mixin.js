import wepy from 'wepy'
export default class testMixin extends wepy.mixin {
  data = {
    placeHolderImageIndex_0:0,
    placeHolderImageIndex_1:0,
    placeHolderImageIndex_2:0,
    placeHolderImageIndex_3:0,
    placeHolder: {
      placeHolderImageIndex:0,
      placeHolderShow: false,
    }  
  };
  onPullDownRefresh() { 
    if (!this.$parent.global.netWorkString) {
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
      this.placeHolder.placeHolderShow = true;
      console.log('网络错误')
    } else { 
      this.placeHolder.placeHolderShow = false;
    }
    this.$apply();
  };
  onLoad() { 
    // if (!this.$parent.global.netWorkString) {
    //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
    //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
    //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
    //   this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
    //   this.placeHolder.placeHolderShow = true;
    //   console.log('网络错误')
    // } else { 
    //   this.placeHolder.placeHolderShow = false;
    // }
    // this.$apply();
  }
  onShow() { 
    if (!this.$parent.global.netWorkString) {
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_0;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_1;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_2;
      this.placeHolder.placeHolderImageIndex = this.placeHolderImageIndex_3;
      this.placeHolder.placeHolderShow = true;
      console.log('网络错误')
    } else { 
      this.placeHolder.placeHolderShow = false;
    }
  }
}
