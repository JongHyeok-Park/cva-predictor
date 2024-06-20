const getHospital = async (lat, lng, size = 10) => {
  const res = await fetch(process.env.REACT_APP_API_URL + `/api/hospital?latitude=${lat}&longitude=${lng}&size=${size}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

export { getHospital };