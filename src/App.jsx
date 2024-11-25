import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { PRODUCTS } from './static';
import Product from './components/products/Product';
import Footer from './components/footer/footer';


function App() {
  return (
    
    <div className="app">
      <Header />
      <Hero
        title="iPad Pro"
        desc="Unbelievable thin. Increadibly powerful."
        url={PRODUCTS[0].url}
        items={['Learn more']}
        cl="blue"
        textCl="white"
      />

      <Hero
        title="iPad Air"
        desc="Two sized. Faster chip. Does it all."
        url={PRODUCTS[1].url}
        items={['Learn more']}
        cl="black"
        textCl="black"
      />

      <Hero
        title="mac Air"
        desc="Lean. Mean. M3 machine."
        url={PRODUCTS[2].url}
        items={['Learn more']}
        cl="blue"
        textCl="black"
      />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
