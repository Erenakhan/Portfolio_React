import React from 'react'
import '../App.css'
import bomb from './images/bomb1.png'
import note from './images/note1.png'
import drumkit from './images/drumkit1.png'
import tictactoe from './images/tictactoe.png'
import converter from './images/converter.png'
import movie from './images/movie1.png'
import password from './images/password.png'
import weather from './images/WeatherApi.png'
import portfolio from './images/portfolio.png'



function Projects() {

 
    const project =[
        {
            name: 'Bomb Game',
            info: 'when you solve simle math problem you can defuse bomb (for kids) ',
            img:bomb,
            github:'https://github.com/Erenakhan/BombGame-React',
            live:' ',
        },{
            name: 'NoteApp',
            info: 'I made a basic note app you can change color of post-it',
            img: note,
            github:'https://github.com/Erenakhan/NoteApp-React',
            live:'',
        },{
            name: 'Money Converter',
            info: 'I made a basic money converter [Exchangerates] ',
            img: converter,
            github:'https://github.com/Erenakhan/Money_Converter',
            live:'',
        },{
            name: 'Drum kit',
            info: 'I made js30 drum kit with React js',
            img: drumkit,
            github:'https://github.com/Erenakhan/React-Drum-Kit',
            live:'https://react-drum-7ye3n2dn9-erenakhan.vercel.app/',
        },{
            name: 'Password Generator',
            info: 'I made a password generator with adjustable length',
            img: password,
            github:'https://github.com/Erenakhan/Password-Generator-React',
            live:'https://passwordgeneratorrrr.netlify.app/',
        },{
            name: 'Movie App',
            info: 'I made a movie app [Api from movieDb]',
            img: movie,
            github:'https://github.com/Erenakhan/MovieApp_React',
            live:'',
        },{
            name: 'TictacToe Game',
            info: 'I made a tictactoe game with React js',
            img: tictactoe,
            github:'https://github.com/Erenakhan/TicTacToe_Game_React',
            live:'',
        },{
            name: 'Weather App',
            info: 'I made Weather app with React js [Weatherapp Api]',
            img: weather,
            github:'https://github.com/Erenakhan/WeatherApp-React',
            live:'',
        },{
            name: 'Portfolio',
            info: 'I made a portfolio site with React js',
            img: portfolio,
            github:'https://github.com/Erenakhan/Portfolio_React',
            live:'',
        }
    ]
  return (
    <div>
        <h1 className='projects-h'><h2>Projects</h2></h1>
        <br /><br />
        <div className='projects-main'>

            {
                project.map((e) =>
                <div className="card">
                    <div className="card-img">
                        <img src={e.img} alt='img' />
                        </div>  
                   <div  className='card-name'>
                     <h2>{e.name}</h2>
                   </div>
                   <br />
                   <div className="card-info"><h7 className='card-info'>{e.info}</h7></div>
                   <div className="link-cont">
                   <br /><a className='link' href={e.github}>See Code</a>
                    <br />{e.live ? <a className='link' href={e.live}>See Live</a> : ''}
                   </div>
                    </div>  
                    
            ) 
            }
            
        </div>
    </div>
  )
}
export default Projects
