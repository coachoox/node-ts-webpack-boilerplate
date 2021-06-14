import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use("/assets", express.static("assets"));
app.use("/public", express.static("public"));

app.get("/", (request, response) => response.render("base"));

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});
