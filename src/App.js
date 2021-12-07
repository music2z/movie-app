// import logo from './logo.svg';
// import SideNav from './components/SideNav';
import './App.css';
import PropTypes from "prop-types"
import React from 'react';
import axios from "axios";
import Movie from "./components/Movie";

const Food = ({name, picture, rating}) => {
  console.log(name)
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
      <h4>{rating}</h4>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number
}

const foodLike = [{
  id : 1,
  name : "pizza",
  image : "",
  rating : 11
},{
  id : 2,
  name : "subak",
  image : "",
  rating : 22
},{
  id : 3,
  name : "coffe",
  image : "",
  rating : 33
}]

function renderFood(dish) {
  // console.log(dish)
  return (
    <Food key={dish.id} name={dish.name} rating={dish.rating} />
  )
}

// function App() {
//   return (
//     <div className="App">
//         {foodLike.map(cur => (
//           <Food key={cur.id} name={cur.name} picture={cur.image} rating={cur.rating} />
//         ))}
//         {/* {console.log(foodLike.map(renderFood))}
//         {foodLike.map(renderFood)} */}
//     </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("init")
  }
  state = {
    isLoading: true,
    movies: []
  }
  add = () => {
    console.log('add')
    this.setState(current => ({count: current.count + 1}))
  }
  minus = () => {
    console.log('minus')
    this.setState(current => ({count: current.count - 1}))
  }
  getMovies = async () => {
    console.log("getMovies...")
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies: movies, isLoading: false})
    console.log(movies)
  }
  componentDidMount() {
    console.log("redered...")
    this.getMovies();
  }
  componentDidUpdate(){
    console.log("updated")
  }
  componentWillUnmount(){
    console.log("unmount")
  }
  render() {
    console.log("rendering")
    const { isLoading, movies } = this.state;
    return (
      <section>
        {isLoading
         ? "Loading..." 
         : movies.map(movie => {
             return (
              <Movie 
                key={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
             )
          })
        }
      </section>
    )
  }
}

export default App;
