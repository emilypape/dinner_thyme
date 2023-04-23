import { withIronSession } from 'next-iron-session';
const { User, Replies } = require('../../database/models');

async function newReply(req, res) {
  const { user } = req.session.get();
  const userId = user?.user_id;
  if (req.body) {
    const newReplyData = await Replies.create({
      reply_text: req.body.reply_text,
      comment_id: req.body.comment_id,
      user_id: userId,
    });
    res.status(200).json(newReplyData);
    if (!newReplyData) {
      res.status(400).json({ message: 'Your reply did not post' });
    }
  }
}

export default withIronSession(newReply, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
