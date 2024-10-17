// karabinerDescription
const karabiner_description_input = [
  { title: 'Programmer Dvorak Qwerty', description: 'Programmer Dvorak Qwerty ShortCut', manipulators: 'manipulators' },
  { title: 'Astarte Qwerty', description: 'Astarte Qwerty ShortCut', manipulators: 'manipulators' },
  { title: 'Eucalyn Qwerty', description: 'Eucalyn Qwerty ShortCut', manipulators: 'manipulators' },
  { title: 'Eucalyn_kai Qwerty', description: 'Eucalyn_kai Qwerty ShortCut', manipulators: 'manipulators' },
  { title: 'Onishi Qwerty', description: 'Onishi Qwerty ShortCut', manipulators: 'manipulators' },
]

const karabiner_description_expected = karabiner_description_input.map((item) => ({
  title: item.title,
  rules: [
    {
      description: item.description,
      manipulators: item.manipulators,
    },
  ],
}))

export const karabiner_description_test_case = karabiner_description_input.map((i, o) => {
  return {
    input: i,
    expected: karabiner_description_expected[o],
  }
})

// toggle
const toggl_input = [
  {
    lan: 'ja',
    fromKey: 'right_command',
    toKey: 'japanese_eisuu',
    opt: ['any'],
  },
  {
    lan: 'en',
    fromKey: 'right_command',
    toKey: 'japanese_kana',
    opt: ['any'],
  },
]

const toggle_expected = toggl_input.map((item) => ({
  type: 'basic',
  conditions: [
    {
      input_sources: [
        {
          language: item.lan,
        },
      ],
      type: 'input_source_if',
    },
  ],
  from: {
    key_code: item.fromKey,
    modifiers: {
      optional: item.opt,
    },
  },
  to: [
    {
      key_code: item.toKey,
    },
  ],
}))

export const toggle_test_cases = toggl_input.map((i, o) => {
  return {
    input: i,
    expected: toggle_expected[o],
  }
})

// generateMandatoryKeymap
const programmer_dvorak = [
  ['semicolon', 'comma', 'period', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
  ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
  ['quote', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
]

const astarte = [
  ['q', 'p', 'u', 'y', 'comma', 'j', 'd', 'h', 'g', 'w'],
  ['i', 'o', 'e', 'a', 'period', 'k', 't', 'n', 's', 'r'],
  ['z', 'x', 'hyphen', 'c', 'slash', 'm', 'l', 'f', 'b', 'v'],
]

const eucalyn = [
  ['q', 'w', 'comma', 'period', 'quote', 'm', 'r', 'd', 'y', 'p'],
  ['a', 'o', 'e', 'i', 'u', 'g', 't', 'k', 's', 'n'],
  ['z', 'x', 'c', 'v', 'f', 'b', 'h', 'j', 'l', 'slash'],
]

const eucalyn_kai = [
  ['semicolon', 'quote', 'quote', 'p', 'q', 'y', 'g', 'd', 'm', 'f'],
  ['a', 'o', 'e', 'i', 'u', 'b', 'n', 't', 'r', 's'],
  ['z', 'x', 'c', 'v', 'w', 'h', 'j', 'k', 'l', 'slash'],
]

const onishi = [
  ['q', 'l', 'u', 'hyphen', 'period', 'f', 'w', 'r', 'y', 'p'],
  ['e', 'i', 'a', 'o', 'comma', 'k', 't', 'n', 's', 'h'],
  ['z', 'x', 'c', 'v', 'slash', 'g', 'd', 'm', 'j', 'b'],
]

export const keymaps = [
  programmer_dvorak,
  astarte,
  eucalyn,
  eucalyn_kai,
  onishi,
]

export const mandatory = [
  ['command'],
  ['command', 'shift'],
  ['control'],
  ['control', 'shift'],
  ['option'],
  ['option', 'shift'],
]

export const qwerty = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'quote'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash'],
]

const testGenerateKeymap = (
  from_layout: string[][],
  to_layout: string[][],
  mandatory_keys: string[][],
) =>
  from_layout.flatMap((r, ri) =>
    r.flatMap((k, ci) =>
      mandatory_keys.map((modifiers) => ({
        type: 'basic',
        from: {
          key_code: k,
          modifiers: {
            mandatory: modifiers,
          },
        },
        to: [
          {
            key_code: to_layout[ri][ci],
            modifiers: modifiers,
          },
        ],
      }))
    )
  )

const test_inputs = keymaps.map((layout) => ({
  layout,
  qwerty,
  mandatory,
}))

export const generate_mandatory_keymap_testcase = test_inputs.map((input) => ({
  input,
  expected: testGenerateKeymap(input.layout, input.qwerty, input.mandatory),
}))
