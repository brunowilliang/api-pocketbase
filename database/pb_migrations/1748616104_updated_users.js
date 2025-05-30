/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select3493198471",
    "maxSelect": 1,
    "name": "options",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "option 1",
      "option 2",
      "option 3"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select3493198471")

  return app.save(collection)
})
