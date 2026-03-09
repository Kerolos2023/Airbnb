# Airbnb Clone – Next.js

A modern **Airbnb-style booking interface** built using **Next.js**, **React**, and **Tailwind CSS**.
Users can search for stays by location, select a date range, and choose the number of guests.

## Live Demo

Deployed on Vercel:

https://airbnb-d5z8-q0k3u5jgg-kerolos2023s-projects.vercel.app

## Features

* Location search
* Date range selection
* Guest number selection
* Search parameters passed through URL
* Responsive UI
* Clean component structure
* Modern styling with Tailwind CSS

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Icons
* react-date-range

## Project Structure

```
app
 ├── page.tsx
 ├── search
 │    └── page.tsx
components
 ├── Searchbar.tsx
public
styles
```

## Getting Started

Clone the repository:

```
git clone https://github.com/Kerolos2023/Airbnb.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open the project:

```
http://localhost:3000
```

## Search Example

The search bar sends parameters through the URL:

```
/search?location=London&startDate=2026-03-10&endDate=2026-03-15&guests=2
```

These values are read in the **Search page** and used to display results.

## Future Improvements

* Property cards with real data
* Map integration
* Booking system
* Authentication
* API integration for listings

## Author

Kerolos Saleh
Frontend Developer – React / Next.js
