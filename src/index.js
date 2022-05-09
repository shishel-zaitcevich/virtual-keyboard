import './assets/style.css';

const BODY = document.querySelector('body');
const DIV = document.createElement('div');
DIV.className = 'keyboard';
BODY.append(DIV);

const TEXTAREA = document.createElement('textarea');
TEXTAREA.className = 'textarea';
DIV.append(TEXTAREA);
TEXTAREA.setAttribute('autofocus', 'autofocus');

const BUTTONS = document.createElement('div');
BUTTONS.className = 'buttons';
DIV.append(BUTTONS);

let isLang = false;

function makeRows() {
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    BUTTONS.append(row);
  }
  return BUTTONS;
}

makeRows();

const functionalButtons = ['Back ⮨', 'Tab', 'DEL', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];

const buttonActions = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonShiftEng = [
  ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Back ⮨'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonActionsRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL'],
  ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonShiftRus = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Back ⮨'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'DEL'],
  ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

function getBtnContent(array) {
  const fragment = new DocumentFragment();
  for (let i = 0; i < array.length; i += 1) {
    const key = document.createElement('div');
    key.append(array[i]);
    key.className = 'key';
    fragment.append(key);
  }
  return fragment;
}

function makeButtonValue(array) {
  [...BUTTONS.children].forEach((row) => row.innerHTML = '');
  array.forEach((actionsRow, index) => {
    BUTTONS.childNodes[index].append(getBtnContent(actionsRow));
  });
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (const code of codes) { // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        console.log(pressed);
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

function isLangChanged() {
  if (isLang === false) {
    isLang = true;
  } else {
    isLang = false;
  }
  // isLang === false ? true : false;
  console.log(isLang);
}

makeButtonValue(buttonActions);

function addClasses() {
  BUTTONS.childNodes[2].childNodes[0].classList.add('caps');
  BUTTONS.childNodes[2].lastChild.classList.add('enter');
  BUTTONS.childNodes[4].childNodes[3].classList.add('space');
  BUTTONS.childNodes[4].childNodes[0].classList.add('ctrls');
  BUTTONS.childNodes[4].childNodes[5].classList.add('ctrls');
  BUTTONS.childNodes[3].firstChild.classList.add('shift');
  BUTTONS.childNodes[4].childNodes[2].classList.add('alts');
  BUTTONS.childNodes[4].childNodes[4].classList.add('alts');
}

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

function upperCase() {
  const keys = Array.from(document.querySelectorAll('.key'));
  BUTTONS.childNodes[2].childNodes[0].addEventListener('click', () => {
    for (let i = 0; i < keys.length; i += 1) {
      keys[i].classList.toggle('upperCase');
    }
  });
}

function changeButtonValue() {
  isLangChanged();
  if (isLang === false) {
    makeButtonValue(buttonActions);
  } else {
    makeButtonValue(buttonActionsRus);
  }
  addClasses();
  showTextContent();
  upperCase();
}

runOnKeys(
  () => changeButtonValue(),
  // showTextContent(),

  'ControlLeft',
  'AltLeft',
);
showTextContent();
addClasses();
upperCase();

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
