import React, { useState } from 'react';
import logo from './../components/logo.png'
import { ROUTES } from '../application/constants';
import { Link, withRouter } from 'react-router-dom';

export const Welcome = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-10">
            <main className="container w-full md:h-screen m-auto px-6 pt-16 flex-1 text-center">
                <form
                    action="http://localhost:3000/signin"
                    id="revue-form"
                    name="revue-form"
                    target="_blank">
                    <div className="flex  md:flex-row justify-center mb-4">
                        <img src={logo} alt='logo' class='content-center w-2/12'></img>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center mb-2">
                        <h1 className=" text-3xl md:text-5xl uppercase font-black mb-2 text-white">progressive</h1>
                    </div>
                    <h2 className="text-1xl md:text-2xl text-white">Por você, sua equipe e pelo que puderem fazer juntos.</h2>
                    <div className="flex flex-row md:flex-row justify-center mb-1 p-10">
                        <Link to={ROUTES.BOARDS} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 rounded ">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#te"
                            >
                                <i className="fab fa-facebook-square text-4xl leading-lg text-white opacity-75 "></i><span className="ml-1 text-2xl"> Entrar </span>
                            </a>
                        </Link>
                    </div>
                </form>
            </main>
            <main className="pt-10 bg-white w-full p-7 px-10">
                <div className="flex flex-col md:flex-row mb-2 ">
                    <h1 className="text-3xl lg:text-5xl font-black mb-2 text-purple sm:px-20">Busca simplicidade?</h1>
                </div>
                <p class=" text-xl sm:px-20">Bem-vindo ao nosso novo aplicativo de gerenciamento de projetos. Nós acreditamos que a simplicidade é a chave para o sucesso e por isso, criamos um aplicativo que é fácil de usar e oferece uma solução eficiente para organizar seus projetos. Além disso, você pode convidar seus amigos e colaboradores para juntos, alcançarem seus objetivos de maneira rápida e fácil. Não perca mais tempo com complicadas ferramentas de gerenciamento de projetos, experimente nosso aplicativo hoje mesmo!</p>
              
                <div className="flex flex-col md:flex-row mb-2">
                    <h1 className="text-3xl lg:text-5xl font-black mb-2 text-purple sm:px-20">Chame os amigos!</h1>
                </div>
                <p class=" text-xl sm:px-20">Se você está procurando uma forma eficiente e simples de gerenciar seus projetos, nós temos a solução ideal para você. Com nosso aplicativo, você pode convidar seus amigos ou parceiros de projetos para juntos, criarem, organizarem e acompanharem o andamento de seus projetos. Nós acreditamos que a colaboração é fundamental para o sucesso de qualquer projeto e por isso, desenvolvemos um aplicativo que facilita a comunicação e a integração entre os membros do time. Não perca mais tempo lidando com complexos processos de gerenciamento de projetos, experimente agora nosso aplicativo e sinta a diferença.</p>
               
                <div className="flex flex-col md:flex-row mb-2">
                    <h1 className="text-3xl lg:text-5xl font-black mb-2 text-purple sm:px-20">Rápido e Fácil de usar</h1>
                </div>
                <p class=" text-xl sm:px-20 ">Nós apresentamos a você um novo e revolucionário aplicativo de gerenciamento de projetos. Com uma interface minimalista e intuitiva, nosso aplicativo é rápido e fácil de usar, permitindo que você organize e acompanhe seus projetos com eficiência. Nós acreditamos que menos é mais e por isso, optamos por uma abordagem minimalista para o design de nossa ferramenta, sem comprometer a funcionalidade e a eficiência. Se você está cansado de lidar com aplicativos complexos e confusos, experimente nosso aplicativo e experimente a diferença de um gerenciamento de projetos simples, rápido e fácil.</p>
            </main>
            <div className="text-center mt-5 p-3 bg-gray-200 ">
                    © Progressive Software
                </div>
        </div>
    );
};
