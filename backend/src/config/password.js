import bcrypt from "bcryptjs";

export const encrypt = async (password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (err) {
    console.log(err);
  }
};

export const comparePassword = async (password, hash) => {
  try {
    const res = await bcrypt.compare(password, hash);
    return res;
  } catch (err) {
    console.log(err);
  }
};


