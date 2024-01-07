# Learn How to use redux with react app

Create a counter react app where state management is done by redux package and glueing to the react view is done by react-redux package

## Steps:

1. Create action Type constants: INCREMENT, DECREMENT, RESET
2. Create Actions: incrementCounter, decrementCounter, resetCounter
3. Create Reducers: counterReducer
4. Create Store: store
5. Wrap whole App using Provider from react-redux. Pass down store values to it make the state available to whole app
6. Use dispatch and use selectors from react-redux to use the states stored 