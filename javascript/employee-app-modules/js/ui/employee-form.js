import UIComponent from './ui-component.js'
import Employee from '../models/employee.js'

class EmployeeForm extends UIComponent{

	// Instance variables
	#employee;
	template;
	
	form;
	txtId;
	txtFirstName;
	txtLastName;
	chkDeparments;
	btnClear;

	constructor(el, data, template){
		
		super(el);
				
		this.#employee = data || null;
		this.template = `<form class="employee-form" method="POST" action="http://www.wtc-web.com/form-handler.php">
			<div class="validation-errors"></div>	
			<label>Employee Id:</label>
			<input type="text" name="employeeId" readonly> (readonly - should be hidden)
			<br>

			<label>First Name:</label>
			<input type="text" name="firstName">
			<br>
			<label>Last Name:</label>
			<input type="text" name="lastName">
			<br>
			<label>Departments:</label>
			<div id="departments">
				<input type="checkbox" value="Sales" name="departments[]">
				<label>Sales</label>
				<input type="checkbox" value="Marketing" name="departments[]">
				<label>Marketing</label>
				<input type="checkbox" value="IT" name="departments[]">
				<label>IT</label>
				<input type="checkbox" value="Human Resources" name="departments[]">
				<label>Human Resources</label>
			</div>
			<input type="submit" value="Save">
			<input type="button" name="btnClear" value="Clear Form">
		</form>`

		// if we have data to show, then 'mount' the component
		//if(this.#employee){
			this.mount();
		//}
	}


	mount(){
		//console.log(this.template);
		super.mount();

		this.el.innerHTML = this.template;
		
		
		// initialize the UI elements
		this.form = this.el.querySelector(".employee-form");
		this.txtId = this.form.querySelector("[name=employeeId]");
		this.txtFirstName = this.form.querySelector("[name=firstName]");
		this.txtLastName = this.form.querySelector("[name=lastName]");
		this.chkDeparments = this.form.querySelectorAll("[name='departments[]']");
		this.btnClear = this.form.querySelector("[name=btnClear]");
		//console.log(this.txtId,this.txtFirstName,this.txtLastName,this.chkDeparments,this.btnClear);
		

		// Reset the form
		this.btnClear.addEventListener("click", ()=>{
			this.form.reset();
		})

		// Handle form submits
		this.form.addEventListener("submit", (evt)=>{
			evt.preventDefault();
			if(this.validateInput()){
				const employee = this.getEmployeeFromUI();
				//console.log(employee);
				this.emit("employee-saved", employee);
				this.form.reset();
			}
		})
		
		
		// bind the employee data to the form
		if(this.#employee){
			this.bindEmployeeToUI(this.#employee);	
		}
		
	}

	bindEmployeeToUI(empObj){
		this.form.reset();
		this.txtId.value = empObj.id;
		this.txtFirstName.value = empObj.firstName;
		this.txtLastName.value = empObj.lastName;

		this.chkDeparments.forEach((chk)=>{
			chk.checked = false;
			if(empObj.departments.includes(chk.value)){
				chk.checked = true;
			}
		})
	}



	validateInput(){
		let isValid = true;
		const errorMessages = [];

		if(!this.txtFirstName.value){
			errorMessages.push("Please enter a first name");
			isValid = false;
		}

		if(!this.txtLastName.value){
			errorMessages.push("Please enter a last name");
			isValid = false;
		}

		let checkedDepartments = 0;
		this.chkDeparments.forEach((chk)=>{
			if(chk.checked){
				checkedDepartments++;
			}
		})

		if(checkedDepartments == 0){
			errorMessages.push("Check at least one department");
			isValid = false;
		}

		const errorDiv = this.form.querySelector(".validation-errors");
		errorDiv.innerHTML = errorMessages.join("<br>");


		return isValid;
	}

	getEmployeeFromUI(){
		const id = this.txtId.value;
		const firstName = this.txtFirstName.value;
		const lastName = this.txtLastName.value;
		const departments = [];
		this.chkDeparments.forEach((chk)=>{
			if(chk.checked){
				departments.push(chk.value);
			}
		});

		return new Employee(id, firstName, lastName, departments);
	}

	// I made a 'set' property/method(???) for when the data changes
	// because when the data changes, we need to re-mount the component
	// to reflect the change of data in the UI
	set employee(newEmployee){
		this.#employee = newEmployee;
		this.mount();
	}


	clear(){
		this.form.reset();
	}

}

export default EmployeeForm