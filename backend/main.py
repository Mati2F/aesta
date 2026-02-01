import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/api/chart-data")
def get_chart_data():
    return {
        "title":"Ventas Mensuales",
        "data": [
            {"nombre": "Ene", "valor": 800},
            {"nombre": "Feb", "valor": 1500},
            {"nombre": "Mar", "valor": 2100},
            {"nombre": "Abr", "valor": 1750},
            {"nombre": "May", "valor": 800},
            {"nombre": "Jun", "valor": 950},
        ]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
