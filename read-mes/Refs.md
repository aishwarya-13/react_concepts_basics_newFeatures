# Ref and forwardRef

	• Refs are a way to access DOM nodes or React elements created in render method.
	• When we need to update a component without actually causing a re-render, refs come to the rescue.
	• They allow us to directly modify DOM element without using state or props.
	• In typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. But, few cases where you need to imperatively modify a child (child could be a React component or it could be DOM element) outside of typical data flow, refs are the escape hatch.
	• Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. They are not appropriate for storing information you want to display on the screen.
	• By using a ref, you ensure that:
		○ You can store information between re-renders (unlike regular variables, which reset on every render).
		○ Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
		○ The information is local to each copy of your component (unlike the variables outside, which are shared).
	• There are a few good use cases for refs:
		○ Managing focus of input box, text selection, or media playback.
		○ Triggering imperative animations.
		○ Integrating with third-party DOM libraries
	• Both functional and class components refs
	
	Class:
	
	class MyComponent extends React.Component {
	  constructor(props) {
	    super(props)
	    this.firstRef = React.createRef()
	  }
	  render() {
	    return <div ref={this.firstRef} />
	  }
	}
	
	Hooks:
	
	import React, { useRef } from 'react'
	const ActionButton = () => {
	  const buttonRef = useRef(null)
	  return <button ref={buttonRef}>Hello</button>
	}
	export default ActionButton
	

# useRef
	
	• It is a React hook that lets you reference a value that's not needed for rendering.
	• const ref = useRef(initialValue)
	• Pitfalls
		○ Do not write or read ref.current during rendering.
		○ You can read or write refs from event handlers or effects instead


# forwardRef
	
	• By default, React does not let a component access the DOM nodes of other React components. Not even its own children! It will give error
		○ So components that want to expose their DOM nodes have to opt in to that behavior.
		○ A component can specify that it 'forwards' its ref.
	• When you want to let the parent component manipulate the DOM inside your child component.
	• Ex: A Form component has child MyInput component and the Form component wants to focus the input in MyInput component which the parent Form has no access to.
		○ In this case you can use a combination of useRef to hold the input and forwardRef to expose it to the parent component.
	
	
	import React, { forwardRef, useRef } from "react";
	export default function Form(){
	    const inputRef = useRef(null);
	    function handleClick(){
	        inputRef.current.focus();
	    }
	    return(
	        <>
	            <MyInput ref={inputRef}/>
	            <button onClick={handleClick}>Click me to focus</button>
	        </>
	    )
	}
	
	const MyInput = forwardRef((props, ref)=>{
	    return(
	        <input 
	            {...props}
	            ref={ref}
	        />
	    )
	});
	
	
	
