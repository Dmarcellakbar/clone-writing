import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, token, trackingId } = req.body;
    const newUser = {
      firstname,
      lastname,
      email,
      token,
      trackingId,
    };

    const users = [];
    users.push(newUser);
    res.status(201).json(newUser);

    // const token = uuidv4();
    res.status(200).json({ success: true, message: '' });
    // res.status(200).json({ token });
  } else {
    res.status(405).end();
  }
}
