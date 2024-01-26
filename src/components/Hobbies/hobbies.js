import React from 'react'
import './hobbies.css'
import Anime from '../../assets/anime.png'
import Novel from '../../assets/novel.png'
import Music from '../../assets/music.png'
import Game from '../../assets/game.png'

const Hobbies = () => {
  return (
    <section id='hobbies'>
        <span className='hobbiesTitle'>Hobbies</span>
        <div className='hobbiesBlocks'>
            <div className='hobbyItem'>
                <img src={Anime} alt='Anime' className='hobbyIcon'/>
                <h3>Anime</h3>
            </div>
            <div className='hobbyItem'>
                <img src={Novel} alt='Novel' className='hobbyIcon'/>
                <h3>Novel</h3>
            </div>
            <div className='hobbyItem'>
                <img src={Music} alt='Music' className='hobbyIcon'/>
                <h3>Music</h3>
            </div>
            <div className='hobbyItem'>
                <img src={Game} alt='Game' className='hobbyIcon'/>
                <h3>Game</h3>
            </div>
        </div>
    </section>
  )
}

export default Hobbies