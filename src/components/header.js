import React from 'react';

const Header = () => (
    <header>
        <div className={'mainHead'}>
            <div className={'logo'}>
                <img src={"https://www.sunwing.ca/Content/images/global/header/sunwing-experience-the-difference-white-logo.png"} alt={"logo"} />
            </div>
            <div className={'mainNav'}>
                <ul>
                    <li>Sign in</li>
                    <li>Flight status</li>
                    <li>My Booking</li>
                    <li>My Gateway</li>
                    <li>FR</li>
                </ul>
            </div>
        </div>
        <div className={'mainSubNav'}>
            <ul>
                <li>Packages</li>
                <li>Flights</li>
                <li>Hotels</li>
                <li>Cruises</li>
                <li>Destinations</li>
                <li>Groups & Weddings</li>
                <li>More</li>
                <li><input type={'text'} placeholder={'Find a Hotel'} /></li>
            </ul>
        </div>
    </header>
);

export default Header;