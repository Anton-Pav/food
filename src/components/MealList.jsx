import {Meal} from "./Meal";

function MealList({meals}) {
    return <div className='list'>
        {meals.map((m) => (
            <Meal key={m.idMeal} {...m}/>
        ))}
    </div>
}

export {MealList}