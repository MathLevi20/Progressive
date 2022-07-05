import React, { useState } from 'react';
import logo from './../components/logo.png'
import { ROUTES } from '../application/constants';
import { Link, withRouter } from 'react-router-dom';

export const Welcome = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-10">
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <form
                    action="http://localhost:3000/signin"
                    id="revue-form"
                    name="revue-form"
                    target="_blank">
                    <div className="flex  md:flex-row justify-center mb-4">
                        <img src={logo} alt='logo' class='content-center w-2/12'></img>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center mb-2">
                        <h1 className="text-1xl md:text-1xl lg:text-5xl uppercase font-black mb-2 text-white">progressive</h1>
                    </div>
                    <h2 className="text-1xl md:text-1xl lg:text-2xl text-white">Por você, sua equipe e pelo que puderem fazer juntos.</h2>
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
            <main className="pt-16 bg-white w-full p-7 px-10">
                <div className="flex flex-col md:flex-row mb-2">
                    <h1 className="text-1xl md:text-1xl lg:text-5xl font-black mb-2 text-purple">Busca simplicidade?</h1>
                </div>
                <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu rutrum dolor, a dapibus eros. Nulla eget condimentum nibh. Duis auctor non orci in tempus. Aenean quis justo viverra, ultricies ex sed, feugiat libero. Nullam suscipit eget erat non imperdiet. Phasellus vehicula mi vel massa iaculis, non mollis magna molestie. Vivamus imperdiet lacinia ex, sed interdum orci scelerisque nec. Morbi pharetra eros a ante congue, non eleifend libero eleifend. Phasellus blandit diam vel turpis malesuada aliquam. Nullam sed risus sem.</p>
                <p class="p-3">Curabitur laoreet urna nulla, vel vestibulum ante tempor id. Fusce id elit eu dui porttitor rutrum et a augue. Vivamus luctus metus in lorem feugiat, sit amet scelerisque purus aliquam. Morbi eu massa in diam fringilla vehicula. Pellentesque cursus erat sollicitudin elit fermentum congue. Maecenas maximus accumsan nunc sed auctor. Quisque ut ullamcorper ipsum, a vulputate enim. In eu nulla at lectus porta blandit. Aenean aliquet imperdiet est, sed pulvinar enim tristique non. Fusce pharetra tortor eu neque ultrices sodales. Sed facilisis turpis vitae ligula euismod, sollicitudin dapibus ante rutrum. Vivamus tristique fermentum sem, quis ornare lacus. Donec ultrices, enim et rutrum auctor, libero dolor maximus enim, sit amet consectetur lacus lorem eu ex. Cras pellentesque tristique nunc, a semper tortor cursus et. Aenean bibendum ornare tortor, id faucibus magna tristique et.</p>
                <p class="p-3">Aliquam dignissim enim id tincidunt placerat. Proin non purus laoreet mauris viverra bibendum. Etiam ut risus metus. Curabitur tristique turpis ut semper facilisis. Pellentesque id aliquam turpis. Nulla hendrerit quis dui vitae ultrices. Fusce eget risus sed est pharetra molestie. Donec quis sem egestas, lacinia magna vel, fringilla tellus. Proin sit amet viverra mauris. Integer faucibus id ante vitae tempor.</p>
                <div className="flex flex-col md:flex-row mb-2">
                    <h1 className="text-1xl md:text-1xl lg:text-5xl font-black mb-2 text-purple">Chame os amigos!</h1>
                </div>
                <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu rutrum dolor, a dapibus eros. Nulla eget condimentum nibh. Duis auctor non orci in tempus. Aenean quis justo viverra, ultricies ex sed, feugiat libero. Nullam suscipit eget erat non imperdiet. Phasellus vehicula mi vel massa iaculis, non mollis magna molestie. Vivamus imperdiet lacinia ex, sed interdum orci scelerisque nec. Morbi pharetra eros a ante congue, non eleifend libero eleifend. Phasellus blandit diam vel turpis malesuada aliquam. Nullam sed risus sem.</p>
                <p class="p-3">Curabitur laoreet urna nulla, vel vestibulum ante tempor id. Fusce id elit eu dui porttitor rutrum et a augue. Vivamus luctus metus in lorem feugiat, sit amet scelerisque purus aliquam. Morbi eu massa in diam fringilla vehicula. Pellentesque cursus erat sollicitudin elit fermentum congue. Maecenas maximus accumsan nunc sed auctor. Quisque ut ullamcorper ipsum, a vulputate enim. In eu nulla at lectus porta blandit. Aenean aliquet imperdiet est, sed pulvinar enim tristique non. Fusce pharetra tortor eu neque ultrices sodales. Sed facilisis turpis vitae ligula euismod, sollicitudin dapibus ante rutrum. Vivamus tristique fermentum sem, quis ornare lacus. Donec ultrices, enim et rutrum auctor, libero dolor maximus enim, sit amet consectetur lacus lorem eu ex. Cras pellentesque tristique nunc, a semper tortor cursus et. Aenean bibendum ornare tortor, id faucibus magna tristique et.</p>
                <div className="flex flex-col md:flex-row mb-2">
                    <h1 className="text-1xl md:text-1xl lg:text-5xl font-black mb-2 text-purple">Rápido e Fácil de usar</h1>
                </div>
                <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu rutrum dolor, a dapibus eros. Nulla eget condimentum nibh. Duis auctor non orci in tempus. Aenean quis justo viverra, ultricies ex sed, feugiat libero. Nullam suscipit eget erat non imperdiet. Phasellus vehicula mi vel massa iaculis, non mollis magna molestie. Vivamus imperdiet lacinia ex, sed interdum orci scelerisque nec. Morbi pharetra eros a ante congue, non eleifend libero eleifend. Phasellus blandit diam vel turpis malesuada aliquam. Nullam sed risus sem.</p>
                <p class="p-3">Curabitur laoreet urna nulla, vel vestibulum ante tempor id. Fusce id elit eu dui porttitor rutrum et a augue. Vivamus luctus metus in lorem feugiat, sit amet scelerisque purus aliquam. Morbi eu massa in diam fringilla vehicula. Pellentesque cursus erat sollicitudin elit fermentum congue. Maecenas maximus accumsan nunc sed auctor. Quisque ut ullamcorper ipsum, a vulputate enim. In eu nulla at lectus porta blandit. Aenean aliquet imperdiet est, sed pulvinar enim tristique non. Fusce pharetra tortor eu neque ultrices sodales. Sed facilisis turpis vitae ligula euismod, sollicitudin dapibus ante rutrum. Vivamus tristique fermentum sem, quis ornare lacus. Donec ultrices, enim et rutrum auctor, libero dolor maximus enim, sit amet consectetur lacus lorem eu ex. Cras pellentesque tristique nunc, a semper tortor cursus et. Aenean bibendum ornare tortor, id faucibus magna tristique et.</p>
                <div className="text-center">
                    © Progressive Software
                </div>
            </main>
        </div>
    );
};
