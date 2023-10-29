const message =() =>{
	const header = "<div style='text-align:center;'><h1>Personal Information</h1></div>";
	const name= "Rahayu Mokodompit";
	const age = 33;
	const status = "singgle";
	return header + ' <hr> <strong> Name: </strong>' + name + ' <br> <strong> Age: </strong> ' + age + ' <br> <strong> Status: </strong>' + status ;
};

export default message;