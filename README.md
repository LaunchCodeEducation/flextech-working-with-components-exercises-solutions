### Running the Vite Frontend App

Navigate inside of `my-react-app` by using the change directory command:
`cd my-react-app`

Then, you can start the Vite development server by running:
`npm run dev`

This will start the Vite development server. 

You can view your app at http://localhost:5173.


The project structure should look like this:
`
my-react-app/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── node_modules/
`

You will be creating your React exercise answers inside of the `src` 
directory.




### Summary of React Concepts Covered in These Exercises

1. **React Components**:
    
    - Definition and purpose of React components.
    - Functional components and the use of props to pass data.
    - Component hierarchy and the organization of components into a structured tree.
2. **Props and State**:
    
    - Understanding props for data communication between components.
    - Using the `useState` hook to manage local component state.
    - Handling state changes and their impact on rendering.
3. **React Context**:
    
    - Using the React Context API to manage global state.
    - Avoiding prop drilling by sharing state across deeply nested components.
    - Benefits and drawbacks of using React Context.
4. **Lifecycle Methods and Hooks**:
    
    - The `useEffect` hook for side effects and cleanup.
    - Managing component lifecycle in functional components.
    - Best practices for optimizing performance and handling side effects.
5. **Higher-Order Components (HOCs)**:
    
    - Definition and use cases of HOCs.
    - Enhancing components by wrapping them with additional logic.
    - Benefits and limitations of using HOCs in React applications.
6. **Error Handling and Debugging**:
    
    - Handling errors gracefully using error boundaries.
    - Debugging components with React DevTools.
    - Strategies for diagnosing performance issues and optimizing components.
7. **Next.js Integration**:
    
    - Basics of using Next.js with React for server-side rendering and improved performance.
    - Understanding the Next.js toolchain and configuration.
8. **Performance Optimization**:
    
    - Techniques for improving perceived and actual performance.
    - Use of memoization and lazy loading for optimization.
