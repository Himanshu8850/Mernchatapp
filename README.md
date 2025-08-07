# MERNChatApp

A real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js) featuring group and private messaging, typing indicators, notifications, and modern UI.

---

## 🚀 Features

- **User Authentication** (JWT, secure routes)
- **1-on-1 & Group Chats**
- **Real-time Messaging** (Socket.io)
- **Typing Indicators**
- **Message Notifications**
- **Group Chat Management** (create, rename, add/remove users, delete group)
- **Responsive UI** (Chakra UI)
- **Profile Modal & Group Info**
- **Scroll-to-bottom, fixed input bar**
- **Admin-only group deletion**

---

## 🖥️ Demo
https://mernchatapp-1-9rfm.onrender.com/
---

## 🛠️ Tech Stack

- **Frontend:** React, Chakra UI, Axios, Socket.io-client
- **Backend:** Node.js, Express, Socket.io, JWT
- **Database:** MongoDB (Mongoose)
- **Other:** dotenv, bcryptjs, cors

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Himanshu8850/Mernchatapp.git
cd Mernchatapp
```

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Set up environment variables

- Create a `.env` file in the `backend/` directory.
- Add the following (adjust as needed):

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the servers

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd ../frontend
npm start
```

- The backend runs on `http://localhost:5000`
- The frontend runs on `http://localhost:3000`

---

## 📝 Usage

- Register or login as a user.
- Search for users and start a chat.
- Create group chats, add/remove users, rename or delete groups (admin only).
- Send and receive messages in real-time.
- See typing indicators and notifications for new messages.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

## 🙋‍♂️ Author

- **Himanshu8850**  
  [GitHub](https://github.com/Himanshu8850)
