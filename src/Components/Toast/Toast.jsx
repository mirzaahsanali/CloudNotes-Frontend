import React , {useContext} from 'react'
import "./Toast.css"
import ToastContext from '../../Context/Toast/ToastContext'


const Toast = () => {

    const toastContext = useContext(ToastContext)
    const { notification } = toastContext;

    return (
        <>
            <div id='toastCard' className="toastCard p-3 mt-3">
                <p className="text3 p-0 m-0">{notification}</p>
            </div>
        </>
    )
}

export default Toast