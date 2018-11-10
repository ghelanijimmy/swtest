import React from 'react';

const Header = () => (
    <header>
        <div className={'mainHead'}>
            <div className={'logo'}>
                <img src={"https://d26uhratvi024l.cloudfront.net/gsc/QIE8H9/8c/0d/54/8c0d5459ce6341b6b5d9b3d6a8a1c74a/images/ui/sunwing_logo_u186.png?token=647197e9b2185ddae8b4cc14786b2f87"} alt={"logo"} />
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