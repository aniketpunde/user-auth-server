# user-auth-server

## To start your app 

1. you need to replace the placeholder `your_mongodb_atlas_uri_here` in the `index.js` file with the actual URI of your MongoDB Atlas cluster.
    - This URI is necessary for connecting your application to the MongoDB database hosted on Atlas.

2. You can find the URI in your MongoDB Atlas dashboard under the "Connect" tab of your cluster. It typically looks like this:
    - `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

    - Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your actual MongoDB Atlas credentials.

3. Once you've replaced the placeholder with your MongoDB Atlas URI, you can start your app by running:
    - npm start


