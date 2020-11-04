import React from 'react'
import './Modal.css'


export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className="modal-button" onClick={()=> this.setState({isOpen: true})}>Тестове модальне вікно</button>

                { this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Тест1</h1>
                        <p>Модальне вікно</p>
                        <button onClick={()=> this.setState({isOpen: false})}>Закрити вікно</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}