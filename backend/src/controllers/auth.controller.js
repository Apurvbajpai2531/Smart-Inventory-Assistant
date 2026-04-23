const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const DEMO_USER = {
  id: 1,
  username: 'admin',
  // password = admin123
  passwordHash: bcrypt.hashSync('admin123', 10)
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username !== DEMO_USER.username) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = bcrypt.compareSync(password, DEMO_USER.passwordHash);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        id: DEMO_USER.id,
        username: DEMO_USER.username
      },
      process.env.JWT_SECRET || 'supersecretkey',
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: DEMO_USER.id,
        username: DEMO_USER.username
      }
    });
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};
