import styles from './Product.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = props => {
  const { title, basePrice, colors, sizes, name  } = props; // Destructure the props

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
              <li key={size.name}>
                <button
                  type="button"
                  className={clsx(selectedSize === size.name && styles.active)}
                  onClick={() => setSelectedSize(size.name)}
                >
                  {size.name}
                </button>
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(
                      styles.colorButton,
                      selectedColor === color && styles.active
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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