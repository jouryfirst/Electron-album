window.onload=function(){
	var ul = document.querySelector("ul");
		ul.innerHTML+=ul.innerHTML;
    var lis = document.querySelectorAll("li");
	var wid = parseInt(getComputedStyle(lis[0]).width);
	var div = document.getElementById("ad");
	var n = 0;
	var timer;
	var textArr=[
					{"title":'美丽风景一',"content":'绿色草原，清澈溪流'},
					{"title":'美丽风景二',"content":'秋叶染黄，湖畔小屋'},
					{"title":'美丽风景三',"content":'青山绿水，松林草原'},
					{"title":'美丽风景四',"content":'鹰翔远山，近水青翠'},
					{"title":'美丽风景五',"content":'冷石洌泉，幽深静远'},
					{"title":'美丽风景六',"content":'朝阳初起，云雾生辉'}
				];
	ul.style.width=wid*lis.length+'px';
	div.innerHTML='<h3>'+textArr[0].title+'</h3><p>'+textArr[0].content+'</p>';
	timer = setInterval(imgmove,3500);
	function imgmove(){
		n++;
		move(div,{bottom:-70},500,'linear',function(){
			move(ul,{left:-wid*n},1000,'linear',function(){
				if(n==lis.length/2){
					ul.style.left = 0;
					n = 0;
				}
				div.innerHTML='<h3>'+textArr[n].title+'</h3><p>'+textArr[n].content+'</p>';
				move(div,{bottom:0},2000,'linear');
			});
		});
	}
}
