# Introduction to JSX

JSX, or JavaScript XML, is a syntax extension for JavaScript that looks similar to HTML or XML. It is used primarily with React to describe what the UI should look like. JSX makes it easier to write and add HTML in React. While it is not mandatory to use JSX in React, it helps in making the code more readable and expressive.

## Key Features of JSX
- **XML-like Syntax**: Allows HTML-like syntax directly in JavaScript files.
- **Ease of Use**: Simplifies the process of writing React components.
- **Readability**: Makes code more readable and maintainable.
- **Integration**: Seamlessly integrates with JavaScript.

### Example
```jsx
const element = <h1>Hello, world!</h1>;

const element = React.createElement('h1', null, 'Hello, world!');


### 2. Embedding Expressions in JSX

#### File: `Embedding_Expressions_in_JSX.md`

```markdown
# Embedding Expressions in JSX

In JSX, you can embed any JavaScript expression by wrapping it in curly braces `{}`. This feature allows you to dynamically insert values, call functions, and leverage the full power of JavaScript within your JSX.

## Using Expressions
You can use any JavaScript expression, such as variables, functions, or operations inside the curly braces.

### Example
```jsx
const name = 'John Doe';
const element = <h1>Hello, {name}!</h1>;

Embedding Functions

You can also call JavaScript functions within JSX.

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = <h1>Hello, {formatName(user)}!</h1>;

Here, the formatName function is called within the JSX to display the user's full name.


### 3. JSX Syntax and Rules

#### File: `JSX_Syntax_and_Rules.md`

```markdown
# JSX Syntax and Rules

JSX follows certain syntax rules and conventions to maintain its structure and functionality. Understanding these rules is essential for writing valid and efficient JSX code.

## Basic Rules
1. **Elements Must Be Closed**: JSX elements must be properly closed with a corresponding closing tag or self-closing.
    ```jsx
    <div></div>
    <img src="image.png" />
    ```

2. **JSX Tags Can Contain Children**: Elements can contain other elements or text as children.
    ```jsx
    <div>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </div>
    ```

3. **JavaScript Expressions**: Use curly braces `{}` to embed JavaScript expressions.
    ```jsx
    const element = <h1>{2 + 2}</h1>; // Outputs: 4
    ```

4. **CSS Classes**: Use `className` instead of `class` to apply CSS classes.
    ```jsx
    <div className="container"></div>
    ```

5. **Conditional Rendering**: Use JavaScript conditional expressions to render elements conditionally.
    ```jsx
    const isLoggedIn = true;
    const element = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
    ```

## Nested Elements
JSX allows nesting elements within other elements to create complex structures.

### Example
```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to learning JSX!</p>
  </div>
);



### 4. JSX vs HTML

#### File: `JSX_vs_HTML.md`

```markdown
# JSX vs HTML

While JSX looks similar to HTML, there are several key differences between the two. Understanding these differences is crucial for writing effective JSX code in React.

## Key Differences

### 1. Attribute Naming
In JSX, attributes are named using camelCase instead of the lowercase naming convention in HTML.
- **HTML**: `<div onclick="handleClick()">`
- **JSX**: `<div onClick={handleClick}>`

### 2. Use of Curly Braces
JSX uses curly braces `{}` to embed JavaScript expressions, which is not possible in standard HTML.
- **HTML**: `<h1>Hello, world!</h1>`
- **JSX**: `<h1>{'Hello, world!'}</h1>`

### 3. Self-Closing Tags
All self-closing tags must end with a `/` in JSX, even for elements like `<img>`, `<br>`, etc.
- **HTML**: `<img src="image.png">`
- **JSX**: `<img src="image.png" />`

### 4. CSS Classes
The `class` attribute in HTML is replaced with `className` in JSX to avoid conflicts with the JavaScript `class` keyword.
- **HTML**: `<div class="container">`
- **JSX**: `<div className="container">`

## Example Comparison

### HTML
```html
<div class="container">
  <h1 onclick="handleClick()">Hello, world!</h1>
  <img src="image.png">
</div>
<div className="container">
  <h1 onClick={handleClick}>Hello, world!</h1>
  <img src="image.png" />
</div>

