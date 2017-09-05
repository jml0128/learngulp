
window.onload = function(){
   
   //获取验证码
	var getCode = document.getElementsByClassName('getCode')[0];
	var getCard = document.getElementsByClassName('getCard')[0];
	var oCode = document.getElementsByClassName('code')[0];
	var phoneNum = document.getElementsByClassName('phoneNum')[0];
	
	var flag = 1;
	//正则验证正确的手机号码,参数为验证对象
	function isPhoneNum(e){
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		if(!myreg.test(e.value)){ 
			alert('请输入有效的手机号码！'); 
			return false; 
		}else{
			flag = 0;
			alert('成功发送验证码，请注意查收');
			countDown(getCode,60);
		} 
	}
	
	
	//成功获取验证码后，倒计时60s
	function countDown(e,time){
		var timer = setInterval(function(){
			time--;
			e.value = time+'s';
			if(time == 0){
				clearInterval(timer);
				e.value = '获取验证码';
				flag = 1;
			}
		},1000)
		
	}
	
	
	getCode.onclick =function(){
		if(flag){
			isPhoneNum(phoneNum);
		}
	}
	
}
































