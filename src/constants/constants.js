const functionalButtons = ['Back ⮨', 'Tab', 'DEL', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];

const buttonFuncData = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', 'Backspace'],
  ['Tab', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Delete'],
  ['CapsLock', '', '', '', '', '', '', '', '', '', '', '', 'Enter'],
  ['ShiftLeft', '', '', '', '', '', '', '', '', '', '', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const buttonActions = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
];

const buttonShiftEng = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Back ⮨'],
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

export {
  buttonShiftRus, buttonActionsRus, buttonShiftEng, buttonActions, functionalButtons,
  buttonFuncData,
};
