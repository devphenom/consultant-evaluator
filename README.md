# Customer Evaluator

A lightweight web application that helps clients evaluate consultants based on a job description, built with Next.js and Tailwind CSS.

**Live Demo**: [https://consultant-evaluator.vercel.app/](https://consultant-evaluator.vercel.app/)

![Homepage](/public/landing.png)

## Project Overview

This application allows users to:

- Input a job description
- View 10 consultant profiles relevant to that description
- See AI-generated evaluations for each consultant
- Filter consultants by various criteria

Each consultant evaluation includes:

- A basic fit score/ranking
- A short summary
- Key pros and cons
- Suggested questions to ask during interviews

## Features

- **Job Description Input**: Easy-to-use form for entering job requirements
- **Consultant Matching**: Displays consultants relevant to the job description
- **AI-Powered Evaluations**: Uses LLM inference API to generate insights
- **Responsive UI**: Clean interface built with Tailwind CSS and shadcn/ui
- **Filtering System**: Filter consultants by location, experience, or keywords

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, shadcn/ui
- **Backend**: Next.js API routes
- **AI Inference**: Integration with LLM API

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/components` - UI components including consultant-related components
- `/pages` - Application pages and API routes
- `/lib` - Utility functions and data

## Implementation Approach

The implementation follows a modular approach:

1. Created a clean, intuitive UI using shadcn/ui components
2. Developed a form to collect job description inputs
3. Implemented mock consultant profiles with relevant information
4. Integrated with an LLM inference API to generate evaluations
5. Added filtering functionality for better user experience
6. Ensured responsive design for all screen sizes

The application minimizes unnecessary API calls while maintaining a smooth user experience.

## Future Enhancements

- User authentication
- Saved job descriptions
- More advanced filtering options
- Expanded consultant database
