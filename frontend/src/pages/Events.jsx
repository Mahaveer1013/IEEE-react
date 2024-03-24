import React, { useContext } from 'react'
import { UserContext } from './Main';

export default function Events() {

    const value=useContext(UserContext)

    console.log(value);

    return (
        <><h1>Events</h1></>
    )
}