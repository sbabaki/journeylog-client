# JourneyLog (Frontend)

## Overview

JourneyLog is a place for travellers to map their journeys, document their travels, and inspire other travellers building itineraries for their next journey.  

### Problem Space

As an avid traveler, I’ve explored countless cities, restaurants, and tourist attractions. Over time, I’ve noticed that event-specific memories fade--names of cities, restaurants, or hotels become harder to recall. This is not only a sentimental loss but also makes sharing experiences and recommendations with others more challenging.

Hard-copy travel journals degrade over time, and existing travel journal apps tend to focus more on the daily experiences rather than the places. JourneyLog provides an intuitive and easy-to-use platform for documenting travel footprints with a focus on destinations, so users can refer back for memories or share recommendations for future trips.

### User Profile

Travelers:
- Wanting to log their travel footprint.
- Aiming to record and recall details about the cities they've visited.
- Seeking a reliable tool to document experiences tied to specific places.

### Features

- **Log Creation**: Users can create journey logs with a name and add multiple cities to them.
- **Log List**: Users can view all their journey logs on the homepage.
- **Detailed View**: Selecting a journey log displays the cities with notes, and start and end dates.
- **City Pins on a Map**: A map view displays pins for each city in a journey log.
- **Data Persistence**: All journey logs and city details are saved for future reference.
- **User-Friendly Interface**: A visually appealing and intuitive design guides users through the app.


## Implementation

### Tech Stack (Frontend)

- **React**: Framework for building UI components.
- **Sass (SCSS)**: Styling preprocessor for modular, maintainable styles.
- **React Router**: Client-side routing for seamless navigation.
- **Axios**: HTTP client for API calls.
- **Leaflet.js**: Interactive map functionality.


## Installation and Setup

### Prerequisites:
Ensure you have the following installed:
- Node.js (version 18 or higher)
- npm

### Instructions:

1. Clone the Repository
```
git clone <repository-url>
cd journeylog-client
```

2. Install Dependencies:
```
npm install
```

3. Obtain the Google Places API Key:
   - Go to the Google Cloud Console.
   - Create a new project or use an existing one.
   - Navigate to APIs & Services > Credentials.
   - Create an API key and enable the Places API.
   - Restrict the API key to your application's domain or IP address for security.
<br>

4. Set Up Environmental Variables

- create a .env file:
```
VITE_API_URL=http://localhost:3030
GOOGLE_API_KEY=your-google-api-key
```

5. Run the Development Server
```
npm start
```

6. Access the Application


## Future Implementations
- User Authentication: Implement login and user authentication to allow personalized access to journey logs.
- Attraction, Accommodation, and Restaurant Pins: Add functionality to log specific attractions, restaurants, and hotels under city pins.
- Ratings: Enable users to attach ratings to cities, restaurants, and hotels for more detailed travel insights.
- Interactive Pins: Display additional pin information on hover for an enhanced map experience.
- CRUD Functionality:
  - Delete: Allow users to delete journey logs, cities, or details.
  - Update: Enable users to edit and update cities and details within an existing journey log.