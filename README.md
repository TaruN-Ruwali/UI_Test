# Login & Dashboard Web Application

A clean, responsive multi-page web application featuring strict authentication and an interactive admin dashboard.

## 🔑 Authorized Credentials

Only the following credentials are permitted to access the dashboard. All other combinations will be denied:

| Field | Value |
| --- | --- |
| **Email / ID** | `abc@gmail.com` |
| **Password** | `Admin@123` |

## 🚀 How to Run

1. Open [**`home.html`**](./home.html) in your web browser.
2. Enter the authorized credentials (`abc@gmail.com` / `Admin@123`).
3. Upon successful sign-in, you will be redirected to [**`dashboard.html`**](./dashboard.html).
4. Clicking **Sign Out** on the dashboard terminates the session and returns you to `home.html`.

## 📁 File Structure

- [**`home.html`**](./home.html) - The login page with email & password fields, password toggle, and error states.
- [**`home.js`**](./home.js) - Validates credentials strictly and redirects to `dashboard.html`.
- [**`dashboard.html`**](./dashboard.html) - The protected admin dashboard page with stats, activities, and logout.
- [**`dashboard.js`**](./dashboard.js) - Manages dashboard session details and logout handling.
- [**`style.css`**](./style.css) - Shared modern dark-theme styles for both pages.
- [**`index.html`**](./index.html) - Entry redirect to `home.html`.
