const makeHomePage = function (req, res) {
    res.render('index',{title:"Главная"})
};
const reg =  function (req, res) {
  res.render('registration',{title:"Форма регистрации"})
};
const places = function (req,res) {
    res.render('places', {title:"Здесь нужно побывать!"})
};
const blog = function (req,res) {
    res.render('blog', {title:"Читать тоже интересно!"})
};


module.exports = {
  makeHomePage,
    reg,
    places,
    blog
};