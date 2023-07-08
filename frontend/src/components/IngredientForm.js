import { React } from "react";
import { useState } from "react";

const IngredientForm = () => {
  const [name, setName] = useState(null);
  const [expiration, setExpiration] = useState(null);
  const addIngredient = async (e) => {
      e.preventDefault()
      console.log('pressed button', name, expiration)
  }
    
  return (
    <div>
      <h3>Add ingredient</h3>
      <form onSubmit={addIngredient}>
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
