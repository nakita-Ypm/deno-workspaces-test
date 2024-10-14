// enJpToggle
export const expected_en_jp_toggle = {
  title: 'Change the right command key to toggle between alphanumeric and kana',
  rules: [
    {
      description: 'Kana Eisuu Toggle right_command',
      manipulators: [
        {
          type: 'basic',
          conditions: [
            {
              input_sources: [
                {
                  language: 'ja',
                },
              ],
              type: 'input_source_if',
            },
          ],
          from: {
            key_code: 'right_command',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'japanese_eisuu',
            },
          ],
        },
        {
          type: 'basic',
          conditions: [
            {
              input_sources: [
                {
                  language: 'en',
                },
              ],
              type: 'input_source_if',
            },
          ],
          from: {
            key_code: 'right_command',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'japanese_kana',
            },
          ],
        },
      ],
    },
  ],
}

// mandatoryKeymap
export const expected_mandatory_keymap = {
  title: 'Programmer Dvorak Qwerty',
  rules: [
    {
      description: 'Programmer Dvorak Qwerty',
      manipulators: [
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'semicolon',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'q',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'comma',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'w',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'period',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'p',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'r',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'y',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 't',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'y',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'g',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'u',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'i',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'r',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'o',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'p',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'o',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 's',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'd',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'f',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'g',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'd',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'h',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'j',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'k',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'n',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'l',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 's',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'quote',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'quote',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'z',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'x',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'c',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'v',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'b',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'n',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'm',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'comma',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'v',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'period',
              modifiers: ['option', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['command'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['command'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['command', 'shift'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['command', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['control'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['control', 'shift'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['control', 'shift'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['option'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'z',
            modifiers: {
              mandatory: ['option', 'shift'],
            },
          },
          to: [
            {
              key_code: 'slash',
              modifiers: ['option', 'shift'],
            },
          ],
        },
      ],
    },
  ],
}
