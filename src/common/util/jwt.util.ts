const JWT_SECRET = process.env.JWT_SECRET;
import * as jose from 'jose';

class JwtUtil {
    async createAuthToken(payload: object): Promise<string> {
        if (!JWT_SECRET) throw new Error('jwt secret is empty, cannot generate auth token');

        const secret = new TextEncoder().encode(JWT_SECRET);
        const alg = 'HS256'

        return new jose.SignJWT({ payload })
              .setProtectedHeader({ alg })
              .setIssuedAt()
              .setExpirationTime('2h')
              .sign(secret);
    }
    
    async isAuthTokenValid(token: string): Promise<boolean> {
        if (!JWT_SECRET) throw new Error('jwt secret is empty, cannot generate auth token');
        const secret = new TextEncoder().encode(JWT_SECRET);

        try {
            const result = await jose.jwtVerify(token, secret);
            // TODO: transform into real logging
            console.log('JWT verification result', { result });
            return !!result.payload
        } catch(error) {
            // TODO: transform into real logging
            console.log('JWT verification error', { error });
            return false;
        }
    }
}

const instance: JwtUtil = new JwtUtil();
export default instance;
