import React from 'react'
import { useState, useEffect } from 'react';

const ProgreassBar = ({ timer }) => {
    const [remainingTime, setReamainingTime] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
            setReamainingTime(prevTime => prevTime - 10);
        }, 10);
        return () => {
            clearTimeout(interval);
        }
    }, []);
    return (
        <>
            <div><h5>If you don't want to <b>Delete</b> then press No button other wise it will deleted in {remainingTime} MS</h5></div>
            <progress value={remainingTime} max={timer} style={{ width: '100%' }} />
        </>
    )
}

export default ProgreassBar
