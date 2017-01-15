var Year = function(year) { 
	this.year = year;
};

Year.prototype.isLeap = function(){

var year = this.year

	if((0 === year % 4 && 0 !== year % 100) || year % 400 === 0 ){
	
		return true;
		} 
	else{
		return false;
		}
	}

module.exports = Year;