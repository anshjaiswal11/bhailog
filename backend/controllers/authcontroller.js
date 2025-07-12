import User from '../modules/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const lowerUsername = username.toLowerCase();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: lowerUsername,
      name,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true, // <-- Added success property
      message: "User created successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        name: savedUser.name,
        email: savedUser.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    user.lastLogin = new Date(); // Date object includes both date and time
    await user.save();

    const JWT_SECRET = 'ansh123'; // Store in env in production
    const token = jwt.sign({ email: user.email, _id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { signup, login };
