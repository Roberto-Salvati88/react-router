import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  // fetch al montaggio della pagina
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <section className="container">
      <h1>Prodotti</h1>
      <div className="grid">
        {products.map(product => (
          // ogni prodotto è cliccabile: Link cambia pagina SENZA ricaricare (SPA)
          <Link key={product.id} to={`/prodotti/${product.id}`} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
