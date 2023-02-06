# Events and Event handling
<!--Explain what event handling is, and how it works-->
## So what is an Event, anyway?

Events are, well, events.  They're things that happen to the window, page, or elements within.  This can include clicking, mousing over, pressing a button on the keyboard, trying to copy text, etc.

### That sounds like a lot.  How do we handle all that?

With an event handler function, of course!
```js
window.addEventListener("click", didTheThing)
didTheThing() => {
    console.log("You clicked it!")
}
```
It prints a line in the console everytime the window is clicked.  A silly example for a useful function.
### Ok, but what else can we do with it?

What can't we do with it?

<!--Choose a specific event, that we did not discuss in class, and explain how it works and include at least one code sample that demonstrates how it works-->
Let's look at a different event.
Sometimes a webpage might want to keep track of text being copyied on their page.  This can be achieved by adding an event listener to the copy event.

For example, to check whether text has been copied.
```js
    <input type="text" id="test" value="Try to copy me">

    <p id="demo"></p>

    <script>
    const text = document.querySelector("#test")    
    text.addEventListener("copy", myFunction)

    function myFunction() {
    document.querySelector("#demo").innerHTML = "Text has been copied!"
    }
    </script>
```
It can also be done in-line on the element.
```js
    <input type="text" oncopy="myFunction()" value="Try to copy me">

    <p id="demo"></p>

    <script>
    function myFunction() {
    document.querySelector("#demo").innerHTML = "Text has been copied!"
    }
    </script>
```
We can even stop the copying if we wanted to.
```js
    <input type="text" id="test" value="Try to copy me">

    <p id="demo"></p>

    <script>
    const text = document.querySelector("#test")    
    text.addEventListener("copy", myFunction)
    
    function myFunction(evt) {
        evt.preventDefault()
        if(evt.defaultPrevented == true){
            document.getElementById("demo").innerHTML = "You failed to copy text!"
        }else{
            document.getElementById("demo").innerHTML = "You copied text!"
        }
        
    }
    </script>
```
<!--Explain the parameter that is passed in when an event handler is invoked-->
That last one is using one of the attributes of the event object (evt in the function), defaultPrevented, to check whether the copy event should be allowed to complete.  Since we prevented default on it, the copy isn't allowed to go through.  Handy for places that might not want things easily copied/stolen, like a photographer's portfolio website.
<!--Your markdown file must include at least 4 code samples-->
<!--Your markdown file must include at least 2 links to sources that you used in your research-->
### Sources
* [MDN Webdocs](https://developer.mozilla.org/en-US/)
* [W3Schools](https://www.w3schools.com/jsref/dom_obj_event.asp)