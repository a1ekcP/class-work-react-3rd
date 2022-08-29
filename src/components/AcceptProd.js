import Button from 'react-bootstrap/Button';
import ContextValues from '../context/ContextValues';
import React, { useContext, useEffect, useRef, useState } from 'react';

function AcceptProd(){
    const {user} = useContext(ContextValues);
    const [showAccept, setShowAccept] = useState(false);

    function acceptClick(){
        setShowAccept(true)
    }
    setTimeout(() => {
        setShowAccept(false)
    }, 3000);

    return <>
        <Button onClick={() => acceptClick()} variant="primary">Accept</Button>
        <div className={showAccept ? 'd-block' : 'd-none'}>
            hallo <span className='user-color'>{user.login}</span>, your order was sent to <span className='user-color'>{user.email}</span>.
        </div>
    </>
}

export default AcceptProd;