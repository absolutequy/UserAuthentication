var courses= [
    {
        title: "Raspberry cake",
        cost: 50
    },
    {
        title: "Artchoke",
        cost: 20
    },
    {
        title: "Burger",
        cost: 100
    }

]

module.exports = {
    index: (req, res)=>{
        res.render("index")
    }
}