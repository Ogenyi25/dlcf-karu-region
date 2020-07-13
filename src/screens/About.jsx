import React from 'react';

const About = () => {
    return (
        <div className="about-page" id="about">
            <div className="title">WHO WE ARE</div>
            <div className="sect1">
                The heartbeat of our church is to see lives changed by the power of God's Spirit.
                We believe that every person has a God-given purpose inside of them.
            </div>
            <div className="sect2">OUR FELLOWSHIP DNA CONSISTS OF FOUR CORE VALUES. </div>
            <h4 className="value">love</h4>
            <div className="body">We love God with all we are and strive to do his will daily.</div>
            <h4 className="value">spiritual growth</h4>
            <div className="body">We strive to continually grow in faith and in the word of God.</div>
            <h4 className="value">service</h4>
            <div className="body">We commit to displaying God's love through serving others.</div>
            <h4 className="value">evangelism</h4>
            <div className="body">Standing still is not an option; <strong>we must go and make a difference</strong>.</div>
            <hr className="line" />

            <div className="minister">
                <div className="head">OUR PASTOR</div>
                <div className="minister-info row container-fluid">
                    <div className="image col-md-4">
                        <img className="img" src={require("../assets/images/pastor.jpg")} alt="" />
                    </div>
                    <div className="write-up col-md-8">
                        <h4 className="name">PST.(Dr) SAMUEL OKWULU</h4>
                        <p className="details">
                        Pst. (Dr) Samuel Okwulu has served as Senior Pastor of the fellowship for 3years.
                        He and his wife reside in New Karu, Karu L.G.A of Nasarawa State and have 1 son.<br />
                        Pst. (Dr) Samuel Okwulu is an all round preacher who takes like his own soul, the souls of those placed
                        under his care and control.
                        He is a true man of God and has over the years been used and is still used of God mightily to bless his children.
                        </p>
                    </div>
                </div>

            </div>
            <hr className="line" />
        </div>
    )
}


export default About;