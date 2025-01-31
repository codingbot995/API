# Public API

## Overview
This is a simple public API that returns:
- Your registered email.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of this project's repository.

## API Endpoint
**GET** `/`

### **Response Format**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
