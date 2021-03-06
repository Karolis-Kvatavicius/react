import React from 'react'
import { GiChicken } from 'react-icons/gi';


export default function Not_Found() {
    return (
        <div className="text-center">
            <h2 className="mt-5">No one's here, but us chickens!</h2>
            <GiChicken size='25em' color='orange' className='mt-5 ' />
        </div>
    )
}
