import jwt from 'jsonwebtoken';
const SECRET_KEY = 'TodoApi';

//Creating middleware for authorization of tokens

const auth = (req, res, next) => {
    let token = req.headers.authorization;
    if (token) {
        token = token.split(" ")[1];
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Invalid or expired token" });
            }
            req.userId = user.id;
            next();
        });
    } else {
        res.status(401).json({ message: "Authorization token is required" });
    }
};

export default auth;
