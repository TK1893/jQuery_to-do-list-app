# To-Do List App

A simple and interactive to-do list app built with HTML, CSS, jQuery, and jQuery UI. This application allows users to add, strike through, delete, and reorder tasks.

## Table of Contents

- [Demo](#demo)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Installation](#installation)

- [Usage](#usage)

- [Code Overview](#code-overview)

- [License](#license)
- [Author](#author)

---

## Demo

A live demo of the app is available at:  
[https://tk1893.github.io/jQuery_to-do-list-app/](https://tk1893.github.io/jQuery_to-do-list-app/)

---

## Features

- **Add Tasks**: Users can add tasks by entering text into an input field.

- **Strike Through Tasks**: Double-clicking a task will mark it as "completed."

- **Delete Tasks**: A task can be deleted by clicking the "X" button next to it.

- **Reorder Tasks**: Tasks can be reordered via drag-and-drop.

---

## Technologies Used

- **`HTML5`** - For the structure of the application.

- **`CSS3`** - For basic styling and layout.

- **`JavaScript (jQuery)`** - To create dynamic interactions.

- **`jQuery UI`** - For drag-and-drop functionality.
- **`GitHub Pages`** - The website is hosted on GitHub Pages for easy deployment and accessibility.

---

## Modules and Packages

The following libraries and packages are used in this project:

- [jQuery](https://jquery.com/): Version 3.7.1

- [jQuery UI](https://jqueryui.com/): Version 1.12.1

---

## Installation

### 1. **Clone the Repository**:

```bash

git clone https://github.com/TK1893/jQuery_to-do-list-app.git

cd jQuery_to-do-list-app

```

### 2. **Dependencies**

No additional dependencies are required, as all libraries are linked via CDNs.

### 3. **Run on a Local Server**

Open `index.html` in your browser to launch the application.

---

## Usage

- Enter a task into the input field and click **Add** to add it to the list.
- Double-click a task to mark it as "completed."
- Click the **X** next to a task to delete it.
- Drag and drop tasks to rearrange their order.

---

## Code Overview

### `index.html`

- Defines the structure of the app, including elements like the input field, task list, and Add button.
- Includes jQuery and jQuery UI via CDN links.

### `script.js`

- **`newItem()`**: Main function to create and add a new task to the list.

- **Event Listeners**:
  - **Double-click** on a `<li>` element to strike through a task.
  - **Click** on the **X** button to remove a task from the list.
  - jQuery UI **`sortable()`** enables reordering tasks through drag-and-drop.

---

## License

This project is open-source under the MIT License.

---

## Author

Developed by [Tobias Kraft](https://tk1893.github.io/tk-portfolio/).
