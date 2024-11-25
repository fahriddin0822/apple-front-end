import './Hero.css';

const Hero = ({ title, bg, desc, url, items, cl, textCl }) => {
  return (
    <div style={{background: `url(${url}) no-repeat center/cover`}} className="hero">
      <h2 style={{color:`${textCl}`}}>{title}</h2>
      <p style={{color:`${textCl}`}}>{desc}</p>
      <ul>
        {items?.map((item, index) => (
          <button className='btn__card' style={{background:`${cl}`}} key={index}>{item}</button>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
