
const defaultState = false;

const power = (state = defaultState, action) => {
  if (action.type === 'IS_POWER') {
    return action.power
  }
  return state
}

const Article = (state = '', action) => {
    if (action.type === 'IS_ARTICLE') {
      return action.article
    }
    return state
  }


export { power, Article }