import { fizzBuzz } from '@deno/fizz-buzz'
import { Karabiner } from '@deno/karabiner'

const fizz_buzz_result = fizzBuzz(15)
console.log(fizz_buzz_result)

const mandatory = [
  ['command'],
  ['command', 'shift'],
  ['control'],
  ['control', 'shift'],
  ['option'],
  ['option', 'shift'],
]

const programmer_dvorak = [
  ['semicolon', 'comma', 'period', 'p', 'y', 'f', 'g', 'c', 'r', 'l'],
  ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
  ['quote', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
]

const qwerty = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'quote'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash'],
]

const keymap = Karabiner.generateMandatoryKeymap(programmer_dvorak, qwerty, mandatory)
const karabiner_result = {
  title: 'Programmer Dvorak Qwerty',
  rules: [
    {
      description: 'Programmer Dvorak Qwerty',
      manipulators: keymap,
    },
  ],
}

console.log(karabiner_result)
