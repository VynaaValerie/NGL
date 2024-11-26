async function sendToTelegram(message) {
  const config = {
    token: "6513717790:AAGljHPM5zxwiwJe2hP9UHkqowRVZTpRP2A",
    chatId: "1618920755",
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