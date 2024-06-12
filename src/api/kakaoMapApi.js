const getAddressApi = async (keyword) => {
  const res = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}&analyze_type=similar`, {
    headers: {
      authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`
    }
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  };

  return res.json();
}

export { getAddressApi };