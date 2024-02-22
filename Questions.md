# Questions

## What is the difference between Component and PureComponent? Give an example where it might break my app.
Pure components implies that when a prop or state is provided it will do a shallow comparison to determine if a re-render should be triggered, if the value is an object it will compare the object's reference and if the internal content alters pure component might not trigger a re-render, 
the break would happen due a disparity between the actual data and the rendered data.

## Context + ShouldComponentUpdate might be dangerous. Why is that?
A conflict can happen when you have components consuming data from context and implement shouldComponentUpdate, if the data in the context changes but shouldComponentUpdate returns false, the component will not re-render even though the data has been updated.

## Describe 3 ways to pass information from a component to its PARENT.
- using context api 
- using callback function
- if we're using class component we can use custom events where the parent define the event handler and pass it to the child and the child trigger this event.

note: there are additionals ways to share data like using localStorage, action dispatcher (context api)

## Give 2 ways to prevent components from re-rendering.
- Memoization with useMemo or useCallback
- ShouldComponentUpdate or React.memo

## What is a fragment and why do we need it? Give an example where it might break my app.
`<React.Fragment>` or `<>` is use for preserve component hierarchy and prevent  extra DOM node creation.

Ex:
```
// Wrong way
const Parent = () =>  (
    <div className="parent">
      <div><Child /></div>
      <div><Child /></div>
      <div><Child /></div>
    </div>
  );
```
in this case each Child compoennt is nested within an div breaking the structure of the Child component, for this we can use fragment or <> instead.
```
// Correct way
const Parent = () =>  (
    <div className="parent">
        <>
            <Child />
            <Child />
            <Child />
        </>
    </div>
  );
```

## Give 3 examples of the HOC pattern.

1- 
```
const MyComponent = () => <div>My Component</div>

const withHOC = (WrappedComponent) => {
    const WithHOC = () => (<><b>New things</b>  <WrappedComponent/> </>);
    return WithHOC;
}

export default withHOC(MyComponent)
```

2- component:
```
<MyComponent>
    <Component1 />
    <Component2 />
</MyComponent>
```

3- passing children with props
```
<MyComponent children={Component} />
```

## What's the difference in handling exceptions in promises, callbacks and async...await?

- Promises: errors are handled with `catch` or `then().catch()`.
- callbacks: errors are handled with the first argument.
- Async/Await: errors are handled with `try/catch` blocks.

## How many arguments does setState take and why is it async.
- an object that contains the state
- a callback function that executes after the state has been updated

why is it async:
Because react schedules the update and doesn't immediately apply it. it waits until all updates are applied.

Note: this is only for class component, callback is not available using the useState hook.

## List the steps needed to migrate a Class to Function Component.
1- change the lifecycle methods and use hooks instead 
2 - replacing the render method and return the jsx instead
3 - convert class methods to functions
4- remove constructor
5- remove all the `this`

## List a few ways styles can be used with components.
1- inline styles
2- using css classes
3- using css modules to generate a hash
4- using css-in-js solutions like styled components or emotion

## How to render an HTML string coming from the server.
using `dangerouslySetInnerHTML` attribute