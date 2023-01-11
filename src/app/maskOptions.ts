export interface Patterns {
  [character: string]: {
    /** Регулярное выражение */
    pattern: RegExp;
    optional?: boolean;
    symbol?: string;
  };
}

/** Настройки маски редактора */
export interface MaskOptions {
  /** Маска ввода */
  mask: string;

  /** Добавить префикс к маскированному значению */
  prefix?: string;

  /** Добавить суффикс к маскированному значению */
  suffix?: string;

  /** Специальные символы */
  specialCharacters?: string[];

  /** Будет ли маска пропускать специальный символ в модели или нет, значение по умолчанию - true */
  dropSpecialCharacters?: boolean;

  /** Будет ли отображаться маска при наборе текста или нет, значение по умолчанию - false */
  showMaskTyped?: boolean;

  /** Если параметр showMaskTyped - true, этот параметр настраивает символ, используемый в качестве заполнителя. Значение по умолчанию - "_". */
  placeHolderCharacter?: string;

  /** Очистить ввод, если вводимое значение не соответствует маске, значение по умолчанию - false. */
  clearIfNotMatch?: boolean;

  /** Определить собственный паттерн для символа */
  patterns?: Patterns;
}

/** Спец. символы по умолчанию в ngx-mask */
export const defaultSpecialCharacters = [
  '-',
  '/',
  '\\',
  '(',
  ')',
  '.',
  ':',
  ' ',
  '+',
  ',',
  '@',
  '[',
  ']',
  '"',
  "'"
];

/** Выражения для RegExp */
enum expressions {
  number = '0-9',
  alphabet = 'a-zA-zа-яА-Я',
  space = ' ',
  symbols = '~!@#$%^&*()_+{}|":<>?'
}

/** Паттерны по-умолчанию для символов */
export const defaultPatterns: Patterns = {
  '#': {
    pattern: new RegExp(`[${expressions.number}${expressions.space}+-]`)
  },
  '0': {
    pattern: new RegExp(`[${expressions.number}]`)
  },
  '9': {
    pattern: new RegExp(`[${expressions.number}${expressions.space}]`)
  },
  L: {
    pattern: new RegExp(`[${expressions.alphabet}]`)
  },
  q: {
    pattern: new RegExp(`[${expressions.alphabet}${expressions.number}]`)
  },
  A: {
    pattern: new RegExp(`[${expressions.alphabet}${expressions.number}]`)
  },
  a: {
    pattern: new RegExp(
      `[${expressions.alphabet}${expressions.number}${expressions.space}]`
    )
  },
  s: {
    pattern: new RegExp(
      `[${expressions.alphabet}${expressions.number}${expressions.space}${
        expressions.symbols
      }]`
    )
  },
  C: {
    pattern: new RegExp(
      `[${expressions.alphabet}${expressions.number}${expressions.space}${
        expressions.symbols
      }]`
    )
  }
};

/**  Маска телефона для редактора */
export const maskOption: MaskOptions = createMaskOptions({
  mask: 'LqqqqLq000L0',
  showMaskTyped: true
});

export function createMaskOptions(maskOptions: MaskOptions): MaskOptions {
  const {
    mask,
    prefix,
    suffix,
    specialCharacters,
    dropSpecialCharacters,
    showMaskTyped,
    clearIfNotMatch,
    placeHolderCharacter,
    patterns
  } = maskOptions;
  return {
    mask: mask || 'A{5}',
    prefix: prefix || '',
    suffix: suffix || '',
    specialCharacters: specialCharacters || defaultSpecialCharacters,
    dropSpecialCharacters: !!dropSpecialCharacters,
    showMaskTyped: !!showMaskTyped,
    clearIfNotMatch: !!clearIfNotMatch,
    placeHolderCharacter: placeHolderCharacter || '_',
    patterns: patterns || defaultPatterns
  };
}
