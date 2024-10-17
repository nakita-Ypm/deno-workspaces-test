import { describe, expect, it } from 'vitest'
import { Karabiner } from './index.ts'
import { generate_mandatory_keymap_testcase, karabiner_description_test_case, toggle_test_cases } from './data.ts'

describe('Karabiner test', () => {
  // karabinerDescription
  it.concurrent.each(karabiner_description_test_case)('karabinerDescription()', ({ input, expected }) => {
    const { title, description, manipulators } = input
    const result = Karabiner.karabinerDescription(title, description, manipulators)
    expect(result).toEqual(expected)
  })

  // toggle
  it.concurrent.each(toggle_test_cases)(
    'toggle($input.lan, $input.fromKey, $input.toKey, $input.opt) -> $expected',
    ({ input, expected }) => {
      const { lan, fromKey, toKey, opt } = input
      const result = Karabiner.toggle(lan, fromKey, toKey, opt)
      expect(result).toEqual(expected)
    },
  )

  // generateMandatoryKeymap
  it.concurrent.each(generate_mandatory_keymap_testcase)('generateMandatoryKeymap', ({ input, expected }) => {
    const from_layout = input.layout
    const to_layout = input.qwerty
    const mandatory_keys = input.mandatory
    const result = Karabiner.generateMandatoryKeymap(from_layout, to_layout, mandatory_keys)
    expect(result).toEqual(expected)
  })
})
