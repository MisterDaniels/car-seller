import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../constants/responsive';
import { menuStyle } from './menuStyle';

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};

    ${({ menu }) => menu && css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `};
    `};
`;

export function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile) {
        return (
            <Menu right styles={ menuStyle }>
                <ListContainer>
                    <NavItem menu>
                        <a href="/home">
                            Home
                        </a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/cars">
                            Cars
                        </a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/services">
                            Services
                        </a>
                    </NavItem>
                    <NavItem menu>
                        <a href="/contact">
                            Contact Us
                        </a>
                    </NavItem>
                </ListContainer>
            </Menu>
        );
    }

    return (
        <ListContainer>
            <NavItem>
                <a href="/home">
                    Home
                </a>
            </NavItem>
            <NavItem>
                <a href="/cars">
                    Cars
                </a>
            </NavItem>
            <NavItem>
                <a href="/services">
                    Services
                </a>
            </NavItem>
            <NavItem>
                <a href="/contact">
                    Contact Us
                </a>
            </NavItem>
        </ListContainer>
    ); 
}