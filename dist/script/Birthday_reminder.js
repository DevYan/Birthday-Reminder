function t(){
	var i = 0;
	return function(){
		i++;
		console.log(i);
	};
}

t();
t();
t();