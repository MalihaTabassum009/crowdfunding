/* import cardPic from './src/Components/Assets/CardPicSample.png' */


import React, { useState } from "react";
import "./Cards.css";
import { FaClock, FaRegBookmark } from 'react-icons/fa'; // Importing clock icon from react-icons

export const Cards = ({
    imgSrc,
    imgAlt,
    cardTitle,
    companyName,
    companyLink,  // new prop for the link
    daysLeft,
    fundStat,
    description,
    logoSrc, // new prop for the logo before card title

    button1Text,  // props for button text and URLs
    button1Link,
    button2Text,
    button2Link,

    onBookmarkClick  // for the favourite bookmark
}) => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleBookmarkClick = () => {
    // Placeholder for adding the card as a favorite
    console.log("Card added to favorites");
  };
    
    return (
        <div className='card'>
            {imgSrc && imgAlt && (<img className="card-img" src={imgSrc} alt={imgAlt}></img>)}

            {/* Logo & title & Bookmark */}
            <div className="title-container">
                {logoSrc && <img className="logo" src={logoSrc} alt="Logo" />}
                {cardTitle && <h2 className="card-title">{cardTitle}</h2>}
 
                {/* custom bookmark */}
                <div 
                    className="bookmark-container"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={handleBookmarkClick}
                >
                    <FaRegBookmark className="bookmark-icon" />
                    {showTooltip && <div className="custom-tooltip">Save this Project</div>}

                </div>
            </div> 


            {companyName && companyLink && (  //{companyName && <h5 className="brand-name">{companyName}</h5>}
                <h5 className="brand-name">
                    <a href={companyLink} className="brand-link">{companyName}</a>
                </h5>
            )} 

            {(daysLeft || fundStat) && (   //to keep elements or components side by side
                <div className="status">
                    {daysLeft && (
                        <span className="days-left">
                            <FaClock className="clock-icon" /> {daysLeft} days left
                        </span>
                    )}
                    {fundStat && (
                        <span className="fund-stat">
                            •  {fundStat}% funded
                        </span>
                    )}
                </div>
            )}

            {description && <p className="card-description">{description}</p>}

            {/* code for the buttons at the end - product type & Location */}
            <div className="button-container">
                <a href={button1Link} className="card-button">{button1Text}</a>
                <a href={button2Link} className="card-button">{button2Text}</a>
            </div>
        </div>
    );
}

export default Cards
