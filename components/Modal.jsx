import { useState, useEffect } from 'react'
import Button from '../components/Button'
import style from '../styles/Modal.module.css'

export default function Modal(props) {

    const [registerActive, setRegisterActive] = useState(null)

    function save(e) {
        e.preventDefault()
        const color = e.target.form[0].value
        const whatsapp = e.target.form[1].value
        console.log(color, whatsapp)
        const object = {
            color,
            whatsapp,
            register: registerActive
        }
        props.functionSave(object)
    }

    function registerActiveHandler () {
        setRegisterActive(!registerActive)
    }

    useEffect(()=>{
        setRegisterActive(props.userDB.register)
    },[props.userDB.register])

    return (
        <div className={`${style.modalContainer} ${props.mode == false ? style.modalContainerTop : ''} `}>
            <form className={style.modalForm}>
                <span onClick={props.functionMode} className={style.x}>X</span>
                <h4>Config Web Page</h4>
                <label>
                    Color:
                    <input className={style.input} type="text" placeholder="#024164" defaultValue={`${props.userDB.color == undefined ? '' : props.userDB.color}`} />
                </label>
                <label>
                    WhatsApp:
                    <input className={style.input} type="text" placeholder="https://api.whatsapp.com/send?phone=73447725&text=Hola%20mundo" defaultValue={`${props.userDB.whatsapp == undefined ? '' : props.userDB.whatsapp}`} />
                </label>
                <span className={`${style.registerControllerContainer} ${registerActive == true ? style.registerControllerContainerActive : ''}`} onClick={registerActiveHandler}><span className={`${style.circleRegisterController} ${registerActive == true ?style.circleRegisterControllerActive : '' }`}></span></span>
                <Button style='buttonPrimary' click={save}>Guardar</Button>
            </form>
        </div>
    )
}
