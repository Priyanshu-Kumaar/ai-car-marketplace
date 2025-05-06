# 🚗 VehiQL – AI-Powered Car Marketplace

**VehiQL** is a modern, full-stack car marketplace platform that leverages AI to extract car details from images, streamlines the car buying journey with smart filtering, and integrates dealership-level features like real-time test drive booking.

🔗 **Live Demo**: [Click here to explore VehiQL](https://ai-car-marketplace-omega.vercel.app/)

---

## ✨ Features

- 🔍 **Smart Car Filtering** – Filter by model, price range, fuel type, car type, and more.
- 🤖 **AI-Powered Car Detail Extraction** – Uses Google Gemini API to auto-fill car specifications from uploaded images.
- 📝 **Detailed Car Pages** – View full specifications, high-quality image gallery, and interactive EMI calculator.
- 🚗 **Test Drive Booking** – Real-time slot availability with dealerships.
- 📊 **Admin Dashboard** – View analytics, manage car inventory, and update listings.
- 🔐 **Bot Protection & Auth** – Clerk for authentication and Arcjet for security.

---

## 🛠️ Tech Stack

| Frontend      | Backend      | AI & Infra             | Security       |
| ------------- | ------------ | ---------------------- | -------------- |
| Next.js       | Supabase     | Gemini API (Google AI) | Arcjet (bot detection) |
| TailwindCSS   |              |                        | Clerk (Auth)   |
| ShadCN UI     |              |                        | Vercel (Deploy) |

---

## 📷 Screenshots
![Screenshot (26)](https://github.com/user-attachments/assets/cf77144c-bb23-4fcc-96a9-ea15148135e8)

![Screenshot (28)](https://github.com/user-attachments/assets/4045ade8-6ea2-47d5-b9b4-e7482fc41a0e)

![Screenshot (24)](https://github.com/user-attachments/assets/0bd2ad55-1436-455d-b6ef-06cfa053aff3)

![Screenshot (47)](https://github.com/user-attachments/assets/ab96361b-4fc0-4e14-a9dd-ce464a4a0c8e)

![Screenshot (48)](https://github.com/user-attachments/assets/36034726-1273-4ab1-9f9f-82076da4ad28)


---

## 🚀 Getting Started (Development Setup)

```bash
# Clone the repository
git clone https://github.com/Priyanshu-Kumaar/ai-car-marketplace.git
cd vehiql
cd my-app

# Install dependencies
npm install

# Set up environment variables
Create an .env file in yout project and insert all the keys related to Clerk,Supabase,Arcjet etc.
# Add your Supabase, Clerk, Gemini API keys, etc.

# Run the development server
npm run dev

Visit http://localhost:3000 to see the app in action.
