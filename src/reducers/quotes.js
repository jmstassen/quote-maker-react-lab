export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      const indexNum = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[indexNum]
      return [...state.slice(0, indexNum), {...quote, votes: quote.votes += 1}, ...state.slice(indexNum + 1)]

    case "DOWNVOTE_QUOTE":
      const index = state.findIndex(quote => quote.id === action.quoteId)
      const current = state[index]

      if (current.votes > 0) {
        return [...state.slice(0, index), {...current, votes: current.votes -= 1}, ...state.slice(index + 1)]
      }

      return state

    default:
    return state;
  }
}
