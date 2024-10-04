import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Sonzai X シ </span>
          from <span className="purple">West Java, Indonesia.</span>
          <br />
          I have been passionate about coding since 2018 and have been exploring it deeply over the years. 
          Despite that, I still consider myself a newbie, but my love for coding keeps growing stronger, you can also find me on my Telegram channel.
          <br />
          <a href="https://t.me/November2kBio" target="_blank" style={{ color: "rgb(155 126 172)" }}>
          Recycle of Sonzai X シ
          </a>
          <br />
           <br />
            Apart from coding, some other activities that I love to do!
        </p>
          <ul>
            <li className="about-activity">
            » Playing Games
            </li>
            <li className="about-activity">
            » Watch Anime
            </li>
            <li className="about-activity">
            » Thats it, Im That Boring In My Life :)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
  You can mess with me in real life but,
  <br />don’t even try mess with me on social media.
  <br />© sonzaix 2024
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
