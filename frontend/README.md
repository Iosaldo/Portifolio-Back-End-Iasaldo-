# React-Portifolio-Back-End(Iyosaldo)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

These instructions show how to build and run this Next.js app using Docker on Windows (PowerShell). The included `Dockerfile` uses Node 20 (LTS) in a multi-stage build. If you need a different Node version, update the `FROM` lines in the `Dockerfile`.

Build the Docker image (run in project root):

```powershell
docker build -t react-portfolio-backend:latest .
```

Run the container (map port 3000):

```powershell
docker run -d -p 3000:3000 --name rp-backend react-portfolio-backend:latest
```

Follow container logs:

```powershell
docker logs -f rp-backend
```

Stop and remove the container:

```powershell
docker stop rp-backend ; docker rm rp-backend
```

Notes

The Docker image runs `npm start` in production mode. Ensure your `package.json` includes scripts similar to:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

- If your project uses a custom start command or a server adapter, adjust the `CMD` in the `Dockerfile` accordingly.
- The Dockerfile uses `npm ci` — if you use Yarn/PNPM adapt the Dockerfile commands or let me update it for you.
- The `Dockerfile` targets Node 20 to avoid compatibility issues with tools that don't support Node 22.
