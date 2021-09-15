import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/BookCard';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;
    
export function HomePage() {
    return (
        <PageContainer>
            <NavBar />
            <TopSection />
            <BookCard /> 
            <BookingSteps />
            <AboutUs />
            <TopCars />
            <Footer />
        </PageContainer>
    );
}