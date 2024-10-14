export class Karabiner {
  static karabinerDescription(title: string, description: string, result: string[]) {
    return {
      title: title,
      rules: [
        {
          description: description,
          manipulators: result,
        },
      ],
    }
  }

  static mandatoryKeymap(fromKey: string, toKey: string, mandatory: string[]) {
    return {
      type: 'basic',
      from: {
        key_code: fromKey,
        modifiers: {
          mandatory: mandatory,
        },
      },
      to: [
        {
          key_code: toKey,
          modifiers: mandatory,
        },
      ],
    }
  }

  static jpMode(fromKey: string, toKey: string) {
    return {
      type: 'basic',
      from: {
        key_code: fromKey,
      },
      to: [
        {
          key_code: toKey,
        },
      ],
      conditions: [
        {
          type: 'input_source_if',
          input_sources: [
            {
              language: 'ja',
            },
          ],
        },
      ],
    }
  }

  static toggle(lan: string, fromKey: string, toKey: string, opt: string[]) {
    return {
      type: 'basic',
      conditions: [
        {
          input_sources: [
            {
              language: lan,
            },
          ],
          type: 'input_source_if',
        },
      ],
      from: {
        key_code: fromKey,
        modifiers: {
          optional: opt,
        },
      },
      to: [
        {
          key_code: toKey,
        },
      ],
    }
  }

  static generateMandatoryKeymap(from_layout: string[][], to_layout: string[][], mandatory_keys: string[][]): object[] {
    const res: object[] = []
    for (let i = 0; i < from_layout.length; i++) {
      const row_from = from_layout[i]
      const row_to = to_layout[i]
      for (let j = 0; j < row_from.length; j++) {
        const col_from = row_from[j]
        const col_to = row_to[j]
        for (const mandatory of mandatory_keys) {
          res.push(this.mandatoryKeymap(col_from, col_to, mandatory))
        }
      }
    }
    return res
  }
}
