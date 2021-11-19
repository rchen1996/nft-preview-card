import equilibrium from './images/image-equilibrium.jpg';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <img src={equilibrium} alt='Equilibrium NFT' className='nft-image' />
    </div>
  );
}

export default Card;
