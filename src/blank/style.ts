import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    blank_size_s: TOKENS.space_2,
    blank_size_m: TOKENS.space_3,
    blank_size_l: TOKENS.space_4,
  }
}
