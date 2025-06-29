import YuMoney from "../../assets/images/icon/io.svg";
import React from "react";
import "./Donate.css";

const Donate = () => {
    return (
        <a className="donate" href="https://yoomoney.ru/to/4100119211527531">
            <img
                src={YuMoney}
                alt="Донат"
                loading="lazy"
                width={60}
                height={60}/>
        </a>
    )
}
export default Donate;