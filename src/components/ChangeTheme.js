import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ContextTheme from '../context/ContextTheme'
import ContextValues from '../context/ContextValues';

function ChangeTheme(){
    const {theme, setTheme} = useContext(ContextTheme);
    const {user} = useContext(ContextValues)

    return <>
        {
        theme === 'bg-secondary' ? <Button onClick={() => setTheme('bg-dark')} variant="dark">Switch theme</Button> : <Button onClick={() => setTheme('bg-secondary')} variant="light">Switch theme</Button>
        }
        <div>
            hallo {user.login},  your order was sent to {user.email}.
        </div>
    </>
}

export default ChangeTheme;