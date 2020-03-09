import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './img/logo.png';
import test from './img/test.jpg'

class Header extends React.Component {
    render() {
        return <header>
            <img className='logo' src={logo} alt='logo' />
            <ul className='menu'>
                <li><a href="#">Концерты</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Что-то еще</a></li>
            </ul>
        </header>
    }
}

class Concert extends React.Component {
    render() {
        return (
            <div className='concert'>
                <div className='concert-img'>
                    <img src={test} rel='test' />
                </div>
                <div className='concert-info'>
                    <h2>Пошлая молли</h2>
                    <p>Город Краснодар</p>
                    <p>24 марта - 25 марта</p>
                    <button className='concert-button'>Купить</button>
                </div>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (<div>
            <Concert />
            <Concert />
        </div>)
    }
}



class General extends React.Component {
    render() {
        return (<div className='general'>
            <Header />
            <Main />
        </div>)
    }
}

ReactDOM.render(
    <General />,
    document.getElementById('root')
);
