const express = require("express");
// const path = require("path");

const app = express();

app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about.pug", {
    title: "About",
  });
  // navLinks.pilihan.forEach(links => {
  //   links.classList.remove('aktif');
  //   document.querySelector('header nav a[href*=' + id + ']').classList.add('aktif');
});

app.get("/contact", (req, res) => {
  res.render("contact.pug", {
    title: "Contact",
  });
});

app.get("/porto", (req, res) => {
  res.render("porto.pug", {
    title: "Portofolio",
  });
});

app.listen(1440, () => {
  console.log("Running on 1440");
});
