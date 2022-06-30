import React, { useEffect, useContext } from 'react'
import './case1.css'
import { Link } from "react-router-dom";

function LoginPage() {


    return (
        <div className='abc' >
            <img class="imgclass" src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png"></img>
            <h1>Ata Kariyer Eğitim Kurumlarına</h1>
            <h1>Hoşgeldiniz</h1>
            <section class="main">
                <div class="wrap wrap--1">
                    <a href="/ilkokul"><div class="container container--1">
                        <p>İlkokul Etüt Merkezi</p>
                    </div></a>
                </div>
                <div class="wrap wrap--2">
                <a href="/ortaokul">  <div class="container container--2">
                       <p>Ortaokul Liseye Hazırlık</p>
                    </div></a>
                </div>
            </section>

        </div >


    );
}

export default LoginPage;
