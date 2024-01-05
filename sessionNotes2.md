E5 P2 - TOPICS
We will make the website dynamic, interactive

On a click of a button we want to see top rated resturants. How will do it?
Top rated resturant = Resturant > 4 stars

Event Handlers
(Attribute) onClick={() => {}} //onClick takes a callback function

onClick={(res) => res.data.avgRating > 4}

const listOfResturants = [];

{listOfResturants.map((resturant) => (
<ResturantCard key={resturant.data.id} resData={resturant} />
))}

When we try to loop over this we dont see anything because it is a empty list

React is FAST in DOM manipulation
React is EFFICIENT in DOM manipulation

We have to keep our Data layer and UI layer Consistent together / tied together (Work with each other - Insync)

- That is when React and other frameworks.libraries comes into picture

Right now listOfResturant is a normal JS variable

Super power variable - State (keyword) of this component

- How do we create a super powerful variable? (React Hooks)
  > X- We use a React Hooks - Known as useState()
  > X- A react hook is a normal JS function which is given to us by react
  > X- It is a Utility function written by Meta developers
  > X- It is a pre-built , it comes with some super powers
  > There are multiple React Hooks
  > 2 very important hooks
  - useState()
  - useEffect()

useState()
Used to generate super power state variables
Used to create a state variable -> It maintains the state of our component
local state variable is limited to that component
First we need to import useState() like a Named Import-

> import { useState } from 'react';

When we call the above useState() -> It gives us a state variable

> useState();

How do we get the state variable?

> const [listOfResturants] = useState() // Inside an array
> Whatever we pass inside the useState("Anything here") -> becomes the default value

creating a state variable:
const [listOfResturants] = useState([]);

creating a normal JS variable:
let listOfResturants = [];

> How do we modify this state variable?

By a function which is the second parameter which is generally with the "set"

const [listOfResturants, setListOfResturants] = useState([]);
listOfResturants - creating the state variable
setListOfResturants - update the list of Resturants

We can give any name to the set

> how do we pass in the new data to the list?
> onClick={() => {

            listOfResturants = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfResturants);
          }}

So here first lets define a variable called filteredList

const filteredList = listOfResturants.filter(
(res) => res.data.avgRating > 4
)
setListOfResturants(filteredList);

> filteredList - will get the filtered value (resturants greater than 4)
> listOfResturants - state variable
> setListOfResturants - updates the state variable (updated resturant list > 4 rating)

RENDER

- WHENEVR A 'STATE VARIABLE' UPDATES, REACT RENDERS THE COMPONENT.
- DOM Manipulation - Reacts power (Core logic of React)

Keeps our Data layer in Sync with the UI Layer

Behind the scenes: React

> React uses something called as "RECONCILIATION" algorithm - also known as "React fiber"
> DOM has 7 res cards
> we filter the cards and we get 3 cards - React creates a Virtual DOM (normal JS object)
> Actual DOM - HTML Elements or the tags
> Virtual DOM - Is a representation of the actual DOM

Diff Algo - Finds out the difference between two virtual DOMS (updated virtual DOm and Previous Virtual DOM)
Calculates the diff and updates the actual DOM

const [listOfResturants, setListOfResturants] = useState();

We are destructuring it on the fly. same as below:
const arr = useState(resList);
const [listOfResturants, setListOfResturants] = arr;

const [listOfResturants] = arr[0];
const [setListOfResturants] = arr[1];
