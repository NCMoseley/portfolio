<h1 align="center">Nathan Moseley</h1>

<h4 align="center">An introduction site for a full stack engineer</h4>

<h3 align="center"><img width="700" alt="demo" src="XX.png" /></h3>

---

## Getting Started

To run this project locally, follow the steps below:

### 1. Fork and Clone the Repository

- Fork the repository to your GitHub account.
- Clone the forked repository to your local machine:

  ```bash
  git clone https://github.com/ncmoseley/portfolio.git
  ```

  ```bash
  cd portfolio
  ```

### 2. Install Dependencies

- Install the necessary dependencies using `pnpm`:

  ```bash
  pnpm install
  ```

### 3. Set Up Environment Variables

- Create a `.env` file in the root directory.

- You only need two environment variables (which will be used for nodemailer):

  - `MY_EMAIL`
  - `APP_PASSWORD`

- This project is using `gmail` for the nodemailer transport service, so you'll want to create an app password [here](https://myaccount.google.com/apppasswords). This allows your application (this portfolio) to send emails using your Gmail account.

### 5. Run the Development Server

- Start the development server:

  ```bash
  pnpm dev
  ```

- Your application should now be running on `http://localhost:3000`.

### A note on deployment

Since our `/api/email` endpoint requires a server to execute the nodemailer functionality, you'll want to deploy your project through a service that supports serverless functions. Personally, I used [Vercel](https://vercel.com/).

### Interesting Features

- Animated Tooltip

  - This was a fun project to implement. I used framer motion to create a smooth and interactive tooltip that rotates and scales when you hover over it.
  - It uses the `mouseX` and `mouseY` properties to position the tooltip dynamically based on the user's cursor position.
  - I used the Microlink API to pull a snapshot of the website displayed in the link preview component.

- Framer Motion

  - I used framer-motion for the animations on the site. The `motion` component allows for easy animation of components and elements on the page, for example the fancy wobble card on the home page. I didn't code this from scratch but I used an example. However, I can easily modify the example to fit my needs.

- Responsive Design

  - The design is fully responsive. It scales down to mobile devices and scales up to large screens.

## Deep Thanks to

- [yoyocharlie](https://github.com/yoyocharlie/nextMotion) for the design.
