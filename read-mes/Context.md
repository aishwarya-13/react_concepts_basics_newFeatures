# React context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme, user details) that are required by many components within an application.
 Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
Context is primarily used when some data needs to be accessible by many components at different nesting levels.

When to use context?
Context is designed to share data that can be considered 'global' for a tree of React components. Ex: authenticated user, theme, preferred language.

What problem does context solve?
React context helps us avoid the problem of props drilling.
The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. 

How to use the context
Using the context in React requires 3 simple steps: creating the context, providing the context, and consuming the context.

A. Creating the context

// context.js
import { createContext } from 'react';
export const Context = createContext('Default Value');

B. Providing the context
Context.Provider component available on the context instance is used to provide the context to its child components, no matter how deep they are.

import { Context } from './context';
function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

If you want to change the context value, simply update the value prop.
All the components that'd like later to consume the context have to be wrapped inside the provider component.

C. Consuming the context
• Consuming the context can be performed in 2 ways.
1. Using useContext(Context) hook
2. Using render function supplied as a child to <Context.Consumer> component

• The hook and <Context.Consumer> also makes sure to re-render the component when the context value changes
• You can have as many consumers as you want for a single context. 


• If the context value changes (by changing the value prop of the provider <Context.Provider value={value} />), then all consumers are immediately notified and re-rendered.
• If the consumer isn't wrapped inside the provider, but still tries to access the context value (using useContext(Context) or <Context.Consumer>), then the value of the context would be the default value argument supplied to createContext(defaultValue) factory function that had created the context.





