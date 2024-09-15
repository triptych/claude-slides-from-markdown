# Markdown Slideshow

A web-based tool for converting Markdown into an interactive slideshow. Write your presentation content in Markdown format and instantly preview it as HTML slides.

## Features

- Split view layout with a Markdown editor pane and a real-time slideshow preview pane
- Load Markdown content from a file or save the current content to a file
- Slides are automatically generated from the Markdown input
  - Horizontal rules (`---`) or heading elements (`#`, `##`, etc.) are used to split content into slides
- Supports common Markdown elements:
  - Headings
  - Paragraphs
  - Lists (ordered and unordered)
  - Links
  - Images
  - Code blocks with syntax highlighting
  - Blockquotes
  - Emphasis (bold and italic)
- Navigate through the slides using Previous and Next buttons or arrow keys
- Enter fullscreen presentation mode for a distraction-free slideshow view
- Export your presentation to a standalone HTML file for easy sharing and offline access
- Clean, responsive design that adapts to different screen sizes

## Getting Started

To use the Markdown Slideshow tool locally:

1. Clone this repository or download the source files
2. Open `index.html` in a modern web browser
3. Write your presentation content in the Markdown editor pane
4. Use the toolbar buttons or keyboard shortcuts to navigate the slides, enter fullscreen mode, or export to HTML

## Markdown Syntax

The Markdown editor supports standard Markdown syntax, including:

- Headings: `# H1`, `## H2`, etc.
- Lists: `- item`, `* item`, `1. item`, etc.
- Links: `[link text](url)`
- Images: `![alt text](image url)`
- Emphasis: `*italic*`, `**bold**`
- Code blocks: ` ```code``` `
- Blockquotes: `> quote`

Refer to `slides.md` for an example of the expected Markdown format.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Marked](https://github.com/markedjs/marked) - A Markdown to HTML converter

## Next Steps

Potential enhancements to the Markdown Slideshow tool include:

- Adding support for speaker notes that are visible in presenter mode
- Allowing customization of the slide theme and transition animations
- Enabling export to additional formats like PDF
- Incorporating interactive elements like polls or quizzes
- Exploring options for real-time collaboration

Contributions and suggestions are welcome! Please open an issue or submit a pull request.

## License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT).
