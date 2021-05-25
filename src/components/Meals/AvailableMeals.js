import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Punjabi sweets',
        description: 'test out our best punjabi test',
        price: 200,
    },
    {
        id: 'm2',
        name: 'Manchurian',
        description: 'the best chinese test',
        price: 100,
    },
    {
        id: 'm3',
        name: 'Pavbhaji',
        description: 'test spicy mix vegetable food',
        price: 150,
    },
    {
        id: 'm4',
        name: 'Greel Sandwitch',
        description: 'Healthy...and green...',
        price: 110,
    },
];

const AvailableMeals = () => {
    const mealsli = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id = {meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsli}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
