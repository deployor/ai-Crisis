interface TokenBucket {
    tokens: number;
    lastRefill: number;
}

class RateLimiter {
    private bucket: TokenBucket;
    private readonly maxTokens: number;
    private readonly refillTime: number; // in ms

    constructor() {
        this.maxTokens = 10; // well tokens
        this.refillTime = 30 * 1000; // 30 s
        this.bucket = {
            tokens: this.maxTokens,
            lastRefill: Date.now()
        };
    }

    checkLimit(): boolean {
        this.refill();

        if (this.bucket.tokens > 0) {
            this.bucket.tokens--;
            return true;
        }

        return false;
    }

    private refill() {
        const now = Date.now();
        const timePassed = now - this.bucket.lastRefill;

        this.bucket.tokens = Math.min(
            this.maxTokens,
            this.bucket.tokens + Math.floor(timePassed / this.refillTime) * this.maxTokens
        );

        this.bucket.lastRefill = now;
    }
}

export const globalRateLimiter = new RateLimiter();