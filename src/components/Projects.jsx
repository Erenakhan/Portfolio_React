import React from 'react'
import '../App.css'

function Projects() {
    const project =[
        {
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        },{
            name: 'bomb game',
            info: 'lorem2',
            img: ' ',
            github:'',
            live:'',
        }
    ]
  return (
    <div>
        <h1 className='projects-h'>Projects</h1>
        <div className='projects-main'>
            
            
            {
                project.map((e) =>
                
                <div className="card">
                    <img className='card-img' src={e.info} />
                    <br /><h4 className='card-name'>{e.name}</h4>
                    <br /><h7 className='card-info'>{e.info}</h7>
                   <div className="link-cont">
                   <br /><a className='link' href={e.github}>see code</a>
                    <br /><a className='link' href={e.live}>see live</a>
                   </div>
                    </div>  
                    
            ) 
            }
            
        </div>
    </div>
  )
}
export default Projects