import styles from './ProductOptions.module.scss'
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductOptions = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  setSelectedSize,
  setSelectedColor,
  handleSubmit
}) => {
  return (
    <form>
      <OptionSize
        sizes={sizes}
        selectedSize={selectedSize.name}
        setSelectedSize={setSelectedSize}
      />
      <OptionColor
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Button className={styles.button} onClick={handleSubmit}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductOptions;