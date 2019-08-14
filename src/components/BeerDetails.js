import React from "react";
import styled from 'styled-components';

const BeerDetailsElement = styled.div`
    max-width: 17em;
`;

const BeerDetailsElementTitle = styled.h3`
    font-weight: bold;
    font-size: 2em;
    margin: 0;
`;

const BeerDetailsElementSubtitle = styled.h5`
    font-size: 1.4em;
    font-weight: normal;
    border: 0;
    margin: 0;
`;

const BeerDetailsElementImage = styled.div`
    height: 14em;
    background-image: url(${(props)=>props.imgUrl});
    margin: 1.5em 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-width: 1px;
    border-color: #505050;
    border-style: solid;
    background-origin: content-box;
    padding: 1em;
`;

const BeerDetailsElementTagline = styled.p`
    font-size: 1.2em;
    color: #484848;
    font-style: italic;
    margin-top: .5em;
`;

const BeerDetailsElementParagraph = styled.p`
    font-size: 1.2em;
    color: #484848;
`;


export default class BeerDetails extends React.Component {  
  render() {
    const { name, abv, image_url, tagline, description } = this.props.data;

    return (
        <BeerDetailsElement>
            <BeerDetailsElementTitle>{name}</BeerDetailsElementTitle>
            <BeerDetailsElementImage imgUrl={image_url}></BeerDetailsElementImage>
            <BeerDetailsElementSubtitle>ABV: {abv}</BeerDetailsElementSubtitle>
            <BeerDetailsElementTagline>{tagline}</BeerDetailsElementTagline>
            <BeerDetailsElementParagraph>{description}</BeerDetailsElementParagraph>
        </BeerDetailsElement>
    )
  }
}