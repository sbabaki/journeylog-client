# Project Title
JourneyLog

## Overview

JourneyLog is a place for travellers to map their journeys, document their travels, and inspire other travellers building itineraries for their next journey.  

### Problem Space

As an avid traveler, I’ve explored countless cities, restaurants, and tourist attractions. Over time, I’ve noticed that event-specific memories fade--names of cities, restaurants, or hotels become harder to recall. This is not only a sentimental loss but also makes sharing experiences and recommendations with others more challenging.

Hard-copy travel journals degrade over time, and existing travel journal apps tend to focus more on the daily experiences rather than the places. JourneyLog provides an intuitive and easy-to-use platform for documenting travel footprints with a focus on destinations, so users can refer back for memories or share recommendations for future trips.

### User Profile

Travelers:
- Wanting to log their travel footprint.
- Aiming to record are recall details about the cities they've visited.
- Seeking a reliable tool to document experiences tied to specific places.

### Features

- Log Creation: Users can create journey logs with a name and add multiple cities to them.
- Log List: Users can view all their journey logs on the homepage.
- Detailed View: Selecting a journey log displays the cities with notes, and start and end dates.
- City Pins on a Map: A map view displays pins for each city in a journey log.
- Data Persistence: All journey logs and city details are saved for future reference.
- User-Friendly Interface: A visually appealing and intuitive design guides users through the app.

## Implementation

### Tech Stack

Client-Side
- React
- Sass (SCSS)
- React Router
- Axios
- Leaflet.js

Server-Side
- Node.js
- Express.js
- Local JSON file for data simulation and dynamic data storing

### APIs

- Google Places API

### Sitemap

- Home Page
- New Log Page
- Log Details
- Map Page

### Mockups

#### Home Page
![](./assets/wireframes/homepage.jpg)

#### Map Page
![](./assets/wireframes/journey-map.jpg)

#### Log Page
![](./assets/wireframes/journey-log.jpg)

#### Add New Log Page
![](./assets/wireframes/add-new-log.jpg)

### Data

JourneyLogs (trips)
- one JourneyLog contains one or more cities 

Cities
- Each city belongs to one JourneyLog
- Each city contains coordinate metadata

JourneyMap
- the city coordinates are pulled from the cities of all of the JourneyLogs, and displayed as pins in the Journey Map.

### Endpoints

**GET /your-logs**
- Fetch logs
- Parameters: none
- Response:
```
[
    {
    "id": 1,
    "name": "Europe Trip"
    }
]
```

**GET /your-logs/:id**
- Fetch detailed information about a specific log
- Parameters: id
- Response:
```
{
  "id": "d3b081d6-7529-4f14-bc62-ef67b49cfb8d",
  "name": "Europe Getaway",
  "cities": [
    {
      "id": "4e78e7c7-f6fc-4b85-8cb2-72c06cc1b1b6",
      "city": "Paris, France",
      "coordinates": { "latitude": 48.8566, "longitude": 2.3522 },
      "image": "/images/paris.jpg",
      "startDate": "2024-01-01",
      "endDate": "2024-01-10",
      "note": "Exploring the streets of Paris was magical..."
    },
    ...
  ]
}
```

**GET /journey-map**
- Fetch list of all city coordinates across all journey logs
- Parameters: none
- Response:
```
[
  {
    "city": "Paris, France",
    "coordinates": { "latitude": 48.8566, "longitude": 2.3522 }
  },
  {
    "city": "Tokyo, Japan",
    "coordinates": { "latitude": 35.6895, "longitude": 139.6917 }
  },
  ...
]
```

**POST /your-logs**
- create new log with unique id, name and array of cities
- Request:
```
{
  "name": "New Journey Name",
  "cities": [
    {
      "city": "Lake Atitlan, Guatemala",
      "coordinates": { "longitude": -91.1501, "latitude": 14.6872 },
      "startDate": "2024-03-01",
      "endDate": "2024-03-05",
      "note": "A beautiful serene lake surrounded by volcanoes."
    },
    ...
  ]
}
```

- Response:
```
{
  "id": "unique-log-id",
  "name": "New Journey Name",
  "cities": [
    {
      "id": "unique-city-id",
      "city": "Lake Atitlan, Guatemala",
      "coordinates": { "longitude": -91.1501, "latitude": 14.6872 },
      "image": "/images/atitlan.jpg",
      "startDate": "2024-03-01",
      "endDate": "2024-03-05",
      "note": "A beautiful serene lake surrounded by volcanoes."
    },
    ...
  ]
}
```

## Roadmap

Create Client
Create server
Connect client and server
Build framework and styling for navigation, footer
Build and style homepage front end
Build and style log log page front end
Build and style add new log page front end
Add endpoints
Implement dynamic data
Integrate Google Places API 
Inegrate Leaflet.js Library
Final polishing


## Future Implementations
- User Authentication: Implement login and user authentication to allow personalized access to journey logs.
- Attraction, Accomodation, and Restaurant Pins: Add functionality to log specific attractions, restaurants, and hotels under city pins.
- Ratings: Enable users to attach ratings to cities, restaurants, and hotels for more detailed travel insights.
- Interactive Pins: Display additional pin information on hover for an enhanced map experience.
- CRUD Functionality:
  - Delete: Allow users to delete journey logs, cities, or details.
  - Update: Enable users to edit and update cities and details within an existing journey log.


## Installation and Setup

Prerequisites:
Ensure you have the following installed:
- Node.js (version 18 or higher)
- npm
- A code editor (e.g., VS Code)

Instructions:
1. Clone the Repository
2. Install Client Dependencies
3. Install Server Dependencies
4. Set Up Environmental Variables
5. Start the Server
6. Start the Client
7. Access the Application

.env Example:
