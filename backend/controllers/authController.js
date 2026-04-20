export const getAuthStatus = (req, res) => {
  res.json({
    message: "Auth route çalışıyor.",
  });
};

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "Kayıt başarılı (test).",
    user: {
      name,
      email,
    },
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Giriş başarılı (test).",
    user: {
      email,
    },
    token: "test-token-123",
  });
};