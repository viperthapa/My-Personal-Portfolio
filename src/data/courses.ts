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

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  return getCourse(courseSlug)?.lessons.find((lesson) => lesson.slug === lessonSlug);
}
