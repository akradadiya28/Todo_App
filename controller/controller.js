let todoStorage = [];

const defaultController = (req, res) => {
    res.render('index.ejs');
}
const todoApp = (req, res) => {

    // console.log(req.body);

    let todoObj = {
        id: todoStorage.length + 1,
        task: req.body.task
    }
    todoStorage = [...todoStorage, todoObj];

    console.log(todoObj);

    console.log("Todo");
    res.redirect('/')
}

module.exports = { defaultController, todoApp };