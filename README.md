# Portfolio — Mathieu Alassoeur

![CI](https://github.com/MatALass/portfolio/actions/workflows/ci.yml/badge.svg?branch=main)
![Status](https://img.shields.io/badge/status-active-success)
![Lint](https://img.shields.io/badge/lint-eslint-blue)
![Format](https://img.shields.io/badge/format-prettier-ff69b4)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Modern, modular and production-ready personal portfolio showcasing data, analytics and software engineering projects.

---

## Overview

This project is a fully refactored and structured version of a personal portfolio website, designed with a strong focus on:

- Clean architecture
- Maintainability
- Testability
- Performance
- UX consistency

Unlike typical portfolio websites, this project follows engineering best practices usually found in production-grade front-end applications.

---

## Key Features

- Modular JavaScript architecture (no framework)
- Clean separation of concerns (data / render / features / utils)
- Dynamic multilingual support (FR / EN)
- GitHub activity snapshot (live API)
- Project modal system
- Embedded playable demo (iframe-based)
- Fully testable logic (Node-based tests)
- Lint + formatting + CI pipeline

---

## Tech Stack

- HTML5 / CSS3
- Vanilla JavaScript (ES Modules)
- Node.js (tests & tooling)
- ESLint
- Prettier
- GitHub Actions (CI)

---

## Installation

```bash
git clone https://github.com/MatALass/portfolio.git
cd portfolio
npm install
```

---

## Usage

```bash
python -m http.server 8000
```

Then open:
http://localhost:8000

---

## Quality Checks

```bash
npm run check
```

Includes:
- Unit tests
- DOM tests
- Linting
- Formatting validation

---

## Configuration

All runtime settings are centralized in:

src/js/data/config.js

---

## CV Integration

Place your CV here:

assets/docs/mathieu-alassoeur-cv.pdf

---

## Author

Mathieu Alassoeur  
Data Analyst / Analytics Engineer  

---

## License

MIT
