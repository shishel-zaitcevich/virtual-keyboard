import {
  buttonFuncData,
} from '../constants/constants';

function updateLanguage(lang) {
  localStorage.setItem('language', lang);
}

function getLanguage() {
  return localStorage.getItem('language') || 'eng';
}

function makeRows(buttons) {
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    buttons.append(row);
  }
  return buttons;
}

function getBtnContent(array, index) {
  const fragment = new DocumentFragment();

  for (let i = 0; i < array.length; i += 1) {
    const key = document.createElement('div');
    if (buttonFuncData[index][i] !== '') {
      key.setAttribute('data-key', buttonFuncData[index][i]);
    }
    key.append(array[i]);
    key.className = 'key';
    fragment.append(key);
  }
  return fragment;
}

function makeButtonValue(array, buttons) {
  [...buttons.children].forEach((row) => {
    const r = row;
    r.innerHTML = '';
    return r;
  });

  array.forEach((actionsRow, index) => {
    buttons.childNodes[index].append(getBtnContent(actionsRow, index));
  });

  //   /// 2

//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < array[i].length; j += 1) {
//       buttons.childNodes[index].innerHTML = array[i][j];
//       if (buttonActions1[i][j] !== '') {
//         button_i.setAttribute('data-key', buttonActions1[i][j]);
//       }
//     }
//   }
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
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

function addClasses(buttons) {
  buttons.childNodes[2].childNodes[0].classList.add('caps');
  buttons.childNodes[2].lastChild.classList.add('enter');
  buttons.childNodes[4].childNodes[3].classList.add('space');
  buttons.childNodes[4].childNodes[0].classList.add('ctrls');
  buttons.childNodes[4].childNodes[5].classList.add('ctrls');
  buttons.childNodes[3].firstChild.classList.add('shift');
  buttons.childNodes[4].childNodes[2].classList.add('alts');
  buttons.childNodes[4].childNodes[4].classList.add('alts');
}

// function showTextContent(array, buttons, textarea) {
//   document.querySelectorAll('.key').forEach((element) => {
//     element.addEventListener('click', () => {
//       for (let i = 0; i < array.length; i += 1) {
//         if (element.textContent === array[i]) {
//           return;
//         }
//       }
//       const isUpperCase = buttons.childNodes[2].childNodes[0].classList.contains('upperCase');
//       const char = element.textContent;
//       let displayText = textarea.textContent;
//       displayText += isUpperCase ? char.toUpperCase() : char;
//       textarea.textContent = displayText;
//     });
//   });
// }

function upperCase(buttons) {
  const keys = Array.from(document.querySelectorAll('.key'));
  buttons.childNodes[2].childNodes[0].addEventListener('click', () => {
    for (let i = 0; i < keys.length; i += 1) {
      keys[i].classList.toggle('upperCase');
    }
  });
} // не работает

export {
  makeRows, makeButtonValue, runOnKeys, addClasses, upperCase, updateLanguage, getLanguage,
};
