import Link from "next/link";
import { Card } from "react-bootstrap";

export default function GetStarted(props) {
    const { children, ...otherProps } = props;
return (
    <div {...otherProps} >
        <Card>
            <Card.Body>
              
              <div className="indexText">
                <ol className="indexList">
                    <li><b>Purchase MATICs and USDT.</b> <Link href="/faq#usdt">What&nbsp;is&nbsp;USDT?</Link>
                      <p>
                      The SMRT16 smart contract runs at Polygon, where you need MATIC tokens to pay the transaction fee.
                      You can acquire SMRT16 tokens by exchanging USDT. The referral rewards earned through the referral program will also be given in USDT.
                      </p>
                    </li>
                    <li>Exchange USDT to SMRT16 tokens. <Link href="/faq#smrt16amount">How much SMRT16 tokens do&nbsp;I&nbsp;need?</Link>
                      <p>
                        You can enter any amount to be exchanged with the constant rate&nbsp;of&nbsp;1:1.
                      </p>
                    </li>
                    <li>Refer friends. Get high revenue in USDT. <Link href="/faq#smrt16work">How does the referral program work?</Link>
                      <p>
                        Here in SMRT16 DApp you always get SMRT16 tokens with a referral.  If you don&apos;t have any, the app can find you one automatically, but purchasing without any is not possible.
                      </p>
                    </li>
                </ol>
              </div>
            </Card.Body>
        </Card>
    </div>
    
);

}