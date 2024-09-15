# Markdown Slideshow

A web-based tool for converting markdown into an interactive slideshow.

## Features

- Live markdown editing with instant slideshow preview
- Slide navigation using previous/next buttons
- Fullscreen presentation mode
- Export slides to HTML
- Supports common markdown elements like headings, lists, links, images, code blocks, and more
- Clean and responsive design

## Setup

1. Clone the repository or download the source files
2. Open `index.html` in a web browser
3. Start creating your slides in the markdown editor

## Usage

- Write your presentation content in markdown format in the editor on the left
- Use `---` to separate your content into individual slides
- The markdown will automatically convert to HTML slides in the preview on the right
- Use the previous and next buttons to navigate through your slides
- Click the fullscreen button to enter presentation mode
- Export your slides to an HTML file using the export button

## Markdown Syntax

This tool supports standard markdown syntax, including:

- Headings (# H1, ## H2, etc.)
- Lists (-, *, 1., etc.)
- Links ([link](url))
- Images (![alt](src))
- Emphasis (bold: \*\*text\*\*, italic: \_text\_ or \*text\*)
- Code blocks (\`\`\` code \`\`\`)
- Blockquotes (&gt; quote)

Refer to the `slides.md` file for an example of the markdown structure.

## Customization

- Modify the `styles.css` file to customize the appearance of the slides and UI
- Adjust the slide splitting logic in `script.js` if needed (currently splits on `---` or heading elements)
- Add more functionality or interactivity to the slides using HTML, CSS, and JavaScript

## Dependencies

- [Marked](https://github.com/markedjs/marked) - Markdown to HTML converter

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source under the [MIT License](https://opensource.org/license/mit/).
