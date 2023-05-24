import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const { title, basePrice, colors, sizes, name  } = props; // Destructure the props

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const totalPrice = useMemo(() => {
    const selectedSizeObj = sizes.find((size) => size === selectedSize);
    return basePrice + (selectedSizeObj ? selectedSizeObj.additionalPrice : 0);
  }, [basePrice, sizes, selectedSize]);

  // function to display product summary at console.log
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSizeObj = sizes.find((size) => size === selectedSize);
    console.log('Summary');
    console.log('=========');
    console.log('Name:', title);
    console.log('TotalPrice:', totalPrice);
    console.log('Size:',  selectedSizeObj ? selectedSizeObj.name : '');
    console.log('Color:', selectedColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} selectedColor={selectedColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <ProductOptions
          sizes={sizes}
          colors={colors}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          setSelectedSize={setSelectedSize}
          setSelectedColor={setSelectedColor}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;