export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
  code?: string;
  challenge?: string;
  keyInsight?: string;
  codeExplanation?: string;
  realWorld?: string;
  quiz?: QuizQuestion[];
  level?: "Beginner" | "Intermediate";
};

export type Course = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  level: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
};

export const courses: Course[] = [
  {
    slug: "python",
    name: "Python for Beginners",
    eyebrow: "Start from zero",
    description:
      "Learn Python through short explanations, practical code examples and a final knowledge check.",
    level: "Beginner",
    lessons: [
      {
        slug: "introduction",
        title: "What is Python?",
        summary: "Understand where Python is used and how a Python program runs.",
        content: [
          "Python is a general-purpose programming language known for readable syntax and a large ecosystem.",
          "It is commonly used for automation, web backends, data work, scripting and beginner programming education.",
        ],
        code: 'print("Hello, Python!")',
        challenge: "Change the message and print your own name.",
      },
      {
        slug: "variables",
        title: "Variables & Data Types",
        summary: "Store text, numbers and boolean values in named variables.",
        content: [
          "A variable gives a value a reusable name. Python determines the basic data type from the value you assign.",
          "Common beginner types include strings, integers, floating-point numbers and booleans.",
        ],
        code: 'name = "Asha"\nage = 24\nlearning = True\nprint(name, age, learning)',
        challenge: "Create variables for your city, age and whether you enjoy coding.",
      },
      {
        slug: "conditions",
        title: "Conditions",
        summary: "Use if, elif and else to make decisions.",
        content: [
          "Conditional statements let a program choose what to do based on whether an expression is true or false.",
          "Indentation is part of Python syntax, so keep code inside each branch aligned consistently.",
        ],
        code: 'score = 82\nif score >= 80:\n    print("Great")\nelse:\n    print("Keep practicing")',
        challenge: "Print 'Adult' when age is 18 or more, otherwise print 'Minor'.",
      },
      {
        slug: "loops",
        title: "Loops",
        summary: "Repeat work with for and while loops.",
        content: [
          "Loops are useful when the same operation needs to run repeatedly.",
          "Use a for loop when iterating over a collection or known range, and a while loop when repetition depends on a condition.",
        ],
        code: 'for number in range(1, 6):\n    print(number)',
        challenge: "Print the even numbers from 2 through 10.",
      },
      {
        slug: "functions",
        title: "Functions",
        summary: "Group reusable logic into named functions.",
        content: [
          "Functions make programs easier to organize, test and reuse.",
          "Python defines functions with the def keyword and can return values to the calling code.",
        ],
        code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Asha"))',
        challenge: "Write a function that returns the square of a number.",
      },
      {
        slug: "lists-dictionaries",
        title: "Lists & Dictionaries",
        summary: "Work with common Python collections.",
        content: [
          "Lists store ordered values, while dictionaries store key-value pairs.",
          "Both structures appear frequently in APIs, configuration, automation and application logic.",
        ],
        code: 'skills = ["Python", "React"]\nprofile = {"name": "Asha", "city": "Kathmandu"}\nprint(skills[0], profile["city"])',
        challenge: "Create a dictionary containing a project name and its technology stack.",
      },
      { slug: "operators", title: "Operators", summary: "Calculate values and compare expressions.", content: ["Operators perform arithmetic, comparisons and logical checks. Python uses +, -, *, /, //, %, and ** for common calculations.", "Comparison operators return True or False, while and/or/not combine conditions."], code: "price = 12\nquantity = 3\ntotal = price * quantity\nprint(total >= 30)", challenge: "Calculate the remainder when 17 is divided by 5.", realWorld: "Shopping carts use arithmetic operators to calculate item totals and taxes." },
      { slug: "tuples-sets", title: "Tuples & Sets", summary: "Choose collections for fixed values and unique values.", content: ["Tuples are ordered collections that should not change. Sets hold unique values and make membership checks simple.", "Pick a tuple for a fixed record and a set when duplicates should disappear."], code: "coordinates = (27.7, 85.3)\ntags = {\"python\", \"web\", \"python\"}\nprint(coordinates, tags)", challenge: "Create a set of three unique programming languages.", realWorld: "Sets help remove duplicate tags from imported data." },
      { slug: "file-handling", title: "File Handling", summary: "Read and write text files safely.", content: ["The with statement opens a file and closes it automatically. Use read_text or open with a mode such as r, w or a.", "Writing replaces existing content in w mode, so use a for adding new content."], code: "with open(\"notes.txt\", \"w\") as file:\n    file.write(\"Keep practicing!\")\n\nwith open(\"notes.txt\") as file:\n    print(file.read())", challenge: "Append one new line to a text file.", realWorld: "Scripts use files for exports, logs and small configuration values." },
      { slug: "exceptions", title: "Exceptions", summary: "Handle errors without crashing your program.", content: ["Exceptions occur when an operation cannot finish, such as converting invalid input to an integer.", "Use try for risky code, except for recovery, and finally for cleanup that must always happen."], code: "try:\n    number = int(\"not a number\")\nexcept ValueError:\n    print(\"Please enter digits\")", challenge: "Catch a ZeroDivisionError when dividing two numbers.", realWorld: "Forms use exception handling to show useful validation messages." },
      { slug: "modules", title: "Modules", summary: "Reuse code from files and Python's standard library.", content: ["A module is a Python file that can be imported. Python includes useful modules such as math, random, datetime and pathlib.", "Imports keep programs smaller by letting each file focus on one responsibility."], code: "from math import sqrt\n\nprint(sqrt(81))", challenge: "Import the random module and generate a number.", realWorld: "Applications import modules for dates, file paths, HTTP requests and testing." },
      { slug: "oop", title: "Object-Oriented Programming", summary: "Model related data and behavior together.", content: ["Object-oriented programming groups state and behavior into objects. A class describes what an object should contain and do.", "Use OOP when a domain has clear entities such as users, products or bank accounts."], code: "class Dog:\n    def speak(self):\n        return \"Woof!\"\n\nprint(Dog().speak())", challenge: "Create a Book class with a title attribute.", realWorld: "Frameworks model users, orders and database records as objects." },
      { slug: "inheritance", title: "Inheritance", summary: "Extend a class while reusing its behavior.", content: ["Inheritance lets a child class reuse or specialize a parent class. Use it when the relationship is genuinely an is-a relationship.", "super() calls parent behavior without duplicating its implementation."], code: "class Animal:\n    def move(self):\n        return \"moving\"\n\nclass Bird(Animal):\n    pass\n\nprint(Bird().move())", challenge: "Create a Cat class that inherits from Animal.", realWorld: "UI components and domain models sometimes share base behavior through inheritance." },
      { slug: "iterators-generators", title: "Iterators & Generators", summary: "Process values one at a time.", content: ["An iterator produces the next value when asked. A generator function uses yield and pauses between values.", "Lazy iteration avoids loading a large dataset into memory all at once."], code: "def count_up_to(limit):\n    for number in range(1, limit + 1):\n        yield number\n\nprint(list(count_up_to(3)))", challenge: "Write a generator that yields even numbers.", realWorld: "Data pipelines stream rows, log entries and API pages with generators." },
      { slug: "virtual-environments", title: "Virtual Environments", summary: "Keep project dependencies isolated.", content: ["A virtual environment gives a project its own package installation area. This prevents one project's dependencies from breaking another.", "Create one with venv, activate it, then install packages with pip."], code: "python -m venv .venv\nsource .venv/bin/activate\npip install requests", challenge: "Name the command used to create a virtual environment.", realWorld: "Teams use isolated environments so local development matches deployment dependencies." },
      { slug: "apis-json", title: "Basic APIs & JSON", summary: "Exchange structured data with web services.", content: ["An API exposes operations over HTTP. JSON represents data with objects, arrays, strings, numbers and booleans.", "Python's json module converts between JSON text and Python dictionaries or lists."], code: "import json\n\npayload = json.loads('{\"name\": \"Asha\"}')\nprint(payload[\"name\"])", challenge: "Convert a Python dictionary to a JSON string.", realWorld: "A weather dashboard requests JSON from an API and displays selected fields." },
      {
        slug: "strings",
        title: "Strings & Formatting",
        summary: "Clean, combine and format text values.",
        content: [
          "Strings are sequences of characters. Use indexing and slicing to read portions of text, and methods such as lower, upper and strip to clean it.",
          "F-strings put expressions inside braces so messages can include values without awkward concatenation.",
        ],
        code: 'name = "Asha"\ncity = "Kathmandu"\nprint(f"{name} lives in {city}.")',
        challenge: "Format a sentence that includes a product name and price.",
      },
      {
        slug: "errors",
        title: "Errors & Exceptions",
        summary: "Handle invalid input without crashing a program.",
        content: [
          "Exceptions represent problems during execution, such as converting invalid text to a number.",
          "Use try and except around code that may fail, and give users a useful fallback message.",
        ],
        code: 'try:\n    age = int("twenty")\nexcept ValueError:\n    print("Please enter a number")',
        challenge: "Safely convert a user-entered value to a float.",
      },
      {
        slug: "modules-files",
        title: "Modules & Files",
        summary: "Reuse code and work with text files.",
        content: [
          "Modules let you split a program into focused files and import useful code from Python's standard library or your own project.",
          "The with statement closes files automatically, even when an error occurs.",
        ],
        code: 'from pathlib import Path\n\nPath("notes.txt").write_text("Keep practicing!")\nprint(Path("notes.txt").read_text())',
        challenge: "Use pathlib to check whether a file exists.",
      },
    ],
    quiz: [
      {
        question: "Which keyword defines a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1,
        explanation: "Python uses the def keyword before a function name.",
      },
      {
        question: "Which collection stores key-value pairs?",
        options: ["List", "Tuple", "Dictionary", "String"],
        answer: 2,
        explanation: "A dictionary maps keys to values.",
      },
      {
        question: "What does range(1, 4) produce for a loop?",
        options: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3", "2, 3, 4"],
        answer: 0,
        explanation: "The stop value is excluded, so 4 is not included.",
      },
      {
        question: "Which value is a boolean?",
        options: ["\"True\"", "1", "True", "yes"],
        answer: 2,
        explanation: "True without quotes is Python's boolean true value.",
      },
      {
        question: "Why are functions useful?",
        options: ["They only print text", "They make logic reusable", "They replace variables", "They disable loops"],
        answer: 1,
        explanation: "Functions package logic so it can be called again with different inputs.",
      },
    ],
  },
  {
    slug: "javascript",
    name: "JavaScript Essentials",
    eyebrow: "Build web behavior",
    description:
      "Learn the language of interactive websites, from variables and functions to the DOM and asynchronous requests.",
    level: "Beginner",
    lessons: [
      {
        slug: "basics",
        title: "JavaScript Basics",
        summary: "Understand where JavaScript runs and what it controls on a webpage.",
        content: [
          "JavaScript adds behavior to websites and also runs on servers through environments such as Node.js.",
          "In the browser it can respond to user actions, update the page and communicate with APIs.",
        ],
        code: 'console.log("Hello, JavaScript!");',
        challenge: "Log your name and current learning goal.",
      },
      {
        slug: "variables",
        title: "Variables & Types",
        summary: "Use const and let to store values.",
        content: [
          "Prefer const when a variable binding will not be reassigned and let when it needs to change.",
          "JavaScript values include strings, numbers, booleans, objects, arrays, null and undefined.",
        ],
        code: 'const name = "Asha";\nlet score = 10;\nscore += 5;\nconsole.log(name, score);',
        challenge: "Create a const projectName and a let progress value.",
      },
      {
        slug: "functions",
        title: "Functions",
        summary: "Write reusable logic with function declarations and arrow functions.",
        content: [
          "Functions receive inputs through parameters and may return a result.",
          "Arrow functions provide a compact syntax that is common in modern React code.",
        ],
        code: 'const add = (a, b) => a + b;\nconsole.log(add(4, 6));',
        challenge: "Write an arrow function that converts minutes to seconds.",
      },
      {
        slug: "arrays-objects",
        title: "Arrays & Objects",
        summary: "Model collections and structured data.",
        content: [
          "Arrays hold ordered values and objects group related properties under named keys.",
          "These structures are foundational when working with API responses and React state.",
        ],
        code: 'const skills = ["React", "JavaScript"];\nconst user = { name: "Asha", city: "Kathmandu" };\nconsole.log(user.city);',
        challenge: "Create an array of three tools and map over it to print each one.",
      },
      {
        slug: "dom-events",
        title: "DOM & Events",
        summary: "Respond to clicks and update page content.",
        content: [
          "The DOM is the browser's object representation of the page.",
          "Event listeners let JavaScript respond to interactions such as clicks, input and form submission.",
        ],
        code: 'const button = document.querySelector("button");\nbutton?.addEventListener("click", () => {\n  console.log("Clicked");\n});',
        challenge: "Attach a click handler that changes a heading's text.",
      },
      {
        slug: "async-fetch",
        title: "Async JavaScript & Fetch",
        summary: "Request external data using promises and async/await.",
        content: [
          "Network requests take time, so JavaScript uses asynchronous patterns to avoid blocking the interface.",
          "The fetch API returns a promise and is commonly combined with async/await for readable control flow.",
        ],
        code: 'async function loadData() {\n  const response = await fetch("/api/example");\n  const data = await response.json();\n  console.log(data);\n}',
        challenge: "Describe how you would handle a failed fetch request with try/catch.",
      },
      { slug: "operators", title: "Operators", summary: "Calculate, compare and combine values.", content: ["JavaScript uses arithmetic operators such as +, -, *, / and %. Comparison operators produce booleans.", "Use === for strict equality and logical operators such as && and || to combine conditions."], code: "const price = 12;\nconst quantity = 3;\nconsole.log(price * quantity >= 30);", challenge: "Use % to check whether a number is even.", realWorld: "Checkout totals and validation rules depend on operators." },
      { slug: "conditions", title: "Conditions", summary: "Run different code based on a decision.", content: ["An if statement runs code when a condition is true. else if and else provide alternative paths.", "Keep conditions readable and prefer strict comparisons so values do not change type unexpectedly."], code: "const age = 20;\nif (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Minor\");\n}", challenge: "Show a different message when a score is below 50.", realWorld: "Login screens use conditions to show success, validation and permission states." },
      { slug: "control-flow", title: "Conditions & Loops", summary: "Choose paths and repeat work.", content: ["Use if, else if and else to choose a path. Use for, while and for...of to repeat work.", "break stops a loop and continue skips to the next iteration."], code: "for (const score of [45, 82, 67]) {\n  console.log(score >= 50 ? \"pass\" : \"try again\");\n}", challenge: "Print only odd numbers from 1 through 9.", realWorld: "Interfaces loop through API results to create cards and tables." },
      { slug: "es6", title: "Modern JavaScript (ES6+)", summary: "Use modern syntax for clearer programs.", content: ["ES6 introduced let, const, arrow functions, template literals, classes and modules. Newer editions continue improving the language.", "Modern syntax reduces repetition but still compiles to browser-compatible code when needed."], code: "const greet = (name) => `Hello, ${name}!`;\nconsole.log(greet(\"Asha\"));", challenge: "Rewrite a function declaration as an arrow function.", realWorld: "Modern React and Node.js projects use ES6+ syntax throughout." },
      { slug: "destructuring", title: "Destructuring", summary: "Extract values from arrays and objects clearly.", content: ["Destructuring assigns properties or positions to local variables in one readable statement.", "It is useful when an API response contains several fields you need."], code: "const user = { name: \"Asha\", city: \"Kathmandu\" };\nconst { name, city } = user;\nconsole.log(name, city);", challenge: "Destructure the first two values from an array.", realWorld: "Components destructure props and functions destructure configuration objects." },
      { slug: "spread-rest", title: "Spread & Rest", summary: "Copy, combine and collect values.", content: ["Spread (...) expands an array or object. Rest uses the same syntax to collect remaining values into an array.", "Spread helps create immutable updates instead of changing an existing object directly."], code: "const first = [1, 2];\nconst all = [...first, 3];\nconsole.log(all);", challenge: "Combine two arrays without mutating either one.", realWorld: "State updates in React commonly use object and array spread." },
      { slug: "modules", title: "Modules", summary: "Split JavaScript into reusable files.", content: ["Modules export values from one file and import them in another. This keeps code organized and dependencies explicit.", "Named exports are useful for several utilities; default exports represent one primary value."], code: "// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from \"./math.js\";\nconsole.log(add(2, 3));", challenge: "Export a function that converts minutes to seconds.", realWorld: "Large web applications separate API clients, UI components and utility modules." },
      { slug: "promises", title: "Promises", summary: "Represent work that finishes later.", content: ["A Promise is pending, fulfilled or rejected. then handles success and catch handles failure.", "Promises prevent deeply nested callbacks when several asynchronous operations are connected."], code: "const wait = new Promise((resolve) => {\n  setTimeout(() => resolve(\"Ready\"), 300);\n});\nwait.then(console.log);", challenge: "Create a promise that resolves with a greeting.", realWorld: "Database queries, timers and network requests commonly return promises." },
      { slug: "async-await", title: "Async/Await", summary: "Write asynchronous code in a synchronous style.", content: ["An async function returns a promise. await pauses that function until a promise settles without blocking the browser.", "Wrap await calls in try/catch when failure needs to be handled."], code: "async function loadMessage() {\n  const message = await Promise.resolve(\"Loaded\");\n  console.log(message);\n}\nloadMessage();", challenge: "Add try/catch around an awaited request.", realWorld: "Dashboard pages await user, product and notification data before rendering." },
      { slug: "error-handling", title: "Error Handling", summary: "Recover from expected failures.", content: ["Errors can come from invalid input, unavailable services or programming mistakes. throw creates an error and catch handles it.", "Good error messages help users recover and help developers diagnose problems."], code: "try {\n  throw new Error(\"Something went wrong\");\n} catch (error) {\n  console.log(error.message);\n}", challenge: "Catch invalid JSON with JSON.parse.", realWorld: "Forms show validation errors while network failures offer a retry action." },
      { slug: "classes", title: "Classes", summary: "Create objects with shared behavior.", content: ["A class is a template for objects. The constructor initializes state and methods describe behavior.", "Classes use new to create instances and can extend another class when specialization is useful."], code: "class User {\n  constructor(name) { this.name = name; }\n  greet() { return `Hi, ${this.name}`; }\n}\nconsole.log(new User(\"Asha\").greet());", challenge: "Create a Product class with a name and price.", realWorld: "Classes model SDK clients, game entities and domain objects." },
      {
        slug: "control-flow",
        title: "Conditions & Loops",
        summary: "Repeat actions and branch on values.",
        content: [
          "Use if, else and else if to choose a path. Use for and while loops when work needs to repeat.",
          "break stops a loop early, while continue skips to its next iteration.",
        ],
        code: 'for score of [45, 82, 67]:\n  if (score >= 50) console.log(`${score}: pass`);\n  else console.log(`${score}: try again`);',
        challenge: "Print only the odd numbers from 1 through 9.",
      },
      {
        slug: "scope-errors",
        title: "Scope & Error Handling",
        summary: "Keep values predictable and handle failures.",
        content: [
          "Block scope means let and const belong to the nearest pair of braces. Keeping values scoped reduces accidental changes.",
          "try, catch and finally let an application respond to errors and still perform cleanup.",
        ],
        code: 'try {\n  const value = JSON.parse("{bad json}");\n  console.log(value);\n} catch (error) {\n  console.log("Invalid JSON");\n}',
        challenge: "Catch an error when converting invalid JSON.",
      },
      {
        slug: "modules-storage",
        title: "Modules & Browser Storage",
        summary: "Organize code and persist small browser values.",
        content: [
          "Modules export reusable values and import them where needed. This keeps larger applications easier to navigate.",
          "localStorage stores small string values in a browser. Do not use it for secrets or sensitive personal data.",
        ],
        code: 'localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");\nconsole.log(theme);',
        challenge: "Store and read a preferred language from localStorage.",
      },
    ],
    quiz: [
      {
        question: "Which keyword is preferred for a value that will not be reassigned?",
        options: ["var", "const", "static", "value"],
        answer: 1,
        explanation: "const prevents reassignment of the variable binding.",
      },
      {
        question: "Which browser API is commonly used for HTTP requests?",
        options: ["fetch", "print", "alert", "query"],
        answer: 0,
        explanation: "fetch is the standard promise-based web API for network requests.",
      },
      {
        question: "What is an array best suited for?",
        options: ["An ordered collection", "A CSS rule", "A database server", "A URL only"],
        answer: 0,
        explanation: "Arrays hold ordered values and support operations such as map and filter.",
      },
      {
        question: "What does an event listener do?",
        options: ["Compiles CSS", "Responds to an event", "Creates a database", "Starts Docker"],
        answer: 1,
        explanation: "Event listeners run a callback when a matching browser event occurs.",
      },
      {
        question: "Why use async/await?",
        options: ["To write readable asynchronous flow", "To replace HTML", "To remove functions", "To style buttons"],
        answer: 0,
        explanation: "async/await makes promise-based asynchronous code easier to read and handle.",
      },
    ],
  },
  {
    slug: "docker",
    name: "Docker Foundations",
    eyebrow: "Ship consistently",
    description:
      "Understand images, containers, volumes, networking and Compose through a practical beginner-friendly path.",
    level: "Beginner",
    lessons: [
      {
        slug: "why-docker",
        title: "Why Docker?",
        summary: "Understand the consistency problem containers solve.",
        content: [
          "Docker packages an application and its runtime requirements into a repeatable container image.",
          "That makes development, testing and deployment environments more consistent across machines.",
        ],
        code: 'docker --version',
        challenge: "Write one sentence explaining the 'works on my machine' problem.",
      },
      {
        slug: "images-containers",
        title: "Images & Containers",
        summary: "Learn the difference between a reusable image and a running container.",
        content: [
          "An image is an immutable template containing application layers and metadata.",
          "A container is a running instance created from an image, with its own isolated process environment.",
        ],
        code: 'docker run --rm hello-world',
        challenge: "Explain why many containers can be created from one image.",
      },
      {
        slug: "dockerfile",
        title: "Dockerfile Basics",
        summary: "Describe how to build an application image.",
        content: [
          "A Dockerfile contains ordered instructions used to build an image.",
          "Common instructions include FROM, WORKDIR, COPY, RUN, EXPOSE and CMD.",
        ],
        code: 'FROM node:22-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci\nCMD ["npm", "start"]',
        challenge: "Identify which line chooses the base image.",
      },
      {
        slug: "ports-volumes",
        title: "Ports & Volumes",
        summary: "Expose network services and persist data outside a container layer.",
        content: [
          "Port publishing maps a host port to a port inside the container.",
          "Volumes persist or share data independently of the container lifecycle.",
        ],
        code: 'docker run -p 3000:3000 -v app-data:/data my-app',
        challenge: "Which host port receives traffic in the example command?",
      },
      {
        slug: "compose",
        title: "Docker Compose",
        summary: "Run multiple services from one declarative configuration.",
        content: [
          "Compose is useful when an application needs several cooperating services such as a web app and database.",
          "A compose file documents service images, build contexts, ports, volumes, networks and environment values.",
        ],
        code: 'services:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:17',
        challenge: "Add a named volume to the database service in your own practice file.",
      },
      {
        slug: "workflow",
        title: "Everyday Docker Workflow",
        summary: "Build, inspect, stop and clean up containers safely.",
        content: [
          "A practical workflow includes building images, starting services, inspecting logs and stopping resources when finished.",
          "Use explicit names and Compose projects so development environments remain understandable as they grow.",
        ],
        code: 'docker compose up -d\ndocker compose logs -f\ndocker compose down',
        challenge: "Describe the difference between docker compose down and simply closing a terminal.",
      },
    ],
    quiz: [
      {
        question: "What is a Docker image?",
        options: ["A running process only", "A reusable container template", "A domain name", "A database query"],
        answer: 1,
        explanation: "Images are reusable templates from which containers are created.",
      },
      {
        question: "What does -p 3000:3000 configure?",
        options: ["A volume", "Port publishing", "An image tag", "A user"],
        answer: 1,
        explanation: "The -p flag maps a host port to a container port.",
      },
      {
        question: "Why use a volume?",
        options: ["Persist data", "Write CSS", "Compile TypeScript", "Create DNS records"],
        answer: 0,
        explanation: "Volumes keep data outside the writable container layer.",
      },
      {
        question: "Which file describes image build instructions?",
        options: ["README.md", "Dockerfile", "package.json only", ".gitignore"],
        answer: 1,
        explanation: "A Dockerfile contains ordered instructions used to build an image.",
      },
      {
        question: "What is Docker Compose useful for?",
        options: ["Multi-service application environments", "Image editing", "Email marketing", "Browser bookmarks"],
        answer: 0,
        explanation: "Compose defines and runs related services together from one configuration.",
      },
    ],
  },
];

const topicOrder: Record<string, string[]> = {
  python: ["introduction", "variables", "operators", "conditions", "loops", "functions", "lists-dictionaries", "tuples-sets", "strings", "file-handling", "errors", "exceptions", "modules-files", "modules", "oop", "inheritance", "iterators-generators", "virtual-environments", "apis-json"],
  javascript: ["basics", "variables", "operators", "conditions", "control-flow", "functions", "arrays-objects", "dom-events", "es6", "destructuring", "spread-rest", "modules", "promises", "async-fetch", "async-await", "error-handling", "classes", "modules-storage", "scope-errors"],
};

function addTopicQuiz(lesson: Lesson): Lesson {
  if (lesson.quiz) return lesson;
  return {
    ...lesson,
    keyInsight: lesson.keyInsight ?? lesson.summary,
    codeExplanation: lesson.codeExplanation ?? `This example shows the core ${lesson.title.toLowerCase()} idea in a small, runnable program.`,
    realWorld: lesson.realWorld ?? `${lesson.title} appears in everyday application code, scripts and APIs.`,
    quiz: [
      { question: `What is the main idea in ${lesson.title}?`, options: [lesson.summary, "It is only used for styling", "It replaces every other language", "It cannot be used in applications"], answer: 0, explanation: lesson.summary },
      { question: `Where can ${lesson.title.toLowerCase()} be useful?`, options: ["Real programs and automation", "Only inside a database", "Only in a text editor", "Nowhere outside a quiz"], answer: 0, explanation: `${lesson.title} is a practical programming concept used in real projects.` },
    ],
  };
}

export function getCourse(slug: string) {
  const course = courses.find((item) => item.slug === slug);
  if (!course) return undefined;
  const order = topicOrder[slug];
  const lessons = order
    ? [...course.lessons].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)).map((lesson, index) => ({ ...addTopicQuiz(lesson), level: index > 8 ? "Intermediate" as const : "Beginner" as const }))
    : course.lessons;
  return { ...course, lessons };
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  return getCourse(courseSlug)?.lessons.find((lesson) => lesson.slug === lessonSlug);
}
