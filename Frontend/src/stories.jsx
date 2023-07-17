import {create} from 'zustand';

const useMovieStore = create(set => ({
    selectedMovie: '',
    movieName: '',
    setReset: () => set(state =>({selectedMovie: '' })),
    setMovieName: (movieName) => set(state => ({movieName: movieName })),
    setSelectedMovie: (selectedMovie) => set(state =>({selectedMovie: selectedMovie }))
}));

export default useMovieStore;