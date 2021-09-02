import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../constants/responsive';

import JeepImage from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;
    
    img {
        width: auto;
        height: 100%;
    }

    @media(min-width: ${SCREENS.md}) {
        height: 28em;
    }
    
    @media(min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media(min-width: ${SCREENS['2xl']}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={ JeepImage } alt="Jeep" />
            </CarContainer>
            <InfoContainer>
                <Title>Fell the best experience with our rental deals</Title>
                <InfoText>
                    Duis cillum esse qui proident eiusmod irure aliqua quis esse irure ex duis nulla ullamco. Consectetur exercitation ullamco minim deserunt elit commodo pariatur. Adipisicing non mollit pariatur quis. Eu pariatur do irure et labore excepteur proident aute eu incididunt labore. Adipisicing non mollit pariatur quis. Eu pariatur do irure et labore excepteur proident aute eu incididunt labore. Adipisicing non mollit pariatur quis. Eu pariatur do irure et labore excepteur proident aute eu incididunt labore. Adipisicing non mollit pariatur quis. Eu pariatur do irure et labore excepteur proident aute eu incididunt labore.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}