import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
try {
    const { success } = await ratelimit.limit("my-limit-key") //questa si sostituisce con l'id dell'utente che si autentica
    
    if (!success) {
        res.status(429).json({
            success: 'false',
            message : 'Too many Requests, try again later'
        })
    }

    next()
} catch (error) {
    if (!success) {
        res.status(500).json({
            success: 'false',
            message: 'Rate limit error',
            error: error
        })
    }
    next(error)
}
}
export default rateLimiter