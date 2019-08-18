# Kellyferrone.com

The front end blog site. Built with VueJS and friends. 

## Prerequisites

- NodeJS ^8.9
- npm ^5.6


## Getting Started

## Steps to Run inside CodeMix/vscode


1. From the `Quick Open`  Command Palette (ctrl/cmd + shift + p) search for:
     `Terminal: Create New Integrated Terminal`
2. From the `Quick Open` options select this project.
3. Once you are inside the Terminal, execute: `npm install`
4. Finally to run this example run `npm run serve`
5. Open your browser on http://localhost:8080
6. To build run `npm run build` and generate HTML/CSS/JS minification.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Environment Variables

| name | Description | default |  
| ---- | ----------- | ------- |  
| VUE_APP_BLOGGER_API_KEY | Bloggers api key | some-key |  
| VUE_APP_BLOGGER_BLOG_ID | The ID of your blogs ID |  id | 
| FIREBASE_TOKEN | Firebase deploy token from `firebase login:ci` | token | 