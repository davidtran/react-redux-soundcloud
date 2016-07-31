export const SELECT_TAB = 'SELECT_TAB'

export function changeTab(tab) {
  return {
    type: SELECT_TAB,
    tab
  }
}