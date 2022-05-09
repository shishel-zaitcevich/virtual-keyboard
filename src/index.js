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

makeRows(BUTTONS);

const buttons = getLanguage() === 'eng' ? buttonActions : buttonActionsRus;

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
  const languageToChange = getLanguage() === 'eng' ? 'rus' : 'eng';
  if (languageToChange === 'eng') {
    makeButtonValue(buttonActions, BUTTONS);
  } else {
    makeButtonValue(buttonActionsRus, BUTTONS);
  }

  updateLanguage(languageToChange);

  addClasses(BUTTONS);
  showTextContent();
  upperCase(BUTTONS);
}

runOnKeys(
  () => changeButtonValue(),
  'ControlLeft',
  'AltLeft',
);

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
