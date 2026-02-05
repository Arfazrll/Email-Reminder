
<div align="center">

# Email-Reminder
**An automated healthcare adherence system for scheduled medication reminders.**

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=nodemailer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

## Project Overview

Email-Reminder is a specialized automation service designed to deliver personalized medicine notifications via email. The system is architected as a Serverless Function on Vercel and utilizes automated Cron Jobs to ensure consistent delivery at specific intervals throughout the day.

The application dynamically adjusts the email content based on the time of day, providing morning, afternoon, and evening reminders with custom messages tailored to the recipient.

## Technical Architecture

The application is built using a modern JavaScript stack optimized for serverless deployment:

* **Runtime Environment**: Node.js utilizing ES Modules (ESM).
* **Email Delivery**: SMTP integration via the **Nodemailer** library.
* **Hosting Infrastructure**: Vercel Serverless Functions.
* **Automation Engine**: Vercel Cron Jobs for scheduled task execution.
* **Time Management**: Integrated timezone handling using the `Intl` API to synchronize with `Asia/Jakarta` local time.

## Core Functionalities

### 1. Intelligent Scheduling
The system is configured via `vercel.json` to execute at specific UTC intervals (01:00, 09:00, and 13:00 UTC) which correspond to key local times in Indonesia.

### 2. Contextual Content Generation
The application evaluates the current hour upon execution to determine the appropriate message context:
* **Morning Session (08:00 AM WIB)**: Sends a "Good Morning" greeting and a reminder for morning medication.
* **Afternoon Session (04:00 PM WIB)**: Sends a "Good Afternoon" greeting and a reminder for afternoon medication.
* **Evening Session (08:00 PM WIB)**: Sends a "Good Evening" greeting and a final reminder before rest.

### 3. Professional Email Templates
Reminders are dispatched using a clean, responsive HTML template. The design utilizes system fonts and a minimalist layout to ensure readability across all devices and email clients.

## Delivery Schedule

The automation follows this predefined schedule based on Western Indonesia Time (WIB):

| Session | Time (WIB) | Trigger Path | Purpose |
| :--- | :--- | :--- | :--- |
| **Morning** | 08:00 AM | `/api/send-email` | Morning medication notification |
| **Afternoon** | 04:00 PM | `/api/send-email` | Afternoon medication notification |
| **Evening** | 08:00 PM | `/api/send-email` | Night medication notification |

## Installation and Configuration

### 1. Prerequisites
* Node.js environment (v14 or higher).
* Access to an SMTP server (e.g., Gmail App Password, Outlook, or other SMTP providers).

### 2. Environment Variables
Create a `.env` file in the root directory and configure the following parameters (this file is excluded from version control via `.gitignore`):

```env
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_email_address
SMTP_PASS=your_smtp_password

```

### 3. Installation

```bash
# Clone the repository
git clone [https://github.com/arfazrll/Email-Reminder.git](https://github.com/arfazrll/Email-Reminder.git)

# Enter the project directory
cd Email-Reminder

# Install required dependencies
npm install

```

## Deployment

This repository is optimized for deployment on the **Vercel** platform:

1. Connect the repository to a new Vercel project.
2. Define the required **Environment Variables** (SMTP credentials) in the Vercel Dashboard settings.
3. The deployment process will automatically configure the **Cron Jobs** as defined in `vercel.json`.

## License

This project is licensed under the **MIT License**. Refer to the `LICENSE` file for full legal text.

**Developed by S. A. Almazril**

</div>

