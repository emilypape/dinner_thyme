import Nav from '../../components/nav';
import newRecipe from '../../components/newRecipe';

function newRecipes() {
  return (
    <div>
      <Nav />
      <newRecipe />
      <div>This is our new recipe page for our logged in user</div>
    </div>
  );
}

export default newRecipes;
