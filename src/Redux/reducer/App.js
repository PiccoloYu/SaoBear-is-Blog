
const defaultState = false;

const power = (state = defaultState, action) => {
  if (action.type === 'IS_POWER') {
    return action.power
  }
  return state
}


export { power }