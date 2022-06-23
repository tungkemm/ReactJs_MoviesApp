export const getMoviesSelector = (state) => state.movies.movies
export const getShowsSelector = (state) => state.movies.shows
export const getMovieOrShowSelector = (state) => state.movies.selectMovieOrShow

export const filterSearchSelector = (state) => state.filter.search
export const searchHistorySelector = (state) => state.filter.listSearch

export const usernameLoginSelector = (state) => state.login.username