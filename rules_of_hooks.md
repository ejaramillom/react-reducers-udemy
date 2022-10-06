# rules of hooks

- only call react hooks in react functions (react component functions or custom hooks) the ones that return JSX
- Only call react hooks at the top level (dont call them in nested functions or block statements)
- useEffect: add everything you refer to inside of useEffect except perhaps state updating functions