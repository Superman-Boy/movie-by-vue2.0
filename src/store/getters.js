export const inTheaters = state => state.inTheaters.subjects

export const detail = state => {
  if (state.detail) {
    let actor = ''
    let director = ''
    let casts = state.detail.casts
    let directors = state.detail.directors
    if (casts && directors) {
      casts.forEach((value, index) => {
        if (index < state.detail.casts.length - 1) {
          actor += value.name + '/'
        } else {
          actor += value.name
        }
      })

      directors.forEach((value, index) => {
        if (index < state.detail.directors.length - 1) {
          director += value.name + '/'
        } else {
          director += value.name
        }
      })
    }

    state.detail.actor = actor
    state.detail.director = director
    return state.detail
  }
}

export const comming = state => state.comming
export const weekly = state => state.weekly
export const top = state => state.top
export const showLoading = state => state.showLoading
