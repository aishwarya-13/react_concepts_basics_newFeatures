## React and Redux

1] Install redux

2]Install react-redux library
React Redux is the official Redux UI binding library for React. 
If you are using Redux and React together, you should also use React Redux to bind these two libraries.

3]Create a folder in src called action-types 
(this folder will contain all the actions the application will be dealing with)
Create a action-types.js file

4]Create folder inside src called 'reducers'
Ex: Create cart-reducer.js file that will contain all reducer logic related to cart component

5]Create a store and provide it in the app
Create a file named store.js and create a store.
Wrap App component inside <Provider> tag

6]Create actions
Create folder inside src called 'actions'
Create a file called cart-action.js

7]Create UI components

How to read/access the store?
-> useSelector is a hook provided by the react-redux library that helps us read the store and its content(s).

How to dispatch an action?
-> The react-redux library gives us another hook called the useDispatch hook. It helps us dispatch the actions or action creators which in turn return actions. 