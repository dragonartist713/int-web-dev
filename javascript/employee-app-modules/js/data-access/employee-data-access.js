import Employee from '../models/employee.js'

const starterData = [
	new Employee(3, "Sue", "Lee", ["Sales", "Human Resources"]),
	new Employee(6, "Lee", "Wen", ["IT", "Human Resources"]),
	new Employee(8, "Bart", "Smith", ["IT", "Marketing"])
];

class EmployeeDataAccess{

	#employees;

	constructor(){
		this.loadData();		
	}

	loadData(){
		const data = localStorage.getItem("employees");
		if(data){
			this.#employees = JSON.parse(data);
		}else{
			this.#employees = starterData;
		}
	}

	saveData(){
		const data = JSON.stringify(this.#employees);
		localStorage.setItem("employees", data);
	}


	getAllEmployees(){
		return this.#employees;
	}


	// Get Employee by ID
	getEmployeeById(id){
		return this.#employees.find((e) => { return e.id == id});
	}


	// Generate a new ID (when inserting a new employee)
	getNewId(){
		let maxId = this.#employees.reduce((max, e) => { return Math.max(max, e.id) }, 0);
		return maxId + 1;
	}

	// Insert a new employee
	insertEmployee(newEmp){
		if(newEmp.isValid()){
			newEmp.id = getNewId();
			this.#employees.push(newEmp);
			this.saveData();
		}else{
			console.log("Insert failed, invalid employee");
		}
	}

	// Update an existing employee
	updateEmployee(updatedEmp){
		if(updatedEmp.isValid()){
			const originalEmp = this.getEmployeeById(updatedEmp.id);
			originalEmp.firstName = updatedEmp.firstName;
			originalEmp.lastName = updatedEmp.lastName;
			originalEmp.departments = updatedEmp.departments;
			this.saveData();
		}else{
			console.log("Update failed, invalid employee");
		}
	}

	// Delete an employee (by id)
	deleteEmployee(id){
		const index = this.#employees.findIndex((e)=>{ return e.id == id});
		this.#employees.splice(index, 1);
		this.saveData();
	}

}

export default EmployeeDataAccess