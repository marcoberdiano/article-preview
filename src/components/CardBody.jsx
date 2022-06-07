import Social from './Social';
import IconShare from '../images/icon-share.svg';
import avatar from '../images/avatar-michelle.jpg';
import { useState } from 'react';

const CardBody = () => {

    const [social, setSocial] = useState(false);
    const handleclick = () => {
        setSocial(!social);
    }

    return ( 
        <div className='profile-container'>

                    <div className='profile-left'>
                        <img className='avatar' src={avatar} alt="avatar" />
                        <div>
                            <h4>Michelle Appleton</h4>
                            <p className='date'>28 Jun 2020</p>
                        </div>
                    </div>

                    <div className={`profile-right ${social && 'ative'}`}>
                        <div className='icon' onClick={handleclick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={`${social ? '#FFF' : '#6E8098'}`} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                        </div>
                        { social &&
                            <div className='social-desk'>
                                <Social/>
                            </div> 
                        }
                    </div>
                    
                    {social && <Social/>}

                </div>
     );
}
 
export default CardBody
