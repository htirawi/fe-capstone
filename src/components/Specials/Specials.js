import SpecialCard from '../SpecialCard/SpecialCard';
import styles from './style.module.css';

const Specials = ({ menu }) => {
    console.log(menu)
  return (
    <section className={styles.specialsContainer}>
      {menu.map((menuItem) => (
        <SpecialCard
          key={menuItem.name}
          imageSrc={menuItem.imageSrc}
          name={menuItem.name}
          price={menuItem.price}
          description={menuItem.description}
        />
      ))}
    </section>
  );
};

export default Specials;
