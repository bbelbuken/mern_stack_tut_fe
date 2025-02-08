import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';

import { useSendLogoutMutation } from '../features/auth/authApiSlice';

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;
const DashHeader = () => {
    return (
        <header className='dash-header'>
            <div className='dash-header__container'>
                <Link to='/dash'>
                    <h1 className='dash-header__title'>techNotes</h1>
                </Link>
                <nav className='dash-header__nav'>
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
    );
};

export default DashHeader;
