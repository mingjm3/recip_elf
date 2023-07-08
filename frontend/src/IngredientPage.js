import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useEffect, useState } from "react";
import IngredientForm from "./components/IngredientForm";
function IngredientPage() {
  const [ingredients, setIngredients] = useState([])
  const listItems = ingredients.map(ingredient => {
    return (
      <div>
        <p>{ingredient.name}</p>
        <p>{ingredient.expiration.toDateString()}</p>
      </div>
    )
  })

  return (
    <div className="profile">
      <h1>IngredientsPage</h1>
      <Stack direction="horizontal" gap={3}>
        <Container>
          <ul>
            {listItems}
          </ul>
        </Container>
        <Container>
          <IngredientForm />
        </Container>
      </Stack>
    </div>
  )
}

export default IngredientPage

