## Controlled vs Uncontrolled Component

In React, there are two ways to handle form data in our components.
1st way is by using state within the component to handle form data. This is called controlled component.
2nd way is to let the DOM handle the form data by itself in the component. This is known as uncontrolled component.

# Controlled component
Form data is handled by component's state.
Controlled components are predictable because the state of the form elements is handled by the component.

# Uncontrolled component
Form data is handled by DOM itself.
'Uncontrolled' refers to the fact that these components are not controlled by React state.
Values of these form elements are traditionally controlled by and stored on the DOM.
We have to refer to the instance of the form elements to retrieve their values from the DOM.
Uncontrolled components are not predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources

