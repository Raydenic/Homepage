import express from "express"
// import ejs from "ejs"
import nodemail from "nodemailer"
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import newsRoutes from "./routes/news.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use("/news",newsRoutes);
=======
// app.use("images/RayDenic-favicon.ico",express.static('public/RayDenic-favicon.ico'))
>>>>>>> main

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})


app.get("/services",(req,res)=>{
    res.render("services.ejs");
})


app.get("/contact", (req, res) => {
    res.render("contact.ejs");
}).post("/contact", async (req, res) => {
    const { name, email, company, message } = req.body;

    const transporter = nodemail.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: email,
        to: 'raydenic50@gmail.com',
        subject: `New Contact from ${name}`,
        html: `
    <h2>📩 New Message from Contact Form</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
    <p><strong>Message:</strong></p>
    <blockquote style="background:#f9f9f9;padding:10px;border-left:4px solid #ccc;">
      ${message.replace(/\n/g, "<br>")}
    </blockquote>
    <hr>
    <p style="font-size:0.9em;color:#666;">This message was submitted via your website contact form.</p>
  `
    }

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})
