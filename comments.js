// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [ 'comment 1', 'comment 2' ] });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
```

### 3.2.2. Start the server
```bash
$ node comments.js
Server is running on port 3001
```

### 3.2.3. Test the server
```bash
$ curl http://localhost:3001/comments
{"comments":["comment 1","comment 2"]}
```

## 3.3. Create a web server to serve the HTML file
### 3.3.1. Create a new file `index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script>
      fetch('http://localhost:3001/comments')
        .then(response => response.json())
        .then(data => {
          const comments = document.getElementById('comments');
          data.comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            comments.appendChild(li);
          });
        });
    </script>
  </body>
</html>
```

### 3.3.2. Create a new file `index.js`
```javascript
// Path: index.js
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [ 'comment 1', 'comment 2' ] });
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
```

### 3.3.3. Start the server
```bash
$ node index.js
Server is running on port 3001
```

### 3.3.4. Test the server
```bash
$ curl http://localhost:300