$.fn.extend ({
	waterFall:function(){

		var $this = this;
		
		var totalWidth = $this.width();

		var childWidth = $this.children('.item').width();

		// 每行个数
		var num = Math.floor(totalWidth/childWidth);

		//间距
		var margin = (totalWidth-num*childWidth)/(num-1);

		var HeightArr = [];

		for(var i=0;i<num;i++)
		{
			HeightArr[i] = margin;
		}

		// 循环数组，获取每个item的高度值，取最小值的那一个
		// jq循环数组的方法
		$this.children('.item').each(function(index,element){

			var currentHeight = $(element).height();

			var minIndex = 0;
			var minHeight = HeightArr[0];

			for(var i=0;i<HeightArr.length;i++) {
				if(HeightArr[i]<minHeight) {
					minHeight = HeightArr[i];
					minIndex = i;
				}
			};

			$(element).css({
				top: minHeight,
				left: childWidth*minIndex + margin*minIndex
			});

			HeightArr[minIndex] += margin;
			HeightArr[minIndex]	+= currentHeight;

			//记录最高值
			var maxHeight = 0;
			for(var i=0;i<HeightArr.length;i++) {
				if(maxHeight<HeightArr[i])
					maxHeight = HeightArr[i];
			}
			$this.height(maxHeight);

		})

		return $this;



	}
})