# 📁 FileSphere

A **Web-Based File Manager** that empowers users with seamless file handling—upload, download, view, organize, and share files securely, with built-in media playback and user authentication.

---

## 🚀 Objective

Develop a full-featured, responsive web application for efficient and secure file management. The platform will provide:

- File uploads & downloads  
- Real-time organization into folders  
- Media preview and playback  
- User authentication (JWT & Google OAuth)  
- Secure sharing via email or link  

---

## ⚙️ Tech Stack

### 🌐 Frontend
- **Framework**: React.js (with Vite)
- **UI Libraries**: Tailwind CSS / ShadCN UI
- **File Storage**: Firebase Storage / Cloudinary
- **Authentication**: NextAuth.js / Firebase Auth (JWT & Google OAuth)

### 🔧 Backend
- **Framework**: Node.js + Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Authentication**Integrations: JWT-based & Google OAuth

### ☁️ Deployment & DevOps
- **Frontend Deployment**: Vercel / Netlify
- **Backend Deployment**: Railway / Render / DigitalOcean
- **Database Hosting**: MongoDB Atlas
- **Storage**: Firebase Storage / Cloudinary

---

## 📅 Project Timeline

### Week 1: Design & Setup

#### Day 1: Research & Wireframing
1. Research UI/UX best practices for file managers.
2. Analyze Google Drive, OneDrive, Dropbox.
3. Create low-fidelity wireframes in Figma.

#### Day 2: High-Fidelity Designs & Feedback
4. Convert to high-fidelity UI with design system.
5. Use mobile-first approach.
6. Share designs and gather feedback.

#### Day 3: Project Setup
7. Set up GitHub repository.
8. Plan frontend/backend folder structure.
9. Initialize React, Express, MongoDB projects.
10. Configure environment (Docker optional).

---

### Week 2: Core Features Implementation

#### Day 4: User Authentication
11. Implement JWT-based sign-up/login.
12. Use bcrypt for password hashing.
13. Set up role-based access (Admin, User).
14. Create user dashboard.

#### Day 5: File Upload System
15. Use Multer for file uploads.
16. Store in GridFS / AWS S3.
17. Save metadata in database.

#### Day 6: File Organization
18. Create, rename, move, delete folders.
19. Maintain folder structure in DB.

#### Day 7: File Sharing System
20. Generate secure shareable links.
21. Share via email using Nodemailer.
22. Set file access permissions.

---

### Week 3: Advanced File & Folder Management

#### Day 8: File Viewing & Media Playback
23. Preview images, PDFs, and text files.
24. Integrate HTML5 video/audio player.

#### Day 9: File Download & Optimization
25. Implement secure downloads.
26. Use caching for performance.

#### Day 10: Drag-and-Drop & Bulk Actions
27. Add drag-and-drop file upload.
28. Enable bulk actions (move, delete, rename).

#### Day 11: Folder Sharing & Access Control
29. Share folders with links/email.
30. Set folder-level permissions.

#### Day 12: Expiry & Search Functionality
31. Add expiry for shared links.
32. Implement file/folder search.

#### Day 13: Sorting & UI Enhancements
33. Sort by name, size, type, date.
34. Apply animations and transitions.

#### Day 14: Code Review & Testing
35. Refactor for clean, scalable code.
36. Conduct unit tests.

---

### Week 4: Security, Notifications & Final Touches

#### Day 15: Security Enhancements
37. Add Role-Based Access Control (RBAC).
38. Enhance JWT/OAuth security.

#### Day 16: File Encryption & Audit Logs
39. Encrypt stored files (AES).
40. Create audit logs for file actions.

#### Day 17: Notification System
41. In-app and email notifications for actions.

#### Day 18: UI Customization
42. Add dark mode & themes.
43. Ensure full mobile/desktop responsiveness.

#### Day 19: Integration Testing & Optimization
44. Perform integration tests (Frontend/Backend).
45. Optimize API/database performance.

#### Day 20: Deployment
46. Deploy backend (Docker/PM2 on AWS/GCP).
47. Host frontend (Vercel/Netlify).
48. Connect APIs and test in production.

#### Day 21: Final Testing & Launch
49. Final QA & performance tuning.
50. Write documentation (README, API docs, user guide).
51. 🚀 Launch FileSphere!


