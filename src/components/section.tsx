import React from 'react';
import { InnerCard, InnerImage, SectionCard, TextCard } from '../styles/section';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive : any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };

interface PropsArgs {
    headerNote: string;
}

export const Section = ({ headerNote } : PropsArgs) => {
    return(
        <>
            <div>
                <h2
                    style={{
                        margin: '4rem 0 0 0'
                    }}
                >{headerNote}</h2>
                <Carousel
                    responsive={responsive}
                    arrows={false}
                >
                    <SectionCard>
                        <InnerCard>
                            <InnerImage 
                                src='image/burna.svg'
                                alt='Burna'
                            />
                            <TextCard>
                                <h3>Daily life</h3>
                                <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
                            </TextCard>
                        </InnerCard>
                    </SectionCard>
                    <SectionCard>
                        <InnerCard>
                            <InnerImage 
                                src='image/burna.svg'
                                alt='Burna'
                            />
                            <TextCard>
                                <h3>Daily life</h3>
                                <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
                            </TextCard>
                        </InnerCard>
                    </SectionCard>
                    <SectionCard>
                        <InnerCard>
                            <InnerImage 
                                src='image/burna.svg'
                                alt='Burna'
                            />
                            <TextCard>
                                <h3>Daily life</h3>
                                <p>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </p>
                            </TextCard>
                        </InnerCard>
                    </SectionCard>
                </Carousel>
                
            </div>
        </>
    )
}

export default Section;