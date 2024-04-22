import React from 'react'

import { ReactComponent as LightModeToggle } from '../assets/icons/lightmode.svg';
import { ReactComponent as DarkModeToggle } from '../assets/icons/darkmode.svg';

const ModeToggle = (darkMode) => {

    return (
        <div className='mode-button'>
            {(darkMode) ?
                <LightModeToggle />
                :
                <DarkModeToggle />
            }
        </div>
    )
}

export default ModeToggle;
