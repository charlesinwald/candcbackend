# Code And Coffee Social Media Backend
### **Prerequisites**

- Node.js/NPM

### **Setup**
1. Install backend dependencies with `npm install` in the root directory of the project.
    - _(Note) If on Windows, rename (Windows)package.json to package.json for compatability, before running npm install._
2. `cd client` to enter the frontend directory, and run `npm install` to install the frontend dependencies
3. `cd ..` to return to the root directory of the project
4. `npm run dev` to start the project.  This should run both the frontend and backend concurrently, and open the browser to localhost:3000 to start browsing

#### **Architecture**

Node.js Express backend using MongoDB database.(MERN stack)
- `config/`
    - `db.js` - connects to MongoDB using `default.json`
    - `default.json` - secret credentials to MongoDB.  Do not post publicly or commit to repository/push to Github etc.
- `middleware/`  - handling of JSON Web Token
- `models` - Define the structure of entries in the database    
    - `Post`
    - `User`
- `routes/api` - Backend Routes, correspond to the actions on the front end
    - `post.js` - Photos are initially stored in `uploads/` before being immediately sent to Cloudinary for storage.  Photos are stored as URLs to Cloudinary.
    - `auth.js`
    - `users.js`
- `uploads` - folder where photos are stored before being uploaded to Cloudinary.  This folder must exist, even if initially empty,
so that photos can be stored there.
- `.env` - contains API key for Cloudinary as environment variable.  Do not post publicly or commit to repository.  Downloading this from a browser may rename this to env without a period in front, 
in which case it must be renamed to .env.    
