// config/multerConfig.ts
import multer, { StorageEngine } from 'multer';
import path from 'path';

// Configuración de almacenamiento
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se almacenarán los archivos
  },
  filename: (req, file, cb) => {
    // Asigna un nombre único al archivo
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`); // Mantiene la extensión original
  },
});

// Crear la instancia de Multer
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limitar a 10MB si lo deseas
});

// Exportar la configuración
export default upload;
