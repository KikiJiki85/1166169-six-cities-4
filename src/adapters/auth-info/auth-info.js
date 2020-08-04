const createAuthInfo = (data) => {
  return {
    avatar: data.avatar_url,
    email: data.email,
    id: data.id,
    pro: data.is_pro,
    name: data.name,
  };
};

export default createAuthInfo;
