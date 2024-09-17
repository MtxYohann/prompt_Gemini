This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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


# intro to fine-tuning

Le fine-tuning permet d'inculquer des informations à notre ia.
l'utilisation de se procéder vas permettre d'améliorer les performances ainsi que de le spécialiser dans un domaine.
lui donner plusieurs exemples avec des questions/réponses 

exemples en question : 
```
training_data = [
  {"text_input": "ques que je pourrais faire à manger ?", "output": "Tacos"},
  {"text_input": "que faire ce soir ?", "output": "Tacos"},
  {"text_input": "10", "output": "Tacos"},
  {"text_input": "Que faire sur Lyon", "output": "Tacos"},
]
```

Il y a une limite à respecter lorsque on lui donne des exemples :

- entrée 40 000 caractères MAX
- sortie 5 000 caractères MAX


## Tutoriel fine-tuning