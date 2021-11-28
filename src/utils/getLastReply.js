export const getLastReply = (message) => {
  let lastReply;
  if (message.replies.length === 0) {
    lastReply = message;
  } else {
    lastReply =
      message.replies.data.children[message.replies.data.children.length - 1]
        .data;
  }
  return lastReply;
};
