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
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    //if success is false we pass failure message to error in catch
    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

export default customFetch;
