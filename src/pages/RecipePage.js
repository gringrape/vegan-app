
import recipes from '../data/recipes';

const recipe = recipes[17];

export default function RecipePage() {
  return (
    <div>
      <section>
        <img src={recipe.image} alt={recipe.name} />
        <h1>{recipe.name}</h1>
        <p>{recipe.recommendation}</p>
        <ul>
          <li>{recipe.cookingInfo.time}</li>
          <li>{recipe.cookingInfo.difficulty}</li>
          <li>{recipe.cookingInfo.price}</li>
        </ul>
      </section>
      <section>
        <h2>재료</h2>
        <section>
          <h3>주재료</h3>
          <ul>
            {recipe.mainIngredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>부재료</h3>
          <ul>
            {recipe.subIngredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>
      </section>
      <section>
        <h2>추천 상품</h2>
        <ul>
          {recipe.recommendedProducts.map(product => (
            <li key={product.name}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <a href={product.link}>상품보러가기</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>조리 순서</h2>
        <ol>
          {recipe.recipe.map((step, index) => (
            <li key={index}>
              <h4>Step {index + 1}</h4>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
