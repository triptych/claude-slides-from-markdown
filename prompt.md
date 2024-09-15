# Markdown to Slideshow Web Tool

Create a web-based tool that converts markdown content into an interactive slideshow format.

## Functionality

- Accept markdown content as input, either by pasting into a text area or uploading a markdown file
- Convert the provided markdown into a slideshow format using HTML, CSS, and JavaScript
- The markdown content should be split into individual slides based on horizontal rules (---) or heading elements (e.g. ## Slide Title)
- Support common markdown elements on slides:
  - Headings (H1 to H6)
  - Paragraphs
  - Lists (ordered and unordered)
  - Links
  - Images
  - Code blocks
  - Blockquotes
  - Emphasis (bold, italic)
- Provide navigation controls to move between slides (e.g. Next and Previous buttons, keyboard arrow shortcuts)
- Apply clean and professional styling to the slideshow (can provide a few different theme options)
- Slides should fill most of the viewport but shouldn't feel cramped
- Code syntax highlighting for code blocks using a library like highlight.js
- Option to enter fullscreen presentation mode
- Option to export/save the slideshow for offline use

## Technical Details

- Use a only native html, css, js for the implementation
- Leverage an existing library for converting markdown to HTML like marked or markdown-it
- Implement the slide navigation and behaviors using client-side JavaScript
- Use CSS to style the slideshow and handle responsive layouts
- Provide clear documentation on how to set up and run the project locally
- The project should be able to be deployed as static html, css, js files

## Stretch Goals

- Support speaker notes that are visible in presenter mode but not the main slideshow
- Allow customizing slide transitions/animations
- Support exporting slideshow as a PDF
- Embed interactive elements like polls, quizzes on slides
- Real-time synchronization for collaborative presentation

Provide a detailed README file explaining the motivation behind the project, setup instructions, usage guide, and implementation details. The project should be approachable for developers of varying skill levels while still demonstrating your abilities in frontend development, code organization, and attention to the user experience.
