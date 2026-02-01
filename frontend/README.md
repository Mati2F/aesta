<strong> Este proyecto fue creado con Next.js, Tailwindcss y Javascript. </strong>

### Para ejecutar el código:

## Backend
1. Entrar a la carpeta
```bash
cd backend
```
2. Crear entorno virtual
```bash
python -m venv venv
```
3. Activar el entorno virtual (recomendable apretar tecla Tab; si se autorellena es porque tiene los nombres correcto de carpetas)
```bash
.\venv\Scripts\activate
```
4. Instalar los requisitos
```bash
pip install -r ./requirements.txt
```
5. Ejecutar el backend
```bash
uvicorn main:app --reload
```

## Frontend
1. Entrar a la carpeta
```bash
cd frontend
```
2. Instalar librería recharts
```bash
npm install recharts
```
3. Ejecutar el proyecto
```bash
npm run dev
```


Con esto cumplido, se abrirá el enlace [http://localhost:3000](http://localhost:3000) en su navegador con el proyecto ^^