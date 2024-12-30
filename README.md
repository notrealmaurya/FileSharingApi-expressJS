# File Sharing API (Express.js)

>This is an Express.js API for file sharing. It provides endpoints to upload files, generate shareable links, and manage file expiration.

## Features
* Upload files of various types.
* Generate shareable links for uploaded files.
* Set expiration time for links.
* Secure access to files with token-based authentication.

## Installation
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/notrealmaurya/FileSharingApi-expressJS.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Endpoints
* `POST /upload`: Upload a file.
* `GET /file/:filename`: Download a file.
* `GET /link/:linkId`: Access a file via a shareable link.
* `POST /generate-link`: Generate a shareable link for a file.
* `DELETE /link/:linkId`: Delete a shareable link.

## Usage
1. **Upload Files**: Use the `/upload` endpoint to upload files.
2. **Generate Links**: Use the `/generate-link` endpoint to generate shareable links for uploaded files.
3. **Share Links**: Share the generated links with others.
4. **Access Files**: Access files using the generated links or directly through the `/file/:filename` endpoint.
5. **Set Expiry**: Set expiration time for links to control access to files.

## Authentication
Token-based authentication is implemented for secure access to API endpoints. Include the token in the request headers as follows:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Contributing
Contributions are welcome! If you encounter any bugs, have suggestions for improvements, or want to contribute new features, please open an issue or submit a pull request.
