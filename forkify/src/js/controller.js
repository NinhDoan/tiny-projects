import * as model from './model';
import recipeView from './views/recipeView';


import 'core-js/stable';
import 'regenerator-runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controllRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    controllView.renderSpinner();
    // 1. Loading Recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2. Rendering Recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

controllRecipe()[('hashchange', 'load')].forEach(ev =>
  window.addEventListener(ev, showRecipe)
);
