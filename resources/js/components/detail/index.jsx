import React from 'react';
import './index.css';
import img1 from '../../../../public/img/detail1.jpg';

function Detail() {

    return (

        <div >
            <div className="detail-container">
                <div className="detail-text">
                    <div>
                        <h1>Experience</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat esse temporibus modi quis id cumque ex necessitatibus expedita alias libero dolorum quo, atque quibusdam voluptatibus laborum, ullam eveniet unde!</p>
                    </div>
                    <div>
                        <h1>Education</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat esse temporibus modi quis id cumque ex necessitatibus expedita alias libero dolorum quo, atque quibusdam voluptatibus laborum, ullam eveniet unde!</p>
                    </div>
                    <div>
                        <h1>Skills</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat esse temporibus modi quis id cumque ex necessitatibus expedita alias libero dolorum quo, atque quibusdam voluptatibus laborum, ullam eveniet unde!</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore et quas aliquam debitis sequi ex pariatur dignissimos distinctio? Corporis quia magnam ducimus ratione nemo non at similique ullam amet distinctio!
                        </p>
                    </div>
                    <div>
                        <h5>See my Online Portfolio</h5>
                    </div>
                </div>
                <div className="detail-img">
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className="style-container">
                <div className="style-img">
                    <img src={img1} alt="" />
                </div>
                <div className="style-text">
                    <h1>My Style
                        <span className="span-1"></span>
                        <span className="span-2"></span>
                        <span className="span-3"></span>
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis minima aut, beatae odit, iste quia repudiandae pariatur ab optio quam earum, maxime deserunt explicabo consequuntur iure ex ad libero sapiente.</p>
                    <div>
                        <button id="btn">Click Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
