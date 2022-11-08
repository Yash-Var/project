const  JWT_SECRET  =process.env.JWT_SECRET;
const jwt =require('jsonwebtoken');

class JwtService {
    static sign(payload, expiry = '1y', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports=JwtService;