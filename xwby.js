async function sendToTelegram(message) {
  const config = {
    token: "_",
    chatId: "_",
  };

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: message,
    }),
  });

  return response.ok;
}
