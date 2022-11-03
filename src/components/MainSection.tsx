import React from 'react';
import Section from './section';

export const MainSection = () => {
    return(
        <>
            <div>
                <Section 
                    headerNote={'Welcome back!'}
                />
                <Section 
                    headerNote={'Cheers to the Weekend '}
                />
            </div>
        </>
    )
}

export default MainSection;