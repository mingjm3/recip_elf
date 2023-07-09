import { React } from "react";
import { NavLink } from "react-router-dom";
import "./practice.css";
import Elfbar from "./components/Elfbar";

function Practice() {
  return (
    <div>
      <Elfbar />
      <h1>Stella's Reciepes</h1>
      <h2>Peanut and Dairy Free</h2>
      <div id="gridDiv">
        <div className="title">
          <h3>Breakfast</h3>
        </div>
        <span className="recipes">
          <a
            className="a"
            href="https://www.allrecipes.com/recipe/22180/waffles-i/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1504387432042-8aca549e4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <p>waffles</p>
          </a>

          <a
            className="a"
            href="https://feelgoodfoodie.net/recipe/overnight-oats/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <p>OverNight Oats</p>
          </a>
          <a
            className="a"
            href="https://sodelicious.recipes/recipe/omelet-french-toast/"
            target="_blank"
          >
            {" "}
            <img
              className="image"
              src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80"
            />
            <p>Toast</p>
          </a>
          <a
            className="a"
            href="https://www.eatingwell.com/recipe/8029771/avocado-toast-recipe/"
            target="_blank"
          >
            {" "}
            <img
              className="image"
              src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
            <p>Avacado Toast</p>
          </a>
          <a
            className="a"
            href="https://thishealthytable.com/blog/breakfast-fruit-salad/"
            target="_blank"
          >
            {" "}
            <img
              className="image"
              src="https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
            />
            <p>Fruits</p>
          </a>
        </span>
        <div className="title">
          <h3>Entree</h3>
        </div>

        <span className="recipes">
          <a
            className="a"
            href="https://www.bbcgoodfood.com/recipes/quick-chicken-hummus-bowl"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <p>Bowl</p>
          </a>
          <a
            className="a"
            href="https://feelgoodfoodie.net/recipe/shrimp-rice-bowl/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            />
            <p>Shrimp bowl</p>
          </a>
          <a
            className="a"
            href="https://healthynibblesandbits.com/soba-noodles-with-almond-butter-sauce-vegan/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1635685296916-95acaf58471f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            />
            <p>Noodles</p>
          </a>
          <a
            className="a"
            href="https://www.superhealthykids.com/best-veggie-pizza/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <p>Pizza</p>
          </a>
          <a
            className="a"
            href="https://www.landolakes.com/recipe/19999/salmon-fillets-with-orange-basil-butter/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
            <p>Salmon</p>
          </a>
          {/* <img className="image" src="https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" /> */}
        </span>
        <div className="title">
          <h3>Dessert</h3>
        </div>

        <span className="recipes">
          <a
            className="a"
            href="https://bromabakery.com/healthy-gluten-free-chocolate-chip-cookies/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <p>Cookie</p>
          </a>
          <a
            className="a"
            href="https://sunkissedkitchen.com/gluten-free-apple-pie/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <p>Apple Pie</p>
          </a>
          <a
            className="a"
            href="https://www.savvysavingcouple.net/fruit-salad-trifle/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1563208276-13fee6108415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
            <p>Fruits</p>
          </a>
          <a
            className="a"
            href="https://www.godairyfree.org/recipes/dairy-free-desserts/black-raspberry-ice-cream-vegan-gluten-free-nut-free"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <p>Popsicals</p>
          </a>
          <a
            className="a"
            href="https://fitfoodiefinds.com/100-healthy-smoothie-recipes/"
            target="_blank"
          >
            <img
              className="image"
              src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
            />
            <p>Smoothie</p>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Practice;
