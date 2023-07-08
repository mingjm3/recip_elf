import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import IngredientForm from "./components/IngredientForm";
function IngredientPage() {
  const [ingredients, setIngredients] = useState([])
  const tableRows = ingredients.map(ingredient => {
    const expiry = new Date(ingredient.expiration)
    return (
        <tr>
          <td>{ingredient.name}</td>
          <td>{expiry.toDateString()}</td>
        </tr>
    )
  })

  return (
    <div className="profile">
      <h1>IngredientsPage</h1>
      <Stack direction="horizontal" gap={3}>
        <Container>
          <Table striped bordered hover>
            <thead>
              <th>Ingredient</th>
              <th>Expiration Date</th>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Container>
        <Container>
          <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
        </Container>
      </Stack>
    </div>
  )
}

export default IngredientPage

