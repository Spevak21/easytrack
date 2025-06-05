export const colors = {
  blue1: '#001332',
  blue2: '#001C49',
  blue3: '#0040A7',
  blue4: '#0051D2',
  blue5: '#0060FB',
  highlightBlue: '#0062ff',

  white: '#FFFFFF',

  valid: '#4EFF80',
  validDark: '#34AF57',

  invalid: '#FF4E4E',
  invalidDark: '#A83131',

  warning: '#FFE44E',
  warningDark: '#B19F36',
};

export const opacity = {
  0: '00',
  3: '07',
  5: '0D',
  10: '1A',
  15: '26',
  20: '33',
  25: '40',
  30: '4D',
  35: '59',
  40: '66',
  45: '73',
  50: '80',
  55: '8C',
  60: '99',
  65: 'A6',
  70: 'B3',
  75: 'BF',
  80: 'CC',
  85: 'D9',
  90: 'E6',
  95: 'F2',
  100: 'FF'
}

export const shadows = {
  shadowSmall: '0 2px 2px rgba(0, 0, 0, .15)',
  cardShadowSharp: '0 4px 6px rgba(0, 0, 0, .1)',
  cardShadowSoft: '0 0 20px rgba(0, 0, 0, .05)',

  innerShadowImprinted: '0 0 24px rgb(0, 28, 73) inset',
  
  outerGlowHover: `0 0 12px ${colors.blue5 + opacity[60]}`,
  outerGlowHoverValid: `0 0 12px ${colors.valid + opacity[60]}`,
  outerGlowHoverInvalid: `0 0 12px ${colors.invalid + opacity[60]}`,
  outerGlowHoverWarning: `0 0 12px ${colors.warning + opacity[60]}`,

  outerGlowActive: `0 0 24px ${colors.blue5 + opacity[60]}`,
  outerGlowActiveValid: `0 0 24px ${colors.valid + opacity[60]}`,
  outerGlowActiveInvalid: `0 0 24px ${colors.invalid + opacity[60]}`,
  outerGlowActiveWarning: `0 0 24px ${colors.warning + opacity[60]}`,

  fullGlowHover:`0 0 12px ${colors.blue5 + opacity[30]} inset, 0 0 12px ${colors.blue5 + opacity[30]}`,
  fullGlowHoverValid:`0 0 12px ${colors.valid + opacity[30]} inset, 0 0 12px ${colors.valid + opacity[30]}`,
  fullGlowHoverInvalid:`0 0 12px ${colors.invalid + opacity[30]} inset, 0 0 12px ${colors.invalid + opacity[30]}`,
  fullGlowHoverWarning:`0 0 12px ${colors.warning + opacity[30]} inset, 0 0 12px ${colors.warning + opacity[30]}`,

  fullGlowActive:`0 0 12px ${colors.blue5 + opacity[60]} inset, 0 0 24px ${colors.blue5 + opacity[60]}`,
  fullGlowActiveValid:`0 0 12px ${colors.valid + opacity[60]} inset, 0 0 24px ${colors.valid + opacity[60]}`,
  fullGlowActiveInvalid:`0 0 12px ${colors.invalid + opacity[60]} inset, 0 0 24px ${colors.invalid + opacity[60]}`,
  fullGlowActiveWarning:`0 0 12px ${colors.warning + opacity[60]} inset, 0 0 24px ${colors.warning + opacity[60]}`,
};
