import React from 'react'
import EventList from './EventList'
import waveUp from '../../SVGs/wave-8.svg'
import waveDown from '../../SVGs/wave-5.svg'

function Events() {
    return (
        <div className="events-grandParent">
            <img className="waveUp" src={waveUp}/>
            <div class = "space">EVENTS</div>
           
            <EventList sampleEvents={sampleEvents}/>
            <img className="waveUp" src={waveDown}/>
        </div>
    )
}

const sampleEvents =[
    {
        id: 1,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      },
    {
    id: 2,
    image : "https://roboticsnitp.co.in/assets/d3.png",
    description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
    heading : "Digital Detective",
    rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
    },
    {
        id: 3,
        image : "https://roboticsnitp.co.in/assets/d3.png",
        description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
        heading : "Digital Detective",
        rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
      }
  
  ] 
export default Events
