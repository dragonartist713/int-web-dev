/**
 * A UIComponent is the super class of all UI components
 * 
 * All UIComponents must have an 'el' which is the 'container' HTML element 
 * that they will be appended to in the DOM.
 * 
 * All UIComponents are able to emit() events, so that they can send messages
 * to any other component that might be listening.
 * You can listen for an event by using the addEventListener() method, 
 * which all sub classes inherit from this class.
 * BTW - I designed it to work just like the addEventListener() that you already know.
 */
class UIComponent{

	/**
	 * Constructs and instance of a UICompoent
	 * @param {HTMLElement}		The element that this component will be attached to
	 */
	constructor(el){

		//////////////////////////////////////////////////////////////////////////////		
		// INSTANCE VARIABLES - All subclasses will inherit these instance variables
		//////////////////////////////////////////////////////////////////////////////
		
		/**
		 * The DOM object that this component will be mounted (appended) to.
		 *	@type {HTMLElement}	 
		 */ 
		this.el = el;

		/**
		 * An object that keeps track of all the listners that have been added to this component.
		 * @type {object}
		 */ 
		this.listeners = {};

		/**
		 *  A string that represents the HTML for the components user interface
		 *  ex: `<li class='list-item'></li>`
		 *  @type {string}
		 */ 
		this.template = null; // ?? `<h2>Here's the template that displays the UI for our UI component`;
	}


	//////////////////////////////////////////////////////////////////////////////
	// METHODS		
	//////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Allows another component to listen for events that are 'emmitted' by 
	 * this component
	 * @param {string} eventName		The name of an event to listen for.
	 * @param {function} callback		The function to be invoked when the event occurs.	
	 */ 
	addEventListener(eventName, callback){
		
		if(!this.listeners[eventName]){
			this.listeners[eventName] = [];
		}

		this.listeners[eventName].push(callback);
	}

	/**
	 * 'Emits' an event by calling all the listener functions 
	 * that are listening for specific event.
	 * 
	 * @param {string} eventName		The name of the event to emit
	 * @param {any}	eventPayload		The information (if any) that is passed to the listener function
	 */ 
	emit(eventName, eventPayload){
		if(this.listeners[eventName]){
			this.listeners[eventName].forEach(fn => fn(eventPayload));
		}
	}


	/**
	 * Attaches the component's template to the host/container element (el)
	 * (It should also clean up any old listeners when the content in el is replaced.)
	 */ 
	mount(){
		
		if(!(this.el instanceof HTMLElement)){
			throw new Error("el must be an HTML element object");
		}

		// clear everything out of el before re-attaching
		this.el.innerHTML = "";

		// it should also remove the older event listeners before doing all that stuff mentioned in the previous line.
		//this.el.replaceWith(this.el.cloneNode(true));
	}


	/**
	 * Converts a string, such as "<li></li>" into a document fragment.
	 * @param {string} templateStr 		The string to be converted into a fragment.
	 * @return {DOMFragement?}
	 */ 
	convertTemplate(templateStr){
		const temp = document.createElement('template');
		temp.innerHTML = templateStr;
		const fragment = temp.content;
		return fragment;
	}



}

export default UIComponent