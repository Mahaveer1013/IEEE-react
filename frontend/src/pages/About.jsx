import React, { useContext } from 'react'
import { UserContext } from './Main';

export default function About() {

    const value=useContext(UserContext)

    console.log(value);

    return (
        <><h1>About</h1></>
    )
}