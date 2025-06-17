import type { ProductCardProps } from '../App';

import styles from './ProductCard.module.scss';

const ProductCard = ({title, origin, price, currencies, imageUrl} : ProductCardProps) => {

    const formatCurrency = (currencyData: string[]): string[] => {
        const prices = currencyData.map((currency) => {
            let amount;
            switch (currency) {
                case 'USD': amount = price/100/85;
                break;
                case 'EUR': amount = price/100/90;
                break;
                case 'RUB': amount = price/100;
                break;
                default: amount = price;
            };
            return new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: currency,
                minimumFractionDigits: 2,
            }).format(amount);

        });
        return prices;
    };
    const prices = formatCurrency(currencies);

    return (
        <div className={styles.card}>
            <div className={styles.firstSection}>
                <img src={imageUrl} alt="product cover" className={styles.image}/>
            </div>
            <div className={styles.secondSection}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.origin}>{origin} </div> 
                <h3 className={styles.priceHeader}>Цена:</h3>
                <div className={styles.pricesList}>
                    {prices.map((price) => <span key={price} className={styles.price}>{price}</span>)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
