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
  ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonActionsRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\'],
  ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonShiftRus = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'],
  ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
  ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/'],
  ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','],
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

buttonActions.forEach((actionsRow, index) => {
  BUTTONS.childNodes[index].append(getBtnContent(actionsRow));
});

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

// showTextContent();

const CAPS = BUTTONS.childNodes[2].childNodes[0];
const ENTER = BUTTONS.childNodes[2].lastChild;
const TAB = BUTTONS.childNodes[1].firstChild;
const DEL = BUTTONS.childNodes[1].lastChild;
const SPACE = BUTTONS.childNodes[4].childNodes[3];
const ctrlLeft = BUTTONS.childNodes[4].childNodes[0];
const ctrlRight = BUTTONS.childNodes[4].childNodes[5];
const shiftLeft = BUTTONS.childNodes[3].firstChild;
const shiftRight = BUTTONS.childNodes[3].lastChild;
const altLeft = BUTTONS.childNodes[4].childNodes[2];
const altRight = BUTTONS.childNodes[4].childNodes[4];

CAPS.classList.add('caps');
ENTER.classList.add('enter');
SPACE.classList.add('space');
ctrlLeft.classList.add('ctrls');
ctrlRight.classList.add('ctrls');
shiftLeft.classList.add('shift');
altLeft.classList.add('alts');
altRight.classList.add('alts');

const keys = Array.from(document.querySelectorAll('.key'));
CAPS.addEventListener('click', () => {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].classList.toggle('upperCase');
  }
});

showTextContent();

const dictionary = {
  tab: '  ',
  space: ' ',
};

const layout = {
  eng: {
    default: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      "{capslock} a s d f g h j k l ; ' {enter}",
      '{shiftleft} z x c v b n m , . / ↑ {shiftright}',
      '{ctrlleft} {home} {altleft} {space} {altright} ← ↓ → {ctrlright}',
    ],
    shift: [
      '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M < > ? {shift}',
      '.com @ {space}',
    ],
  },
  rus: [[]],
};
// locale: 'eng', 'rus'
function getCurrentLang(locale) {
  return layout[locale];
}

CAPS.addEventListener('click', (event) => {
  const currentBtn = event.target;
  const { buttonType } = currentBtn.dataset;

  TEXTAREA.textContent = dictionary[buttonType];
});

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
