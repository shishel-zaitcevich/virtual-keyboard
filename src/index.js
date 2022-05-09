import './assets/style.css';
import {
  buttonShiftRus, buttonActionsRus, buttonShiftEng, buttonActions, functionalButtons,
} from './constants/constants';
import {
  makeRows, makeButtonValue, runOnKeys, addClasses, upperCase, updateLanguage, getLanguage,
} from './services/keyboard-service';

const BODY = document.querySelector('body');
const DIV = document.createElement('div');
DIV.className = 'keyboard';
BODY.append(DIV);

const TEXT = document.createElement('p');
TEXT.className = 'text';
BODY.append(TEXT);
TEXT.innerHTML = 'This keyboard made in Windows \n Change language left ctrl + left alt';

const TEXTAREA = document.createElement('textarea');
TEXTAREA.className = 'textarea';
DIV.append(TEXTAREA);
TEXTAREA.setAttribute('autofocus', 'autofocus');

const BUTTONS = document.createElement('div');
BUTTONS.className = 'buttons';
DIV.append(BUTTONS);

// const language = getLanguage();

makeRows(BUTTONS);

// function isLangChanged() {
//   if (isLang === false) {
//     isLang = true;
//   } else {
//     isLang = false;
//   }
//   console.log(isLang);
//   // isLang === false ? true : false;
// }

const buttons = getLanguage() === 'eng' ? buttonActions : buttonActionsRus;
console.log('buttons', buttons);

makeButtonValue(buttons, BUTTONS);

function showTextContent() {
  document.querySelectorAll('.key').forEach((element) => {
    element.addEventListener('click', () => {
      for (let i = 0; i < functionalButtons.length; i += 1) {
        if (element.textContent === functionalButtons[i]) {
          return;
        }
      }
      const isUpperCase = BUTTONS.childNodes[2].childNodes[0].classList.contains('upperCase');
      const char = element.textContent;
      let displayText = TEXTAREA.textContent;
      displayText += isUpperCase ? char.toUpperCase() : char;
      TEXTAREA.textContent = displayText;
    });
  });
}

function changeButtonValue() {
  // isLangChanged();
  const languageToChange = getLanguage() === 'eng' ? 'rus' : 'eng';
  if (languageToChange === 'eng') {
    makeButtonValue(buttonActions, BUTTONS);
  } else {
    makeButtonValue(buttonActionsRus, BUTTONS);
  }

  updateLanguage(languageToChange);

  // if (isLang === false) {
  //   makeButtonValue(buttonActions, BUTTONS);
  // } else {
  //   makeButtonValue(buttonActionsRus, BUTTONS);
  // }
  addClasses(BUTTONS);
  showTextContent();
  upperCase(BUTTONS);
}

runOnKeys(
  () => changeButtonValue(),
  'ControlLeft',
  'AltLeft',
);

// function setLocalStorage() {
//   console.log(isLangChanged());
//   localStorage.setItem('isLang', isLang);
// }
// window.addEventListener('beforeunload', setLocalStorage);
// console.log(setLocalStorage('set', isLang));

// function getLocalStorage() {
//   if (localStorage.getItem('isLang')) {
//     isLang = localStorage.getItem('isLang');
//     return changeButtonValue();
//   }
//   return false;
// }
// window.addEventListener('load', getLocalStorage);
// console.log(getLocalStorage('get', isLang));

showTextContent();
addClasses(BUTTONS);
upperCase(BUTTONS);

function changeShiftValue() {
  if (getLanguage() === 'eng') {
    makeButtonValue(buttonShiftEng, BUTTONS);
  } else {
    makeButtonValue(buttonShiftRus, BUTTONS);
  }
  addClasses(BUTTONS);
  showTextContent();
}

runOnKeys(
  () => changeShiftValue(),
  'ShiftLeft',
);

function handleKeyboardPress(event) {
  const btnsElements = [...document.querySelectorAll('.key')];
  const findBtn = (el) => {
    let valueToCompare = el.innerText;
    let btnKey = event.key;
    if (el.dataset.key !== undefined) {
      btnKey = event.code;
      valueToCompare = el.dataset.key;
    }
    return valueToCompare === btnKey;
  };
  const btn = btnsElements.find(findBtn);

  // console.log('innerText', btn.innerText);
  if (btn && event.type === 'keydown') {
    btn.click();
    btn.classList.add('active');
  }
  if (btn && event.type === 'keyup') {
    btn.classList.remove('active');
  }
  event.preventDefault();
}

document.addEventListener('keydown', handleKeyboardPress);
document.addEventListener('keyup', handleKeyboardPress);

//

// const CAPS = BUTTONS.childNodes[2].childNodes[0];
// const ENTER = BUTTONS.childNodes[2].lastChild;
// const TAB = BUTTONS.childNodes[1].firstChild;
// const DEL = BUTTONS.childNodes[1].lastChild;
// const SPACE = BUTTONS.childNodes[4].childNodes[3];
// const ctrlLeft = BUTTONS.childNodes[4].childNodes[0];
// const ctrlRight = BUTTONS.childNodes[4].childNodes[5];
// const shiftLeft = BUTTONS.childNodes[3].firstChild;
// const shiftRight = BUTTONS.childNodes[3].lastChild;
// const altLeft = BUTTONS.childNodes[4].childNodes[2];
// const altRight = BUTTONS.childNodes[4].childNodes[4];
// const dictionary = {
//   tab: '  ',
//   space: ' ',
// };

// const layout = {
//   eng: {
//     default: [
//       '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
//       '{tab} q w e r t y u i o p [ ] \\',
//       "{capslock} a s d f g h j k l ; ' {enter}",
//       '{shiftleft} z x c v b n m , . / ↑ {shiftright}',
//       '{ctrlleft} {home} {altleft} {space} {altright} ← ↓ → {ctrlright}',
//     ],
//     shift: [
//       '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
//       '{tab} Q W E R T Y U I O P { } |',
//       '{lock} A S D F G H J K L : " {enter}',
//       '{shift} Z X C V B N M < > ? {shift}',
//       '.com @ {space}',
//     ],
//   },
//   rus: [[]],
// };
// // locale: 'eng', 'rus'
// function getCurrentLang(locale) {
//   return layout[locale];
// }

// CAPS.addEventListener('click', (event) => {
//   const currentBtn = event.target;
//   const { buttonType } = currentBtn.dataset;

//   TEXTAREA.textContent = dictionary[buttonType];
// });

/// //
// {
//   default: [
//     '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
//     '{tab} q w e r t y u i o p [ ] \\',
//     "{capslock} a s d f g h j k l ; ' {enter}",
//     '{shiftleft} z x c v b n m , . / ↑ {shiftright}',
//     '{ctrlleft} {home} {altleft} {space} {altright} ← ↓ → {ctrlright}',
//   ],
//   shift: [
//     '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
//     '{tab} Q W E R T Y U I O P { } |',
//     '{lock} A S D F G H J K L : " {enter}',
//     '{shift} Z X C V B N M < > ? {shift}',
//     '.com @ {space}',
//   ],
// }

// const SPECIAL_BUTTONS = {
//   '{tab}': {
//     displayName: '&#11134;',
//     className: 'tab',
//     value: '&emsp;',
//   },
// }

// static getButtonType(button) {
//   return button.includes('{') && button.includes('}') && button !== '{//}'
//     ? BUTTON_TYPE_ENUM.FUNCTIONAL : BUTTON_TYPE_ENUM.GENERAL;
// }
