import './IngredientForm.css'
import { React, useContext } from "react";
import { useState } from "react";
import { IngredientsContext } from "./IngredientsProvider";

const IngredientForm = (props) => {
  const { addIngredient } = useContext(IngredientsContext)
  const [name, setName] = useState(null);
  const [expiration, setExpiration] = useState(null);
  const handleSubmit = (e) => {
      e.preventDefault()
      addIngredient({ name, expiration })
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Ingredient</h2>
        <div>
          <label htmlFor="name">Ingredient Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name of ingredient"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expiration">Expiration Date</label>
          <input
            name="expiration"
            id="expiration"
            type="date"
            placeholder="password"
            required
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </div>
        <button>Add Ingredient</button>
      </form>
    </div>
  );
}

export default IngredientForm
