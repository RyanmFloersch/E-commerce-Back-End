const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const category = await Category.findAll();
  res.send(category);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category_id = req.params.id;

  const category = await Category.findByPk(category_id);
  console.log
  res.send(category);

});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = req.body;
  const newCategory = await Category.create(categoryData);

  res.send(newCategory);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category_id = req.params.id;
  const category = await Category.findByPk(category_id);
  const categoryData = req.body;
  console.log(category);

  category.update({
    category_name: categoryData.category_name
  });



  res.send("Updated category ");

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category_id = req.params.id;
  const category = await Category.findByPk(category_id);
  await category.destroy();

  res.send("Category Successfuly deleted");
});

module.exports = router;
