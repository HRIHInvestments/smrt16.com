import { Card } from "react-bootstrap";


export default function WhatsSMRT16(props) {
  const { children, ...otherProps } = props;

    return (<div {...otherProps}>
        <Card>
            <Card.Body>
              <Card.Title as="h1">What is SMRT16</Card.Title>
              <div className="indexText">
                <p >
                This is a crypto token of the ERC20 standard in the Polygon network. </p>
                <p style={{fontWeight:"500",color:"black"}}>
                You may be interested in purchasing SMRT16 due to the properties of this token.
                </p>
                <p>
                First of all, it is a unique four level referral program built into the Smart Contract token sale.
                Thanks to it, decentralization of project marketing is achieved.<br/> 
                Secondly, SMRT16 implements a decentralized idea that operates exclusively on-chain without external management involvement.
                </p>
                <p>
                The project's objective is to get people's attention, which will then be capitalized on for ongoing financial advantage for the token holders. 
                SMRT16 generates its funding from token sales, rewarding participants through marketing bonuses.
                </p>
                <p style={{marginTop:"32px",fontWeight:"500",color:"black"}}>
                The mission of the SMRT16 project is to show that entire decentralized organizations can exist on the blockchain that do not require human management.
                </p>
              </div>
              
            </Card.Body>
            </Card>
    </div>);
}