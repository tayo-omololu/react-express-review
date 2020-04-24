var todos = ['buy soap', 'do dishes', 'make bed', 'call mom']
var controller = {
    get: (req, res) => {
        res.status(200).send(todos)
    },

    post: (req, res) => {
        console.log(req.body)
        var todo = req.body.todo;
        todos.push(todo);
        res.status(201).send(`Successfully posted ${todo}`)
    },

    delete: (req, res) => {
        console.log(req.params)
        var index = req.params.index;
        var deletedItem = todos.splice(index, 1);
        res.status(202).send(`Successfully deleted ${deletedItem}`)

    },
}

module.exports = controller;