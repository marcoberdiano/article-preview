import drawers from '../images/drawers.jpg';
import CardHead from './CardHead';
import CardBody from './CardBody';

const Card = () => {
    return ( 
        <div className="card-container">

           <div className="left">
                <img className='drawers' src={drawers} alt="drawers" />
           </div>
           
           <div className="right">
                <CardHead/>         
                <CardBody/>    
           </div>
           
        </div>
     );
}
 
export default Card;