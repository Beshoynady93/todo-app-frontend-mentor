This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./src/Screenshot%202023-12-02%20at%2019-47-19%20Todo%20App.png)

### Links

- Solution URL: [Add solution URL here](https://todo-app-frontend-mentor-challenge-ten.vercel.app/)
- Live Site URL: [Add live site URL here](https://rb.gy/76f6vx)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Tailwind css
- DaisyUI
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

How to emplement the drag and drop feature inside of react.

Main function below

```js
const handleRearrangeItems = () => {
  const sortedTodos = [...todos];

  if (draggedItem.current === undefined) return;

  const draggedItemContent = sortedTodos.splice(draggedItem.current, 1)[0];

  if (draggedOverItem.current === undefined) return;

  sortedTodos.splice(draggedOverItem.current, 0, draggedItemContent);

  setTodos(sortedTodos);
  setSelectedFilter('all');
};
```

### Continued development

Continue to learn NextJS.

## Author

- Frontend Mentor - [@Beshoynady93](https://www.frontendmentor.io/profile/Beshoynady93)
- Twitter - [@BeshoynadyNN](https://www.twitter.com/BeshoynadyNN)
