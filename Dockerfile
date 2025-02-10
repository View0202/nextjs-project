# ใช้ Node.js image จาก Docker Hub
FROM node:18 AS build

# ตั้ง working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์ไปยัง container
COPY . .

# สร้างแอป Next.js
RUN npm run build

# ใช้ image สำหรับ production
FROM node:18

WORKDIR /app

# คัดลอกไฟล์ที่สร้างจากขั้นตอนก่อนหน้า
COPY --from=build /app /app

# ตั้งค่า port ที่ container จะฟัง
EXPOSE 3000

# รันแอป
CMD ["npm", "start"]
