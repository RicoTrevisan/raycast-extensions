# Grab Bubble Cookie

A Raycast extension that extracts specific Bubble.io authentication cookies from your clipboard and copies only the essential parts back to the clipboard.

## 🎯 Purpose

When working with Bubble.io applications, you often need to extract specific authentication cookies from a full cookie string. This extension automatically identifies and extracts the key Bubble.io authentication cookies:

- `meta_live_u2main`
- `meta_live_u2main.sig`
- `meta_u1main`

## 🚀 Features

- **One-click extraction**: Simply copy any cookie string to your clipboard and run the command
- **Smart filtering**: Automatically identifies and extracts only the relevant Bubble.io cookies
- **Clean output**: Returns properly formatted cookie string ready for use
- **Error handling**: Provides clear feedback when no matching cookies are found

## 📋 How to Use

1. Copy a cookie string containing Bubble.io cookies to your clipboard
2. Open Raycast and search for "Extract cookies"
3. Press Enter to run the command
4. The filtered cookies will be automatically copied back to your clipboard

### Example

**Input (copied to clipboard):**
```
sessionid=abc123; csrftoken=def456; meta_live_u2main=ghi789; meta_live_u2main.sig=jkl012; meta_u1main=mno345; other_cookie=pqr678
```

**Output (copied back to clipboard):**
```
meta_live_u2main=ghi789; meta_live_u2main.sig=jkl012; meta_u1main=mno345;
```

## 🛠 Installation

### From Raycast Store
1. Open Raycast
2. Search for "Grab Bubble Cookie"
3. Click Install

### Manual Installation
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development mode
4. The extension will be available in Raycast

## 🧑‍💻 Development

### Prerequisites
- Node.js 16 or later
- Raycast app installed

### Setup
```bash
# Clone the repository
git clone https://github.com/RicoTrevisan/grab-bubble-cookie.git
cd grab-bubble-cookie

# Install dependencies
npm install

# Start development
npm run dev
```

### Available Scripts
- `npm run dev` - Start development mode
- `npm run build` - Build the extension
- `npm run lint` - Run ESLint
- `npm run fix-lint` - Fix ESLint issues
- `npm run publish` - Publish to Raycast Store

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 RicoTrevisan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**RicoTrevisan**

---

Built with ❤️ for the Bubble.io community