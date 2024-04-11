const MealModel = require("./MealModel");

module.exports.getMeal = async (req, res) => {
    const myMeals = await MealModel.find();
    res.send(myMeals);
};

module.exports.saveMeals = async (req, res) => {
    const { title } = req.body;
    MealModel.create({ title })
        .then((data) => {
            console.log(`Meal added`)
            res.send(data);
    })
    .catch((err) => {
        res.status(500).send("Error")
    })
};

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.params;
    MealModel.findByIdAndDelete({ _id })
        .then(() => res.send(`Meal was deleted`))
        .catch((err) => res.status(404).send(`Can't find your meal`));
};

module.exports.editMeal = async (req, res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, { title }).then(() =>
        res.send(`Edited a meal`)
    );
};
