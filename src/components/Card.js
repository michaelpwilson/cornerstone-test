import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Link } from "react-router-dom";


const CardElement = styled.div`
    max-width: 17em;
`;

const CardTitle = styled.h3`
    font-weight: bold;
    font-size: 1.4em;
    margin-top: 0;
    margin-bottom: 0.5em;
`;

const CardSubtitle = styled.h5`
    margin-top: 0;
    font-weight: normal;
    font-size: 1.1em;
    margin-bottom: 1.25em;
`;

const CardImage = styled.div`
    height: 14em;
    background-image: url(${(props)=>props.imgUrl});
    
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

const CardButton = styled.button`
    font-size: 1.4em;
    background: none;
    border: 0;
    padding: 1em 0;
    color: #484848;
`;


export default class Card extends React.Component {
  render() {
    const { name, abv, image_url } = this.props.data;

    return (
        <CardElement to="/beer/id">
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>ABV: {abv}</CardSubtitle>
            <CardImage imgUrl={image_url}></CardImage>
            <CardButton>More Details</CardButton>
            <Link to="/beer/id">Hello</Link>
        </CardElement>
    )
  }
}