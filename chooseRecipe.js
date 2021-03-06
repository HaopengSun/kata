const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    let whetherA = false;
    let whetherB = false;
    for (const recipe of recipes){
        for (let i = 0; i < bakeryA.length; i++){
            if (recipe.ingredients[0] === bakeryA[i] || recipe.ingredients[1] === bakeryA[i]){
                whetherA = true;
            }
        }
        for (let i = 0; i < bakeryB.length; i++){
            if (recipe.ingredients[0] === bakeryB[i] || recipe.ingredients[1] === bakeryB[i]){
                whetherB = true;
            }
        }
        if (whetherA && whetherB){
            return recipe.name;
        }
    }
}
  
  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));