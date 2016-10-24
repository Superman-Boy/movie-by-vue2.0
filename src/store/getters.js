export const inTheaters = state => {
  if (state.inTheaters.subjects) {
    return state.inTheaters.subjects.map((item) => {
      let actor = ''
      let director = ''
      item.casts.forEach((value, index) => {
        if (index < item.casts.length - 1) {
          actor += value.name + '/'
        } else {
          actor += value.name
        }
      })

      item.directors.forEach((value, index) => {
        if (index < item.directors.length - 1) {
          director += value.name + '/'
        } else {
          director += value.name
        }
      })

      item.actor = actor
      item.director = director
      return item
    })
  }
}

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

export const showLoading = state => state.showLoading
