const customFetch = async (url, { body, ...customConfig }) => {
  const config = {
    ...customConfig,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log("error", error);
    return {
      message: error.message,
      success: false,
    };
  }
};

export default customFetch;
