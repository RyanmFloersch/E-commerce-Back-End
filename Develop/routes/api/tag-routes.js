const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll();

  res.send(tags);

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag_id = req.params.id;
  const tag = await Tag.findByPk(tag_id);
  res.send(tag);

});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = req.body;
  const newTag = await Tag.create(tagData);

  res.send(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  const tag_id = req.params.id;
  const tag = await Tag.findByPk(tag_id);
  const tagData= req.body;
  
  tag.update({
    tag_name: tagData.tag_name 
  });




  res.send("Updated Tag ");
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag_id = req.params.id;
  const tag = await Tag.findByPk(tag_id);
  await tag.destroy();

  res.send("Tag Successfuly deleted");
});

module.exports = router;
