import { describe, expect, it } from 'vitest'
import { Karabiner } from './index.ts'

const input = [
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

const expected = input.map((item) => ({
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

const testCases = input.map((i, o) => {
  return {
    input: i,
    expected: expected[o],
  }
})

describe('Karabiner test', () => {
  it.concurrent.each(testCases)(
    'toggle($input.lan, $input.fromKey, $input.toKey, $input.opt) -> $expected',
    ({ input, expected }) => {
      const { lan, fromKey, toKey, opt } = input
      const result = Karabiner.toggle(lan, fromKey, toKey, opt)
      expect(result).toEqual(expected)
    },
  )
})
