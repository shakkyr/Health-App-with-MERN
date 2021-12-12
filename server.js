const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route");
const feelingRoutes = require("./routes/feeling.route");
const sleepingRoutes = require("./routes/sleeping.route");
const waterRoutes = require("./routes/water.route");
const workoutRoutes = require("./routes/workout.route");
const userRoutes = require("./routes/user.route");
const doctorRoutes = require("./routes/doctor.route");
// const emergencyRoutes = require('./routes/emergency.route')
const nodemailer = require("nodemailer");
const connectDB = require("./database/db");
require("dotenv").config();

app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/feeling", feelingRoutes);
app.use("/api/sleeping", sleepingRoutes);
app.use("/api/water", waterRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/doctor", doctorRoutes);
// app.use('/api/emergency', emergencyRoutes);

connectDB();

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));
  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.get("/", () => {
  resiszeBY.send("inside sever");
});

// !========================= nodemailer ==================

// app.post("/api/forma",cors(), async (req, res) => {
//     let { text } = req.body
// 	const transport = nodemailer.createTransport({
// 		service: "Gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
// 		}
// 	})
//     await transport.sendMail({
// 		from: process.env.EMAIL,
// 		to: "shakkyr@gmail.com",
// 		subject: "test email",
// 		html: `<div className="email" style="
//         border: 1px solid black;
//         padding: 20px;
//         font-family: sans-serif;
//         line-height: 2;
//         font-size: 20px; 
//         ">
//         <h2>Here is your email!</h2>
//         <p>${text}</p>
    
//         <p>All the best, Darwin</p>
//          </div>
//     `
// 	})
// });


// let mailOptions = {
//   from: data.email,
//   to: "shakkyr@gmail.com",
//   subject: `emergency messaga from ${data.username}`,
//   text: "Health App emergency call",
// };

// transporter.sendMail(mailOptions, (err, data) => {
//   if (err) {
//     console.log("Error Occurs", err);
//   } else {
//     console.log("Email sent ");
//   }
// });

// !========================== nodemailer ===================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`we are on port ${PORT}`);
});
