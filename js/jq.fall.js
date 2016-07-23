/**
 * Created by Administrator on 2016/5/26.
 */
/*封装一个瀑布流插件*/
(function ($) {
    $.fn.waterfall= function () {
        var $this=$(this);
        var parentWidth=$this.width();//获取最大盒子的宽
        /*瀑布流容器当中的item*/
        var items=$this.children();//数组
        var childWidth=items.width();//获取单个item的宽度
        var colCount=5;//定义多少列
        //定义间距
        var spac=(parentWidth - childWidth * colCount)/(colCount-1);
        /*记录高度的变化  每一列的高度的变化*/
        var colwidArr=[];
        //遍历盒子
        items.each(function (index,obj) {
            var $obj=$(obj);
            var height=$obj.height();
            if(index<colCount){
                //第一列是默认加载的，所以top是0
                colwidArr[index]=height;//收集每一列的高度
                $obj.css({top:0,left:index*(childWidth+spac)})
            }
            else{
                //其他情况下（不是第一列的情况）
                var min=colwidArr[0];//假设第一列的高度是最短的
                var min_index=0;//，然后遍历所有的 一一拿去比较
                for(var i=0;i<colwidArr.length;i++){
                    if(min>colwidArr[i]){
                        min=colwidArr[i];
                        min_index=i;
                    }
                }
                //把盒子添加进去后，记录最新的高度
                colwidArr[min_index]+=height+10;//10是随便定义的一个上下高度
                //给定位
                $obj.css({
                    top:min+10,
                    left:min_index*(childWidth+spac)
                })
            }
        })
        /*最后来设置瀑布流容器的高度*/
        /*获取最高的那一列*/
        var max=colwidArr[0];
        for(var j = 0;j<colwidArr.length;j++){
            if(max<colwidArr[j]){
                max=colwidArr[j];
            }
            $this.height(max);
        }
    }

})(jQuery)