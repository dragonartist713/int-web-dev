function Employee(id, firstName, lastName, departments){
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.departments = departments;

	// Note that the isValid method uses the optional chaining operator (?)
	this.isValid = function(){
		return this.firstName && this.lastName && this.departments?.length > 0;
	}
}

export default Employee