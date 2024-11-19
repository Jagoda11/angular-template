# Angular Template Project 🌟

![License: Commercial](https://img.shields.io/badge/license-Commercial-pink)
![TypeScript](https://img.shields.io/github/package-json/dependency-version/Jagoda11/angular-template/dev/typescript?label=TypeScript)
![Angular](https://img.shields.io/github/package-json/dependency-version/Jagoda11/angular-template/@angular/core?label=Angular)
[![🧹 Remove Stale Unmerged Branches](https://github.com/Jagoda11/angular-template/actions/workflows/%F0%9F%A7%B9remove-stale-unmerged-branches.yml/badge.svg)](https://github.com/Jagoda11/angular-template/actions/workflows/%F0%9F%A7%B9remove-stale-unmerged-branches.yml)
[![🚀 Dependency Update and Vulnerability Scan](https://github.com/Jagoda11/angular-template/actions/workflows/%E2%AC%86%EF%B8%8Fnpm-upgrade.yml/badge.svg)](https://github.com/Jagoda11/angular-template/actions/workflows/%E2%AC%86%EF%B8%8Fnpm-upgrade.yml)
[![CI](https://github.com/Jagoda11/angular-template/actions/workflows/%F0%9F%9A%80ci.yml/badge.svg)](https://github.com/Jagoda11/angular-template/actions/workflows/%F0%9F%9A%80ci.yml)

A starter template for Angular projects with ESLint, Prettier, and custom scripts. This template is designed to help you kickstart your Angular applications with the latest configurations and best practices. 🚀

## Features ✨

- **Angular**: Latest version of Angular for building modern web applications.
- **ESLint**: Integrated ESLint for code linting and maintaining code quality.
- **Prettier**: Code formatting with Prettier to ensure consistent code style.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **Karma & Jasmine**: Testing setup with Karma and Jasmine for unit testing.

## Getting Started 🛠️

### Prerequisites

- Node.js (v23.1.0 or higher)
- npm (v10.9.0 or higher)

### Installation

**Clone the repository**:

```bash
git clone https://github.com/Jagoda11/angular-template.git
cd angular-template
```

**Install dependencies**:

```bash
npm install
```

**Running the Development Server**
To start the development server, run:

```bash
  npm start
```

This will start the Angular development server and you can view your application at <http://localhost:4200>.

**Building the Project**
To build the project,run:

```bash
  npm run build
```

This will create a production build of your application in the dist/ directory.

Running Tests
To run the tests, use:

```bash
  npm test
```

This will execute the unit tests using Karma and Jasmine.

**Linting the Code**
To lint the code, run:

```bash
  npm run lint
```

This will run ESLint on your project to check for code quality issues.

**Formatting the Code**
To format the code using Prettier, run:

```bash
  npm run format
```

This will format your code according to the Prettier configuration.

**Cleaning Up**
To clean up the project (remove node_modules, dist, and package-lock.json), run:

```bash
  npm run clean
```

**Generating Test Files**
To generate missing test files, run:

```bash
npm run generate-tests
```

This will create test files for your Angular components, services, application configs, and other exports that do not already have corresponding test files. The generated test files will include appropriate test cases for exported members, lifecycle hooks, and other relevant aspects.

## 📜 Scripts

Here are the available scripts in this project:

- **`start`** 🚀: Starts the development server  
  `npm run start`

- **`build`** 🏗️: Builds the project for production  
  `npm run build`

- **`watch`** 👀: Rebuilds the project on file changes  
  `npm run watch`

- **`test`** 🧪: Runs tests for the project  
  `npm run test`

- **`lint`** 🔍: Lints the project files using ESLint  
  `npm run lint`

- **`lint-fix`** 🔧: Lints and fixes issues in the codebase  
  `npm run lint-fix`

- **`format`** ✨: Formats the codebase using Prettier  
  `npm run format`

- **`clean`** 🧽: Cleans up `node_modules`, `dist`, and `package-lock.json`  
  `npm run clean`

- **`lint-staged`** 📝: Runs lint-staged to check and format only staged files  
  `npm run lint-staged`

- **`generate-tests`** 📝: Runs generate-tests to create test files and basic tests
  `npm run generate-tests`

  ## 🛡️ Pre-commit Hooks

This template uses Husky to run lint-staged and tests automatically before each commit. This ensures all code meets quality standards and passes tests before merging into the main codebase.

## ⚙️ Workflows

This project includes several GitHub Actions workflows to automate various tasks and maintain the project efficiently:

- **🔄 npm-upgrade.yml**: Automatically checks for and suggests upgrades to npm dependencies.
- **🔒 close-stale-issues-and-prs.yml**: Closes stale issues and pull requests that have had no recent activity, helping keep the issue tracker organized.
- **🏷️ label-new-pull-requests.yml**: Automatically labels new pull requests to streamline tracking and review processes.
- **🙏 thank-contributors-on-issue-close.yml**: Sends a thank-you message to contributors when an issue is closed, recognizing their support.
- **👋 welcome-new-pull-requests.yml**: Welcomes new contributors by commenting on their first pull request.
- **🚀 ci.yml**: Runs continuous tests on each commit to ensure code quality.
- **👋 welcome.yml**: Greets new contributors when they create their first issue.
- **🔒 close-merged-pull-requests.yml**: Closes pull requests automatically when they are merged, keeping the PR list clean.
- **🗑️ remove-merged-branches.yml**: Deletes branches automatically after they are merged, helping to keep the repository tidy.
- **🗑️ remove-stale-unmerged-branches.yml**: Removes branches that have been inactive and remain unmerged, maintaining a clean repository.

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request.

This project is licensed under the terms of the Commercial License Agreement. For more details, see the [LICENSE](LICENSE.md) file.
© 2024 Jagoda11
