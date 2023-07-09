import Elfbar from "./components/Elfbar";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { IngredientsContext } from "./components/IngredientsProvider";
import IngredientForm from "./components/IngredientForm";
function IngredientPage() {
  const { ingredients } = useContext(IngredientsContext)
  const tableRows = ingredients.map((ingredient, i) => {
    const expiry = new Date(ingredient.expiration)
    return (
        <tr key={i}>
          <td>{ingredient.name}</td>
          <td>{expiry.toDateString()}</td>
        </tr>
    )
  })

  return (
    <div className="profile">
      <Elfbar />
      <h1>Ingredients Dashboard</h1>
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
          <IngredientForm />
        </Container>
      </Stack>
    </div>
  )
}

export default IngredientPage

