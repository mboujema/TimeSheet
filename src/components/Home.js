import React from 'react'

export default function Home(){

    return(
        <div id="container">
          <div id="watch">
            <div id="ring">
              <div id="top-left-hinge" className="hinge" />
              <div id="top-right-hinge" className="hinge" />
              <div id="face">
                <div id="twelve" className="tickMark" />
                <div id="one" className="smallTickMark" />
                <div id="two" className="smallTickMark" />
                <div id="three" className="tickMark" />
                <div id="four" className="smallTickMark" />
                <div id="five" className="smallTickMark" />
                <div id="six" className="tickMark" />
                <div id="seven" className="smallTickMark" />
                <div id="eight" className="smallTickMark" />
                <div id="nine" className="tickMark" />
                <div id="ten" className="smallTickMark" />
                <div id="eleven" className="smallTickMark" />
                <div id="hourHand" />
                <div id="minuteHand" />
                <div id="secondHand" />
              </div>
              <div id="bottom-left-hinge" className="hinge" />
              <div id="bottom-right-hinge" className="hinge" />
            </div>
            <div id="strap">
              <div id="top-front">
                <div id="top-stitch-1" className="stitch" />
                <div id="top-stitch-2" className="stitch" />
                <div id="top-stitch-3" className="stitch" />
                <div id="top-stitch-4" className="stitch" />
                <div id="top-stitch-5" className="stitch" />
                <div id="top-stitch-6" className="stitch" />
              </div>
              <div id="bottom-front">
                <div id="bottom-stitch-1" className="stitch" />
                <div id="bottom-stitch-2" className="stitch" />
                <div id="bottom-stitch-3" className="stitch" />
                <div id="bottom-stitch-4" className="stitch" />
                <div id="bottom-stitch-5" className="stitch" />
                <div id="bottom-stitch-6" className="stitch" />
              </div>
            </div>
          </div>
        </div>
    )
}