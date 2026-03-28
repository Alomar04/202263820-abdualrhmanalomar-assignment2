# Technical Documentation

## Overview
This project is a single-page interactive portfolio website built with semantic HTML, custom CSS, and vanilla JavaScript. The design goal was to transform a basic static portfolio into a more dynamic user experience while keeping the codebase lightweight, readable, and easy to maintain.

## Project Structure
- `index.html` contains the semantic page structure, tab buttons, content panels, and contact form.
- `css/styles.css` handles visual styling, responsive layout rules, animations, and theme-specific design variables.
- `js/script.js` controls tab switching, theme persistence, and contact form validation logic.
- `docs/` stores the written documentation required by the assignment.

## Technical Decisions
### Semantic HTML
The layout uses clear structural elements such as `header`, `main`, `section`, `nav`, `form`, and `footer`. This improves readability, accessibility, and maintainability.

### CSS Architecture
The stylesheet is organized around:
- root-level custom properties for colors, spacing, and transitions
- reusable layout classes such as `.container`, `.hero-grid`, and `.project-grid`
- component classes for cards, buttons, tabs, and form elements
- responsive media queries for tablet and mobile layouts

CSS custom properties make the dark/light theme easier to maintain because the theme only changes variable values rather than rewriting every component style.

### JavaScript Approach
Vanilla JavaScript was used because the project requirements are small enough that a framework would add unnecessary complexity. The script is split into focused functions for each feature:
- `setActiveTab()` updates active tab buttons and panels
- `applyTheme()` and `toggleTheme()` control theme switching
- `initializeTheme()` restores the saved theme from `localStorage`
- `validateForm()` checks user input
- `handleFormSubmit()` displays a success message when the form is valid

## Feature Implementation
### 1. Tabbed Navigation
Each tab button contains a `data-tab` attribute that matches the `id` of a section panel. When a tab is clicked, JavaScript:
- removes the active state from all buttons and panels
- applies the active class to the selected button and panel
- hides inactive panels using the `hidden` attribute

This creates a seamless single-page experience without reloading the browser.

### 2. Theme Toggle with localStorage
The theme toggle button switches a `dark-theme` class on the `body`. The selected theme is stored in `localStorage` under the key `portfolio-theme`. When the page loads, the script checks that key and restores the saved preference automatically.

This satisfies the persistence requirement and improves usability for returning users.

### 3. Contact Form Validation
The contact form validates three fields:
- name must not be empty
- email must not be empty and must match a valid email pattern
- message must not be empty

If validation fails, the script:
- adds an error style to the related input
- shows a friendly message below that field
- prevents form submission

If validation succeeds, the script:
- clears old errors
- displays a success confirmation message
- resets the form fields

### 4. Animations and Transitions
The interface includes:
- a fade-in animation when switching between tab panels
- hover transitions on project cards and buttons
- smooth color and shadow transitions when toggling the theme

These effects make the site feel more polished without reducing readability or performance.

## UX Flow
1. The user lands on the `About` tab by default.
2. The header provides immediate access to all main sections.
3. The theme toggle is always visible, making personalization easy.
4. The `Projects` tab presents portfolio examples in card form.
5. The `Contact` tab includes direct inline feedback so users understand exactly how to complete the form.

The overall flow is simple and predictable, which supports both usability and grading clarity.

## Responsiveness
The layout is mobile-friendly through flexible widths, CSS Grid, and media queries. On smaller screens:
- multi-column sections collapse into a single column
- navigation controls stack more naturally
- spacing and typography remain readable

This ensures the site is functional across phones, tablets, and desktops.

## Maintainability
The project remains maintainable because:
- each file has a single clear responsibility
- JavaScript functions are short and focused
- styles are grouped by component and layout purpose
- theme values are centralized in CSS variables

This makes future changes easier, such as adding more projects, tabs, or validation rules.
