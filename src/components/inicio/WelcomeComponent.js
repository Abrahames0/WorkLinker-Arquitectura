import React, { useEffect, useState } from "react";
import WorkLinker from "../../landing/assets/img/WorkLinker.png";

const TitleCard = { fontSize: "22px", textAlign: "center" };

const WelcomeComponent = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ text, setText ] = useState("");
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const [ , setIndex ] = useState(1);
    const period = 1000;
    const toRotate = [ "Empresas", "Socios", "Colegas" ];

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[ i ];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting)
            setDelta((prevDelta) => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(250);
        } else
            setIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        let ticker = setInterval(() => tick(), delta);
        return () => clearInterval(ticker);
    });

    return (<>
        <span className="col-12 pb-4" style={TitleCard}>
            Bienvenido a{" "}
            <img src={WorkLinker} alt="Logo de WorkLinker" style={{
                width: "10rem"
            }} />
        </span>
        <h1>
            {`Conectamos `}
            <span className="txt-rotate" data-rotate='[ "Empresas", "Socios", "Colegas" ]'>
                <span className="wrap" style={{
                    color: "#d63384"
                }}>
                    {text}
                </span>
            </span>
        </h1>
        <p>
        Somos una plataforma innovadora que persigue un ambicioso objetivo: conectar de manera eficiente a empresas
        de diversos sectores, permitiéndoles ofrecer y gestionar sus servicios de forma más efectiva y colaborativa.
        </p>
    </>);
}

export default WelcomeComponent;