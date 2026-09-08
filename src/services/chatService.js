const API_URL = import.meta.env.VITE_API_URL;


/**
 * Normal Chat
 */
export const sendChatMessage = async (
  message,
  history = []
) => {
  const response = await fetch(
    `${API_URL}/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
        history,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Unable to connect with AI assistant"
    );
  }

  return data;
};


/**
 * Streaming Chat
 */
export const streamChatMessage = async (
  message,
  history = [],
  onChunk,
  onComplete,
  onError
) => {
  try {
    const response = await fetch(
      `${API_URL}/chat/stream`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
          history,
        }),
      }
    );


    if (!response.ok) {
      const data =
        await response.json().catch(
          () => null
        );

      throw new Error(
        data?.message ||
          "Unable to connect with AI assistant"
      );
    }


    if (!response.body) {
      throw new Error(
        "Streaming is not supported by this browser"
      );
    }


    const reader =
      response.body.getReader();

    const decoder =
      new TextDecoder("utf-8");

    let buffer = "";


    while (true) {
      const {
        value,
        done,
      } = await reader.read();

      if (done) {
        break;
      }


      buffer += decoder.decode(value, {
        stream: true,
      });


      const events =
        buffer.split("\n\n");

      buffer =
        events.pop() || "";


      for (const event of events) {
        const lines =
          event.split("\n");


        for (const line of lines) {
          if (!line.startsWith("data:")) {
            continue;
          }


          const data =
            line.slice(5).trim();


          if (!data) {
            continue;
          }


          const parsedData =
            JSON.parse(data);


          if (
            parsedData.type ===
            "chunk"
          ) {
            onChunk?.(
              parsedData.text
            );
          }


          if (
            parsedData.type ===
            "done"
          ) {
            onComplete?.();
            return;
          }


          if (
            parsedData.type ===
            "error"
          ) {
            throw new Error(
              parsedData.message
            );
          }
        }
      }
    }


    onComplete?.();

  } catch (error) {
    console.error(
      "Streaming chat error:",
      error
    );

    onError?.(error);
  }
};