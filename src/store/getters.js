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
