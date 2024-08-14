# Components in MkDocs


This is a simple MkDocs project integrated with Vue.js.

<div id="app">
    <ol>
        <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>
</div>

 
## Headings
  This page demonstrates various components available in MkDocs.



  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6

  ## Paragraphs

  This is a paragraph with *italic*, **bold**, and `inline code`.

---

## Blockquotes

  > This is a blockquote.
  >
  > It can span multiple lines.

## Lists

  ### Unordered List

  - Item 1
    - Subitem 1
    - Subitem 2
  - Item 2
  - Item 3

  ### Ordered List

  1. Item 1
  2. Item 2
  3. Item 3

  ### Task List

  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3

## Code Blocks

  ### Inline Code

  This is `inline code`.

  ### Block Code

  ```python
  def hello_world():
      print("Hello, world!")
  ```




## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
| Row 3    | Data 5   | Data 6   |



| Column 1 |Column 2| Column 3 |
|-|-|-|
|Row 1| Data 1| Data 2|
| Row 2 |Data 3| Data 4 |
|Row 3|Data 5|Data 6|


Admonitions
Note
!!! note
This is a note admonition.

Tip
!!! tip
This is a tip admonition.

Warning
!!! warning
This is a warning admonition.

Danger
!!! danger
This is a danger admonition.

Example with Title
!!! note "Note Title"
This is a note with a custom title.

Images
Inline Image

Linked Image

Emojis
You can use emojis in your documentation :smile: :tada: :rocket:

Alerts
Information
!!! info
This is an informational alert.

Success
!!! success
This is a success alert.

Warning
!!! warning
This is a warning alert.

Error
!!! error
This is an error alert.






# Welcome to BASEMODEL Documentation parent

This is the English version of the BASEMODEL documentation.

## Navigation

- [Home](index.md)
- [About](about.md)
- [Python](python.md)
- [SQL](sql.md)
- [Components](components.md)
- [BIM Execution Plan](BEP.md)












Select mode: 
<select id="mode-switcher">
    <option value="light">Light Modex</option>
    <option value="dark">Dark Modex</option>
</select>



<pre><code class="python">def hello_world():
    print("Hello, world!")

hello_world()</code></pre>





graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;




sequenceDiagram
    participant Alice
    participant Bob
    Alice->>Bob: Hello Bob, how are you?
    Bob-->>Alice: I am good thanks!


These examples showcase a wide range of components available in MkDocs with the Material theme. You can use these components to create rich and interactive documentation. Make sure to include the necessary extensions and configurations in your `mkdocs.yml` file to enable features like admonitions, tabs, and mermaid diagrams.<br>





Make coming to constoctionsite obsolete.<br>
