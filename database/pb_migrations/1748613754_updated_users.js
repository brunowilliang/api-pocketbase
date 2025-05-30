/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1188605132",
    "maxSelect": 1,
    "name": "rule",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "test 1",
      "test 2",
      "test 3"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1188605132",
    "maxSelect": 1,
    "name": "rules",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "test 1",
      "test 2",
      "test 3"
    ]
  }))

  return app.save(collection)
})
