import UIComponent from './ui-component.js'
import Employee from '../models/employee.js'

class EmployeeList extends UIComponent{

	#employees;

	constructor(el, data, template){
		
		super(el);

		// Instance variables
		this.#employees = data || null;

		if(this.#employees){
			this.mount();
		}
	}

	mount(){
		// the super method will attach el to the DOM 
		// (and hopefully do some clean up too)
		super.mount();
		this.el.append(this.createEmployeeList())
		this.el.removeEventListener("click", this.selectedHandler);
		this.el.addEventListener("click", this.selectedHandler);

	}

	createEmployeeList(){
		const ol = document.createElement("ol");
		this.#employees.forEach((emp)=>{
			const li = this.createEmployeeListItem(emp);
			ol.append(li);
		});
		return ol;
	}

	createEmployeeListItem(emp){
		const li = document.createElement("li");
		li.dataset.employeeId = emp.id;
		li.innerHTML = emp.firstName + " " + emp.lastName;

		const btnEdit = document.createElement("input");
		btnEdit.setAttribute("type", "button");
		btnEdit.setAttribute("value", "EDIT");
		btnEdit.setAttribute("name", "btnEdit");
		li.append(btnEdit);

		const btnDelete = document.createElement("input");
		btnDelete.setAttribute("type", "button");
		btnDelete.setAttribute("value", "DELETE");
		btnDelete.setAttribute("name", "btnDelete");
		li.append(btnDelete);

		return li;
	}

	set employees(newEmployees){
		this.#employees = newEmployees;
		this.mount();
	}

	selectedHandler = (evt) => {
		const employeeId = evt.target.closest("li")?.dataset.employeeId;
		if(employeeId){
			//console.log(evt.target);
			if(evt.target.name == "btnEdit"){
				this.emit("employee-selected", employeeId);
			}else if(evt.target.name == "btnDelete"){
				this.emit("delete-employee", employeeId);
			}

		}
	}

}

export default EmployeeList