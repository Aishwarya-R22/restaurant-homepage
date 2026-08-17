import hero from '../assets/images/hero-food-clean.jpg'

export default function Hero() { return <section id="home" className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,5,5,.98) 0%,rgba(5,5,5,.9) 34%,rgba(5,5,5,.28) 68%,rgba(5,5,5,.08) 100%),url(${hero})`}}>
  <div className="hero-content">
    <span className="hero-kicker">Fresh ingredients. Bold flavours.</span>
    <h1>The Perfect Space to<br/>Enjoy <em>Fantastic Food</em></h1>
    <p>Experience vibrant dining where smoky grills, thoughtful plates and warm hospitality come together.</p>
    <div className="hero-actions"><a href="#menu" className="button primary">Explore menu</a><a href="#about" className="play"><b>▶</b> Our story</a></div>
  </div>
  <div className="dish-badge"><strong>90.85</strong><span>Sicilian Plate</span><small>★★★★★</small></div>
  <div className="hero-dots"><i/><i/><i/></div>
 </section> }
