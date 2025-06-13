import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    }
];

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
    return (
        <Box
            component="nav"
            width="100%"
            position={singlePage ? 'fixed' : 'relative'}
            className={darkMode ? Style.dark : Style.light}
        >
            <Box
                component="ul"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={{ xs: '2rem', md: '6rem' }}
                height="80px"
                textTransform="lowercase"
                fontSize="1rem"
            >
                {links.map((link, index) => (
                    <Box
                        key={index}
                        component="li"
                        className={(link.active === active && !link.type) ? Style.active : ''}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            borderImageSource: info.gradient
                        }}
                    >
                        <Link
                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={(el) => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)}
                            className={Style.link}
                        >
                            {!link.type && (
                                <span className={Style.navText}>
                                    {link.name}
                                </span>
                            )}
                            {link.type && (
                                <span className={Style.initials}>
                                    {link.name}
                                </span>
                            )}
                        </Link>
                    </Box>
                ))}
                <Box component="li">
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </Box>
            </Box>
        </Box>
    );
}
