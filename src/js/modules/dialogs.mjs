import { addFunctionality, removeFunctionality } from "../helper.mjs"
import { fakeValidationAnimation, dialogsEntryAnimation, dialogsExitAnimation } from "./animations.mjs"
import { previousGameState } from "../modules/userProgress.mjs"


//********************* */
//* Global Variables
//********************* */

//* settings and howToPlay dialogs
const settingsDialog = document.querySelector(".settings-dialog");
const howToPlayDialog = document.querySelector(".how-to-play-dialog");

//* dark mode switch and checkbox and user OS color scheme preference
const darkModeSwitch = document.querySelector(".theme-switch");
const checkbox = darkModeSwitch.querySelector(".switch__checkbox");

//* all the single elements classes needed to apply dark mode
const singleElementsClasses = [
  "feedback-message", "header__title", "keyboard", "theme-switch"
]

//* all the multiple elements classes needed to apply dark mode
// elements that needs one hyphen (-dark) to apply dark mode 
const singleHyphenElements = [
  "game-board__letter--missing", "game-board__letter--close",
  "game-board__letter--correct", "keyboard__letter--missing",
  "keyboard__letter--close", "keyboard__letter--correct", "fake-letter--missing",
  "fake-letter--close", "fake-letter--correct"
];
// elements that needs two hyphen (--dark) to apply dark mode 
const doubleHyphenElements = [
  "game-board__letter", "keyboard__letter", "row-separator", "fake-letter",
  "subheader-text", "how-to-play__headings", "how-to-play__list", "loading-container",
  "loading-spinner", "source-notice"
];

const multipleElementsClasses = [singleHyphenElements, doubleHyphenElements];

// light and dark theme SVG elements
const lightThemeSVGs = document.body.querySelectorAll(".light-theme__svg");
const darkThemeSVGs = document.body.querySelectorAll(".dark-theme__svg");

//**********************************
//* General dialog Functions
//**********************************/

function openDialog(dialogName) {
  if (dialogName === "settings") {
    // add dialog entry animation
    dialogsEntryAnimation(settingsDialog);
    // show dialog and give focus to it
    settingsDialog.showModal();
    settingsDialog.focus();
  } else if (dialogName === "howToPlay") {
    dialogsEntryAnimation(howToPlayDialog);

    howToPlayDialog.showModal();
    howToPlayDialog.focus();
  }

  // add an event listener on page for the ESC key and outside the modal box clicks
  document.addEventListener("keydown", handleEscKeyClick(dialogName));
  document.addEventListener("click", handleOutsideDialogClick(dialogName));

  if (!previousGameState.isSolved) {
    // remove user input event listeners to prevent interaction
    removeFunctionality();
  }
}

function closeDialog(dialogName) {
  if (dialogName === "settings") {
    // Get corresponding dialog button
    const settingsBtn = document.body.querySelector(".settings-btn");
    // add dialog exit animation
    dialogsExitAnimation(settingsDialog);
    setTimeout(() => {
      // close dialog after animation duration and blur away from the button
      settingsDialog.close();
      settingsBtn.blur();
    }, 450);
  } else if (dialogName === "howToPlay") {
    const howToPlayBtn = document.body.querySelector(".how-to-play-btn");
    // add dialog exit animation
    dialogsExitAnimation(howToPlayDialog);
    // close dialog after animation duration
    setTimeout(() => {
      howToPlayDialog.close();
      howToPlayBtn.blur();
    }, 450);

  }

  // remove both dialog related event listeners
  document.removeEventListener("keydown", EscKeyDialogEvent);
  document.removeEventListener("click", outsideDialogAreaEvent);

  if (!previousGameState.isSolved) {
    // add user input event listeners to regain interactivity
    addFunctionality();
  }
}

/*
  * this function handles the press of an ESC key if a dialog is opened
*/
// reference
let EscKeyDialogEvent;

function handleEscKeyClick(dialogName) {
  EscKeyDialogEvent = (ev) => {
    if (ev.key === "Escape") {
      // prevent default behavior for ESC key with modal dialogs
      ev.preventDefault();
      // close the dialog
      closeDialog(dialogName);
    }
  }

  return EscKeyDialogEvent;
}

/*
  * this function handles mouse clicks outside of the dialog area
*/
// reference
let outsideDialogAreaEvent;

function handleOutsideDialogClick(dialogName) {
  outsideDialogAreaEvent = (ev) => {
    if ((ev.target instanceof HTMLDialogElement)) {
      closeDialog(dialogName);
    }
  }

  return outsideDialogAreaEvent;
}
//**********************************
//* Settings dialog Functions
//**********************************/

function handleSettingsButton() {
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsCloseBtn = document.querySelector(".settings-close");

  settingsBtn.addEventListener("click", openSettingsEvent);
  settingsCloseBtn.addEventListener("click", closeSettingsEvent);
}

function openSettingsEvent() {
  openDialog("settings");
}

function closeSettingsEvent() {
  closeDialog("settings");
}

//**********************************
//* Dark mode Functions
//**********************************/

//*********************
//* Main Functions
//*********************/

//* initial check function to know if a switch to dark theme is needed based on user preference
function initialDarkModeCheck() {
  // get current user preference
  let userPreference = detectPreferredColorScheme();

  if (userPreference === "dark") {
    // switch to dark theme
    handleThemeChange();
  }
}

//* main function for the dark mode button
function handleThemeButton() {
  // add theme button event listener
  checkbox.addEventListener("click", handleThemeChange);
}


//*********************
//* Helper Functions
//*********************/

//* main event handler for the dark mode button
function handleThemeChange() {
  // get current theme
  let currentTheme = checkbox.getAttribute("data-theme");
  // get single elements with single class corresponding to them
  const singleElements = getSingleElements(singleElementsClasses);
  // get multiple elements with single class corresponding to them
  const multipleElements = getMultipleElements(multipleElementsClasses);

  // if current theme is light or on first theme change
  if (currentTheme === "light") {
    // add dark mode classes
    addDarkTheme(singleElements, multipleElements);
  } else {
    // remove dark mode classes
    removeDarkTheme(singleElements, multipleElements);
  }
}

//* detect user preferred color scheme
function detectPreferredColorScheme() {
  // on first session
  if (localStorage.getItem("themePreference") === null) {
    // get user preferred color scheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // save user preference in local storage
    prefersDark ? localStorage.setItem("themePreference", "dark") : localStorage.setItem("themePreference", "light");
    // if dark is preferable, click the checkbox to apply visual changes to button
    if (prefersDark && checkbox.getAttribute("data-theme") === "light") {
      checkbox.click();
    }
    // return user preference
    return localStorage.getItem("themePreference");
  } else {
    return localStorage.getItem("themePreference");
  }
}

//* Dark mode applying function
function addDarkTheme(singleElements, multipleElements) {
  // change user preference in local storage to dark
  localStorage.setItem("themePreference", "dark");
  // change checkbox current theme attribute to dark
  checkbox.setAttribute("data-theme", "dark");
  // check the checkbox to apply visual changes => (handled with css)
  checkbox.checked = true;

  // handle SVG changes
  svgChanger(lightThemeSVGs, darkThemeSVGs, "dark");

  // add theme to general elements
  const body = document.body;
  body.classList.add("body--dark");

  const header = document.body.querySelector("header");
  header.classList.add("header--dark");

  const dialogs = document.body.querySelectorAll("dialog");
  dialogs.forEach(dialog => {
    dialog.classList.add("dialog--dark");
  })

  // add dark mode to single elements using their class
  if (singleElements.length > 0) {
    handleSingleElements(singleElements, "add");
  }

  // add dark mode classes to each group of elements with a single class
  if (multipleElements.length > 0) {
    handleMultipleElements(multipleElements, "add");
  }
}


//* Dark mode removing function
function removeDarkTheme(singleElements, multipleElements) {
  // change user preference in local storage to light
  localStorage.setItem("themePreference", "light");
  // change checkbox current theme attribute to light
  checkbox.setAttribute("data-theme", "light");

  // handle SVG changes
  svgChanger(lightThemeSVGs, darkThemeSVGs, "light");

  // remove theme from general elements
  const body = document.body;
  body.classList.remove("body--dark");

  const header = document.body.querySelector("header");
  header.classList.remove("header--dark");

  const dialogs = document.body.querySelectorAll("dialog");
  dialogs.forEach(dialog => {
    dialog.classList.remove("dialog--dark");
  })

  // remove dark mode from single elements using their class
  if (singleElements.length > 0) {
    handleSingleElements(singleElements, "remove");
  }

  // remove dark mode classes for each group of elements with a single class
  if (multipleElements.length > 0) {
    handleMultipleElements(multipleElements, "remove");
  }
}

/*
  * Function that takes an array of Elements from the DOM, and based on the method
  * either adds or removes dark mode classes based on the corresponding singleElementsClasses
*/
function handleSingleElements(elements, method) {
  elements.forEach(elem => {
    for (let elemClass of elem.classList) {
      if (singleElementsClasses.includes(elemClass)) {
        if (method === "add") {
          elem.classList.add(`${elemClass}--dark`);
        } else if (method === "remove") {
          elem.classList.remove(`${elemClass}--dark`);
        }
      }
    }
  })
}

/*
  * Function that takes an array of nodeLists from the DOM, and based on the method
  * either adds or removes dark mode classes based on the corresponding multipleElementsClasses
*/
function handleMultipleElements(elements, method) {
  elements.forEach(group => {
    // check it's not an empty nodeList
    if (group.length > 0) {
      group.forEach(child => {
        /* 
          * for each element classList check for which classes he have from
          * the multipleElementsClasses array
        */
        for (let elemClass of child.classList) {
          // elements classes that needs one hyphen to apply dark mode classes
          const singleHyphenArr = multipleElementsClasses[0];
          // elements that needs two hyphens
          const doubleHyphenArr = multipleElementsClasses[1];

          if (singleHyphenArr.includes(elemClass)) {
            if (method === "add") {
              child.classList.add(`${elemClass}-dark`);
            } else if (method === "remove") {
              child.classList.remove(`${elemClass}-dark`);
            }
          }
          else if (doubleHyphenArr.includes(elemClass)) {
            if (method === "add") {
              child.classList.add(`${elemClass}--dark`);
            } else if (method === "remove") {
              child.classList.remove(`${elemClass}--dark`);
            }
          }
        }
      })
    }
  })
}

/*
  * Function that takes as argument an array of class names which are associated with
  * only one element, and returns an array of elements from the DOM
*/
function getSingleElements(singleElementsClasses) {
  // initial array to store single elements
  let singleElements = [];

  // get elements
  singleElementsClasses.forEach(elem => {
    const element = getElement(elem);
    singleElements.push(element);
  })

  return singleElements;
}

/*
  * Function that takes as argument an array of class names which are associated with
  * multiple elements, and returns an array of nodeLists of elements from the DOM
*/
function getMultipleElements(multipleElementsClasses) {
  // initial array to store multiple elements
  let multipleElements = [];

  multipleElementsClasses.forEach(hyphenArr => {
    hyphenArr.forEach(group => {
      const elements = getElements(group);
      multipleElements.push(elements);
    })
  })

  return multipleElements;
}

// Function that takes a class name and returns one element from the DOM
function getElement(elementName) {
  return document.body.querySelector(`.${elementName}`);
}

//* Function that takes a class name and returns all associated elements from the DOM
function getElements(elementsName) {
  return document.body.querySelectorAll(`.${elementsName}`);
}

//* Function that handles SVG elements and changes them based on the current theme
function svgChanger(lightSVGs, darkSVGs, theme) {
  if (theme === "light") {
    lightSVGs.forEach(svg => {
      svg.removeAttribute("hidden");
    })
    darkSVGs.forEach(svg => {
      svg.setAttribute("hidden", "true");
    })
  } else if (theme === "dark") {
    darkSVGs.forEach(svg => {
      svg.removeAttribute("hidden");
    })
    lightSVGs.forEach(svg => {
      svg.setAttribute("hidden", "true");
    })
  }
}

//**********************************
//* how to play dialog Functions
//**********************************/

function handleHowToPlayButton() {
  const howToPlayBtn = document.body.querySelector(".how-to-play-btn");
  const howToPlayCloseBtn = document.body.querySelector(".how-to-play-close");

  howToPlayBtn.addEventListener("click", openHowToPlayDialog);
  howToPlayCloseBtn.addEventListener("click", closeHowToPlayDialog);
}

function openHowToPlayDialog() {
  // open how-to-play dialog
  openDialog("howToPlay");
  // get fake word row in the dialog
  const fakeWordRow = document.querySelector(".fake-game-row");
  const fakeWordCells = fakeWordRow.children;
  // animate the fake row when in viewport
  fakeRowObserver(fakeWordRow, fakeWordCells);
}

function closeHowToPlayDialog() {
  closeDialog("howToPlay");
}

/*
  * Function to observe if the fake word row in settings dialog is in viewport 
*/
function fakeRowObserver(fakeWordRow, fakeWordCells) {
  //* to avoid repeating animations if scrolled more than once
  let observationsLeft = 1;

  // the callback for observer
  function fakeRowCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && observationsLeft > 0) {
        observationsLeft--;
        fakeValidationAnimation(fakeWordCells);
      }
    })
  }
  // observer options
  const intersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  }
  // create a new observer
  const observer = new IntersectionObserver(fakeRowCallback, intersectionOptions);
  // observe the fake row
  observer.observe(fakeWordRow);
}

export {
  handleSettingsButton, handleThemeButton, handleHowToPlayButton,
  initialDarkModeCheck, openHowToPlayDialog
}