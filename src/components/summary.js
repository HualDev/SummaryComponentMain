import React from 'react'
import '../stylesheets/summary.css'
import Results from './results'
import Reaction from '../images/icon-reaction.svg'
import Memory from '../images/icon-memory.svg'
import Verbal from '../images/icon-verbal.svg'
import Visual from '../images/icon-visual.svg'
import Button from './button'


function Summary(){
    return(
        <div className='summary'>
            <h2 >
            Summary
            </h2>
            <Results
              background = 'reaction'
              color = 'pReaction'
              image = {Reaction} 
              item = 'Reaction'
              first = '80'
              second = '100'
            />

            <Results
              background = 'memory'
              color = 'pMemory'
              image = {Memory} 
              item = 'Memory'
              first = '92'
              second = '100'
            />

            <Results
              background = 'verbal'
              color = 'pVerbal'
              image = {Verbal} 
              item = 'Verbal'
              first = '61'
              second = '100'
            />

            <Results
              background = 'visual'
              color = 'pVisual'
              image = {Visual} 
              item = 'Visual'
              first = '72'
              second = '100'
            />

            <Button />
        </div>
    )
}

export default Summary