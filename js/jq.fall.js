/**
 * Created by Administrator on 2016/5/26.
 */
/*��װһ���ٲ������*/
(function ($) {
    $.fn.waterfall= function () {
        var $this=$(this);
        var parentWidth=$this.width();//��ȡ�����ӵĿ�
        /*�ٲ����������е�item*/
        var items=$this.children();//����
        var childWidth=items.width();//��ȡ����item�Ŀ��
        var colCount=5;//���������
        //������
        var spac=(parentWidth - childWidth * colCount)/(colCount-1);
        /*��¼�߶ȵı仯  ÿһ�еĸ߶ȵı仯*/
        var colwidArr=[];
        //��������
        items.each(function (index,obj) {
            var $obj=$(obj);
            var height=$obj.height();
            if(index<colCount){
                //��һ����Ĭ�ϼ��صģ�����top��0
                colwidArr[index]=height;//�ռ�ÿһ�еĸ߶�
                $obj.css({top:0,left:index*(childWidth+spac)})
            }
            else{
                //��������£����ǵ�һ�е������
                var min=colwidArr[0];//�����һ�еĸ߶�����̵�
                var min_index=0;//��Ȼ��������е� һһ��ȥ�Ƚ�
                for(var i=0;i<colwidArr.length;i++){
                    if(min>colwidArr[i]){
                        min=colwidArr[i];
                        min_index=i;
                    }
                }
                //�Ѻ�����ӽ�ȥ�󣬼�¼���µĸ߶�
                colwidArr[min_index]+=height+10;//10����㶨���һ�����¸߶�
                //����λ
                $obj.css({
                    top:min+10,
                    left:min_index*(childWidth+spac)
                })
            }
        })
        /*����������ٲ��������ĸ߶�*/
        /*��ȡ��ߵ���һ��*/
        var max=colwidArr[0];
        for(var j = 0;j<colwidArr.length;j++){
            if(max<colwidArr[j]){
                max=colwidArr[j];
            }
            $this.height(max);
        }
    }

})(jQuery)