import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ContextTheme from '../context/ContextTheme'

function ChangeTheme(){
    const {theme, setTheme} = useContext(ContextTheme);

    return <>
        {
        theme === 'bg-secondary' ? <Button onClick={() => setTheme('bg-dark')} variant="dark">Switch theme</Button> : <Button onClick={() => setTheme('bg-secondary')} variant="light">Switch theme</Button>
        }
    </>
}

export default ChangeTheme;