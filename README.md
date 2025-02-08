## Setup

- Backend:
   - python3 -m venv env
   - pip install fastapi uvicorn sqlalchemy psycopg2

## Execution

1. You can download the Zip file and extract it
2. Open the project in you preferred IDE with the root folder named `UGAHACKS10`
3. Navigate to `backend/database.py`
4. Modify the following based on your the setup of PostgreSQL: make sure schema name on application.properties is same as pgAdmin4
   1. `USERNAME= <your_username>`
   2. `PASSWORD= <your_password>`
   3. `HOSTNAME = <your_hostname>`
   4. `PORT = <your_port_num>`
   5. `SCHEMA_NAME = <your_schema>`
6. Locate the terminal and run the following commands to start the Backend:
   1. Enter `cd backend`
   2. `uvicorn main:app --reload`
8. Check the build terminal, to see if the FastAPI project is running (API endpoints on localhost:8080, PostgreSQL on port 5433)