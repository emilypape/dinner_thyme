const { User, Replies } = require('../../../database/models');

async function commentReplies(req, res) {
  let idString = req.url.split('/').pop();
  let commentId = parseInt(idString);

  if (commentId) {
    const replyData = await Replies.findOne({
      where: {
        comment_id: commentId,
      },
      include: {
        model: User,
        required: true,
        attributes: ['id', 'username', 'profile_picture'],
      },
    });
    res.status(200).json(replyData);
    if (!replyData) {
      res.status(400).json({ message: 'This comment doesnt have any replies' });
    }
  }
}

export default commentReplies;
