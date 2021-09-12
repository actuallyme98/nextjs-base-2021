This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Development

1. Install Docker, Docker compose
2. Create `.env.development` file follow `.env.sample`

```
yarn dev
```

## Production

1. Install Docker, Docker compose
2. Create `.env.production` file follow `.env.sample`

```
docker-compose -f docker-compose.prod.yaml --env-file=.env.production up --build -d
```
