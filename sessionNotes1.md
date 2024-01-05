/** Lets, Get Hooked! **/

E5 P1 - TOPICS

1. Clean our App (file structure)/ Good Practices
   - src folder
2. Other Good practices
3. Export and Import statements

---

> Anything we do in React/library/framework can be done in Html/Css/JS
> library/framework -

> Clean our App (file structure)/ Good Practices
> X- We must have seperate files for seperate components
> X- All files are currently in the root level
> X- As per industry standards we keep all our react code in the "src folder"
> X- Src folder - Source folder (Source code) - We can build our app without Src folder too (Code is clean)

Other Good practices

- Best practice is to keep a seperate file for every component
- Its a good practice to keep a components folder in src
- It is not madatory to keep seperate folder, it completly depends on the developer
- Try to keep the file name same name as the component
- You can use any extension, it hardly matters! (.js, .tsx, .jsx)

KEEP IT SIMPLE ALWAYS!

Before a file is "imported", it basically needs to be "exported" for it to be used in a different file
Always export then import (Give the component -> Then take)

> export default fileName;

Also people debate our file name is Header.js but when we import it should be the same:

import Header from "./components/Header.js";

If we write this way too is not wrong both will work:
import Header from "./components/Header";

React will treact it as a JS file irrespective of anything - Keep it simple

> Where ever we have any mock or hard coded data we whould never keep in the component file (not a industry standard)
> CDN urls too should not be kept in components
> A common practice is to keep it inside a seperate file called cofig.js/constant.js/utils.js
> We create a folder utils (utilities that will be used anywhere in the code)
> created a file called constants.js starts with a small letter because it is not a component
> It is good practice to keep all our constants with capital letters (Ex: CDN_URL)

There two types of exports and imports

1. default export

   > We can have only 1 default export in a module
   > A file can have only one default export
   > header component has a default export of header
   > Ex: export default header;
   > importing a default export, we dont need to use curly brackets {}

2. Named export

   > When we have export multiple things, we make use of named exports
   > We add export before the const
   > Ex: export const CDN_URL = "....." and export const LOGO_URL = "...."
   > we can also have component named exports

Once we use a named export we can import the same within curly brackets
Ex: import { LOGO_URL } from "../utils/constants"; -> This is a named import

> Can we have a default export with a named export?
> Every component file should not exceed 100 lines
