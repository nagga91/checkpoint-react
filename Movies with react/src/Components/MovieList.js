import React from 'react'
import MovieCard from './MovieCard'

function MovieList(props) {
    const getdata=()=>{
        var x= JSON.parse(localStorage.getItem('title1'))
        if(x!==null){
            props.data.push(x)   
        }
        
    }
    //  setTimeout(() => {
    //     getdata()
    // }, 1000);
    getdata()
  return (

    <div>
           
      {props.data.map((element,index)=>{
        return (
            <div key={index}>
                <MovieCard movie={element}/>
            </div>
        )
      })}
      
    </div>
  )
}
export default MovieList;

