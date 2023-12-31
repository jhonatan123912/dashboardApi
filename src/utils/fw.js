const NETWORK_ERROR = "network error";
const options = {
  method : "GET",
  headers : {
    accept: "application/json",
    Authorization : `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
};

export const fw = async({url, endpoint}) => {
  let resRaw;

  try {
    resRaw = await fetch(`${url}${endpoint}`, options);
    if (resRaw.ok) {
      return await resRaw.json();
    }
    if (resRaw.status === 501) {
      return {
        data: null,
        unAuthorized: true,
        message: "Internal Server Error"
      };
    }

    // const resTxt = await resRaw.text();
    // const errObj = JSON.parse(resTxt);

    // if (errObj) {
    //   return {
    //     data : null,
    //     unAuthorized : false,
    //     message: errObj.message,
    //   };
    // }

  } catch (error) {
    console.error(error);
    return{
      data: null,
      unAuthorized: false,
      message: NETWORK_ERROR,
    };
  };
};
