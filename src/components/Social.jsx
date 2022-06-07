import {FaFacebookSquare, FaTwitter, FaPinterest} from 'react-icons/fa';
const Social = () => {
    return ( 
        <div className='social'>
            <p className='share'>share</p>
            <FaFacebookSquare size={20}/>
            <FaTwitter size={20}/>
            <FaPinterest size={20}/>
        </div>
     );
}
 
export default Social;