window.onload=function(){
	var oDiv1=document.getElementById('div1');
	var oDiv3=document.getElementById('div3');
	
	oDiv1.onmouseover=function(){
		oDiv3.style.display='block';
	};
	oDiv1.onmouseout=function(){
		oDiv3.style.display='none';
	};
};