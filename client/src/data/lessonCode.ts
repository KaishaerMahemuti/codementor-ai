const lessonCode: Record<string, string[]> = {
    javascript: [
      `// Lesson 1: What is JavaScript?\nconsole.log("JavaScript is awesome!");`,
      `// Lesson 2: Variables\nlet name = "Kaiser";\nconsole.log("Hello, " + name);`,
      `// Lesson 3: Functions\nfunction greet() {\n  console.log("Hi there!");\n}\ngreet();`,
      `// Lesson 4: Conditionals\nlet age = 18;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}`,
      `// Lesson 5: Loops\nfor (let i = 0; i < 5; i++) {\n  console.log("Loop:", i);\n}`,
    ],
    react: [
      `// Lesson 1: What is React?\n// React is a library for building UIs`,
      `// Lesson 2: JSX Basics\nconst element = <h1>Hello, world!</h1>;`,
      `// Lesson 3: Props and State\n// Coming soon...`,
    ],
    redux: [
      `// Lesson: Store and Actions\nconst ADD_TODO = 'ADD_TODO';\nconst addTodo = (text) => ({ type: ADD_TODO, text });`,
    ],
  };
  
  export default lessonCode;
  