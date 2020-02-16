import React from 'react';
import style from '../style/recipe.module.css';

const RecipeView = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>  
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} ></img>
        </div>
    );
}

export default RecipeView;