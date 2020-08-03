module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "HHJ6GHGH5G6HG53H6GH45G6HG5436HG34HGH33LJGJH3FD6GD57FG23HJHJH5HG455KJKJ34KB2ND2FDSSD3S4F6H67HH54G",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:3000"
};