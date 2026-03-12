import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'investigation-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Check file type
const fileFilter = (req, file, cb) => {
    // Solo permitir PDFs y DOCX
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Solo se permiten archivos PDF o DOCX'));
    }
};

export const upload = multer({
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 }, // 25MB Max
    fileFilter: fileFilter
});
