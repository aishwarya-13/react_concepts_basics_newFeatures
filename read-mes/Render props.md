## Render props

What is render props?
-> It is a prop in a component which is a function and that returns a JSX
-> The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
-> More concretely, a render prop is a function prop that a component uses to know what to render.

When to use Render Props?
1. When we want to make components customisable
2. Provide ability to theme the component according to their design system.

It’s important to remember that just because the pattern is called “render props” you don’t have to use a prop named render to use this pattern. In fact, any prop that is a function that a component uses to know what to render is technically a “render prop”.



