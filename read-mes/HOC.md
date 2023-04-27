## This repo consists of code snippets of basics and concepts of React

# 1] Higher order components
Two components ClickIncrease and HoverIncrease are passed to HOC UpdatedComponent and in return gets extra props from HOC.
HOC can pass down its own props and state variables to the components.

# 2] Higher order components example 2
Here common functionality is extracted from Person1 and Person2 and put in HOC. The HOC wraps the Person1 and Person2 and supplies it with the state and function handler. Also specific props from Person1 is passed to it by using {...props} in NewComponent(this is important)

Using HOC we can components can share the functionality. HOC can provide its state variables, functions and props to the component.

============================================================================